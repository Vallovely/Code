import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from scipy import stats
from scipy.stats import gaussian_kde
from numpy.linalg import LinAlgError
import os

# ================== 模块1：数据处理 ==================
def data_processing(data_path, dim_info):
    """删除Box-Cox变换的版本"""
    try:
        df = pd.read_excel(data_path, header=0)
        raw_data = df.iloc[:, 1:].values.astype(float)
        sample_names = df.iloc[:, 0].tolist()
        n_samples, n_cols = raw_data.shape
    except Exception as e:
        raise ValueError(f"数据读取失败: {str(e)}")

    # 校验维度定义（保持不变）
    for name, cols, dirs in dim_info:
        cols_0based = [c-1 for c in cols]
        if min(cols_0based) < 0 or max(cols_0based) >= n_cols:
            raise ValueError(f"维度'{name}'存在无效列号，有效范围：1-{n_cols}")
        if len(cols_0based) != len(dirs):
            raise ValueError(f"维度'{name}'的列数与方向数不匹配")

    # 标准化处理（删除Box-Cox部分）
    standardized_data = []
    density_records = []
    
    for dim_idx, (name, cols, dirs) in enumerate(dim_info):
        cols_0based = [c-1 for c in cols]
        dim_data = raw_data[:, cols_0based].copy()
        
        for j in range(dim_data.shape[1]):
            original = dim_data[:, j]
            indicator_name = df.columns[cols[j]]
            
            # 数据波动性检查（保持原有处理）
            if np.ptp(original) < 1e-6:
                dim_data[:, j] += np.random.normal(0, 1e-9, size=dim_data.shape[0])
                print(f"警告: 指标'{indicator_name}'数据无变化，已添加微小噪声")
                original = dim_data[:, j]
            
            epsilon = 1e-6
            if dirs[j] == 1:  # 正向指标
                standardized = (original - np.min(original) + epsilon) / \
                              (np.max(original) - np.min(original) + 2*epsilon)
            else:  # 逆向指标
                standardized = (np.max(original) - original + epsilon) / \
                              (np.max(original) - np.min(original) + 2*epsilon)
            
            density_records.append( (indicator_name, original, standardized) )  # 记录结构修改
            dim_data[:, j] = standardized
        
        standardized_data.append(dim_data)

    return {
        'raw_df': df,
        'sample_names': sample_names,
        'standardized_data': standardized_data,
        'density_records': density_records
    }

# ================== 模块2：一层熵权TOPSIS（维度计算）==================
def entropy_topsis_dimension(standardized_data):
    """计算各维度得分"""
    score_matrix = []
    dim_weights = []
    
    for dim_data in standardized_data:
        n_samples = dim_data.shape[0]
        
        # 熵权法
        p = dim_data / (np.sum(dim_data, axis=0, keepdims=True) + 1e-9)
        entropy = -np.sum(p * np.log(p + 1e-9), axis=0) / np.log(n_samples)
        entropy = np.nan_to_num(entropy, nan=1.0)
        weights = (1 - entropy + 1e-9) / np.sum(1 - entropy + 1e-9)
        dim_weights.append(weights)
        
        # TOPSIS
        weighted = dim_data * weights
        pos_ideal = np.max(weighted, axis=0)
        neg_ideal = np.min(weighted, axis=0)
        
        d_pos = np.sqrt(np.sum((weighted - pos_ideal)**2, axis=1))
        d_neg = np.sqrt(np.sum((weighted - neg_ideal)**2, axis=1))
        
        score_matrix.append( d_neg / (d_pos + d_neg + 1e-9) )
    
    return np.column_stack(score_matrix), dim_weights  # 转置为(samples, dimensions)

# ================== 模块3：二层熵权TOPSIS（年度总分）==================
def entropy_topsis_yearly(score_matrix):
    """计算年度总得分"""
    # 标准化
    X = (score_matrix - np.min(score_matrix, axis=0)) / \
        (np.max(score_matrix, axis=0) - np.min(score_matrix, axis=0) + 1e-9)
    
    # 熵权法
    p = X / (np.sum(X, axis=0, keepdims=True) + 1e-9)
    entropy = -np.sum(p * np.log(p + 1e-9), axis=0) / np.log(X.shape[0])
    weights = (1 - entropy) / np.sum(1 - entropy)
    
    # TOPSIS
    weighted = X * weights
    pos_ideal = np.max(weighted, axis=0)
    neg_ideal = np.min(weighted, axis=0)
    
    d_pos = np.linalg.norm(weighted - pos_ideal, axis=1)
    d_neg = np.linalg.norm(weighted - neg_ideal, axis=1)
    
    return d_neg / (d_pos + d_neg + 1e-9), weights

# ================== 模块4：耦合协调模型 ==================
def coupling_coordination(score_matrix, sample_names):
    """计算耦合协调度"""
    n_dims = score_matrix.shape[1]
    epsilon = 1e-6
    
    # 耦合度
    product = np.prod(score_matrix + epsilon, axis=1)
    sum_dims = np.sum(score_matrix, axis=1) + n_dims*epsilon
    C = n_dims * ((product / (sum_dims**n_dims)) ** (1/n_dims))
    
    # 发展指数
    T = np.mean(score_matrix, axis=1)
    
    # 协调度
    D = np.sqrt(C * T)
    
    # 等级划分
    def classify(d):
        if d < 0.3: return "严重失调"
        elif d < 0.5: return "轻度失调"
        elif d < 0.8: return "基本协调"
        else: return "优质协调"
    
    return pd.DataFrame({
        '耦合度': np.round(C, 4),
        '发展指数': np.round(T, 4),
        '协调度': np.round(D, 4),
        '协调等级': [classify(d) for d in D]
    }, index=sample_names)

# ================== 模块5：可视化与结果输出 ==================
def visualize_and_export(results, density_records, dim_info, save_path):
    """结果可视化与导出"""
    # 解包结果
    score_matrix = results['dim_scores']
    yearly_scores = results['yearly_scores']
    coupling_df = results['coupling']


    with pd.ExcelWriter(save_path) as writer:
        
        #标准化数据 
        standardized_data = {}
        for record in density_records:
            col_name = record[0]  # 指标名称
            std_values = record[2]  # 第三元素为标准化数据
            standardized_data[col_name] = std_values
        std_df = pd.DataFrame(standardized_data, index=results['sample_names'])
        std_df.to_excel(writer, sheet_name='标准化数据')

        # 领域得分
        pd.DataFrame(
            score_matrix,
            columns=[dim[0] for dim in dim_info],
            index=results['sample_names']
        ).to_excel(writer, sheet_name='领域得分')
        
        # 年度总得分
        pd.DataFrame(
            {'年度总得分': yearly_scores},
            index=results['sample_names']
        ).to_excel(writer, sheet_name='年度总分')
        
        # 耦合协调度
        coupling_df.to_excel(writer, sheet_name='耦合协调')

        indicator_weight_data = []
        ptr = 0  # 特征名称指针
        for dim_idx, (dim_name, cols, dirs) in enumerate(dim_info):
            n_indicators = len(cols)
            current_features = results['feature_names'][ptr:ptr+n_indicators]
            current_weights = results['indicator_weights'][dim_idx]
            
            for feature, weight in zip(current_features, current_weights):
                indicator_weight_data.append({
                    '维度名称': dim_name,
                    '指标名称': feature,
                    '权重值': f"{weight:.4f}"
                })
            ptr += n_indicators
        
        pd.DataFrame(indicator_weight_data).to_excel(
            writer, 
            sheet_name='一阶指标权重',
            index=False
        )

        domain_weight_data = [{
            '领域名称': dim[0], 
            '权重值': f"{weight:.4f}"
        } for dim, weight in zip(dim_info, results['domain_weights'])]
        
        pd.DataFrame(domain_weight_data).to_excel(
            writer,
            sheet_name='二阶领域权重',
            index=False
        )
    # ========== 可视化图表 ==========
    
    # 指标处理对比图
    n_indicators = len(density_records)
    fig1, axs = plt.subplots(n_indicators, 3, figsize=(18, 3*n_indicators))
    fig1.suptitle('指标处理过程分布图', y=0.99)
    for idx, (name, raw, std) in enumerate(density_records):
        # 原始数据分布
        _plot_distribution(axs[idx,0], raw, '原始数据', 'blue', name)
        # 标准化结果
        _plot_distribution(axs[idx,1], std, '标准化数据', 'green')
    plt.tight_layout(rect=[0, 0.03, 1, 0.97])
    plt.savefig(os.path.join(os.path.dirname(save_path), '指标处理对比图.png'), dpi=300)
    plt.close()

    # ========== 雷达图 ==========
    plt.figure(figsize=(10, 10))
    ax = plt.subplot(111, polar=True)
    
    # 角度计算
    labels = [dim[0] for dim in dim_info]
    angles = np.linspace(0, 2*np.pi, len(labels), endpoint=False).tolist()
    angles += angles[:1]  # 闭合曲线
    
    # 样式设置
    colors = plt.cm.viridis(np.linspace(0, 1, len(results['sample_names'])))
    
    # 绘制每个样本
    for idx, name in enumerate(results['sample_names']):
        values = results['dim_scores'][idx].tolist()
        values += values[:1]  # 闭合数据
        ax.plot(angles, values, color=colors[idx], linewidth=1.5, label=name)
        ax.fill(angles, values, color=colors[idx], alpha=0.1)
    
    # 坐标设置
    ax.set_theta_offset(np.pi/2)
    ax.set_theta_direction(-1)
    plt.xticks(angles[:-1], labels, fontsize=10)
    plt.ylim(0, 1)
    plt.title('多维度得分雷达图', y=1.1, fontsize=14)
    
    # 图例
    plt.legend(
        loc='upper right', 
        bbox_to_anchor=(1.3, 1.1),
        fontsize=8
    )
    
    # 保存
    plt.savefig(
        os.path.join(os.path.dirname(save_path), '多维雷达图.png'), 
        dpi=300, 
        bbox_inches='tight'
    )
    plt.close()

    # 协调度散点图
    plt.figure(figsize=(10,6))
    sns.scatterplot(
        x='发展指数', y='协调度', 
        hue='协调等级', 
        palette={'严重失调':'#FF3333','轻度失调':'#FF9933','基本协调':'#33CC33','优质协调':'#009933'},
        data=coupling_df,
        s=100,
        edgecolor='black'
    )
    plt.title('协调度-发展指数分布')
    plt.grid(alpha=0.3)
    plt.savefig(os.path.join(os.path.dirname(save_path), '协调度分析图.png'), dpi=300)
    plt.close()

def _plot_distribution(ax, data, title, color, label=None):
    """绘制单个分布图"""
    try:
        kde = gaussian_kde(data)
        x = np.linspace(np.min(data), np.max(data), 100)
        ax.plot(x, kde(x), color=color)
        ax.fill_between(x, kde(x), color=color, alpha=0.1)
        ax.set_title(title, fontsize=10)
        ax.set_ylim(0, np.max(kde(x))*1.1)
        if label: ax.set_xlabel(label, fontsize=8)
    except:
        ax.hist(data, bins=10, color=color, alpha=0.3)
    finally:
        ax.tick_params(labelsize=8)

# ================== 主执行流程 ==================
def main_analysis(data_path, dim_info, save_path):
    """主分析流程"""
    # 模块1：数据处理
    processed = data_processing(data_path, dim_info)
    
    # 模块2：一层熵权TOPSIS（领域得分）
    dim_scores, indicator_weights = entropy_topsis_dimension(processed['standardized_data'])
    
    # 模块3：二层熵权TOPSIS（年度总分）
    yearly_scores, domain_weights = entropy_topsis_yearly(dim_scores)

    feature_names = [processed['raw_df'].columns[c]
                     for dim in dim_info
                     for c in [col  for col in dim[1]]]
    
    # 模块4：耦合协调分析
    coupling_df = coupling_coordination(dim_scores, processed['sample_names'])
    
    # 模块5：结果输出
    results = {
        'dim_scores': dim_scores,
        'yearly_scores': yearly_scores,
        'coupling': coupling_df,
        'sample_names': processed['sample_names'],
        'indicator_weights': indicator_weights,
        'domain_weights': domain_weights,
        'feature_names': feature_names
    }
    visualize_and_export(results, processed['density_records'], dim_info, save_path)
    
    return results

# ================== 调用参数（严格保持不变）==================
DATA_PATH = r"C:\Users\Hwh\Desktop\Code\Python\统计建模\完整数据2.xlsx"
SAVE_PATH = r"C:\Users\Hwh\Desktop\Code\Python\统计建模\result.xlsx"

DIM_INFO = [
    ("经济发展", [1, 2, 3], [1, 1, 1]),
    ("工业发展", [4, 5, 6, 7, 8], [1, 1, 1, 1, 1]),
    ("农业发展", [9, 10, 11, 12, 13], [1, 1, 1, 1, 1]),
    ("居民生活", [14, 15, 16, 17], [1, 1, 1, 1]),
    ("人居环境", [18, 19, 20],[1,1,1]),
    ("碳排放", [21, 22, 23], [1, 1, 1])
    
    ]

if __name__ == "__main__":
    results = main_analysis(DATA_PATH, DIM_INFO, SAVE_PATH)
    print("分析完成！结果文件已保存至:", SAVE_PATH)
    
    