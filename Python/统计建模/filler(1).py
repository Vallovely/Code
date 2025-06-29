import numpy as np
import pandas as pd
from scipy.interpolate import CubicSpline
import matplotlib.pyplot as plt
plt.rcParams['font.sans-serif'] = ['SimHei']  # 使用黑体
plt.rcParams['axes.unicode_minus'] = False    # 解决负号显示问题
import os

def fill_missing_values(input_path, output_path):
    """缺失值填充与可视化综合处理"""
    # 读取原始数据
    try:
        orig_df = pd.read_excel(input_path, header=1)
        print(f"✅ 成功读取文件: {os.path.basename(input_path)}")
    except Exception as e:
        raise FileNotFoundError(f"文件读取失败: {str(e)}")

    # 创建填充副本
    filled_df = orig_df.copy()
    # print(filled_df)
    time_col = filled_df.iloc[:, 0]  # 假设第一列为时间/样本列
    # print(time_col)
    # 列级填充处理
    for col in filled_df.columns[1:]:  # 跳过首列
        col_data = filled_df[col].values.astype(float)
        # print(col_data)
        # 处理全空列
        if np.all(np.isnan(col_data)):
            filled_df[col] = 0.0
            print(f"⚠️ 列 '{col}' 全为空，已填充0")
            continue

        valid_mask = ~np.isnan(col_data) #获取该列中非nan数据下标
        x_valid = time_col[valid_mask] #获取该列中非nan年份
        y_valid = col_data[valid_mask] #获取该列非nan数据
        cs = CubicSpline(x_valid, y_valid, bc_type='natural')  # 以自然边界条件（二阶导为零）得到三次样条插值函数
        y_interp = cs(time_col) #计算所有点对应数据
        # 计算列均值并填充
        # col_mean = np.nanmean(col_data)
        filled_col = np.where(np.isnan(col_data), y_interp, col_data) #填充
        filled_df[col] = filled_col
        print(f"🔧 列 '{col}' 填充 {np.sum(np.isnan(col_data))} 个缺失值")

    # 保存填充文件
    try:
        filled_df.to_excel(output_path, index=False)
        print(f"💾 已保存填充文件: {os.path.abspath(output_path)}")
    except PermissionError:
        raise PermissionError("文件保存失败：请关闭已打开的Excel文件")

    # 生成组合图表
    _generate_combined_plots(orig_df, filled_df, output_path)

def _generate_combined_plots(orig_df, filled_df, output_path):
    """生成多指标组合对比图"""
    # 创建可视化目录
    vis_dir = os.path.join(os.path.dirname(output_path), "visualization")
    os.makedirs(vis_dir, exist_ok=True)

    # 准备绘图数据
    time_values = orig_df.iloc[:, 0]  # 第一列作为x轴
    indicators = orig_df.columns[1:]  # 需要绘制的指标列
    n_indicators = len(indicators)

    # 创建画布布局（每行3个子图）
    n_cols = 3
    n_rows = (n_indicators + n_cols - 1) // n_cols
    fig, axs = plt.subplots(n_rows, n_cols, figsize=(18, 5*n_rows))
    axs = axs.flatten() if isinstance(axs, np.ndarray) else [axs]

    # 遍历所有指标绘制子图
    for idx, col in enumerate(indicators):
        ax = axs[idx]
        
        # 原始数据（带缺失）
        orig_vals = orig_df[col].astype(float)
        # 填充后数据
        filled_vals = filled_df[col].astype(float)
        
        # 绘制双折线
        ax.plot(time_values, orig_vals, 
                marker='o', markersize=4, linestyle=':', 
                color='#1f77b4', alpha=0.8, label='原始数据')
        ax.plot(time_values, filled_vals, 
                marker='', linestyle='-', 
                color='#ff7f0e', alpha=0.9, label='补全数据', lw=1.5)
        
        # 标记填充点
        nan_pos = time_values[orig_vals.isna()]
        nan_vals = filled_vals[orig_vals.isna()]
        ax.scatter(nan_pos, nan_vals, 
                   s=50, edgecolor='red', facecolor='none', 
                   linewidth=1.5, zorder=5, label='填充点')
        
        # 子图装饰
        ax.set_title(col, fontsize=12, pad=8)
        ax.grid(True, alpha=0.3, linestyle=':')
        ax.tick_params(axis='x', rotation=30, labelsize=8)
        ax.tick_params(axis='y', labelsize=8)
        
        # 仅底部子图显示x轴标签
        if idx < (n_rows-1)*n_cols:
            ax.set_xlabel('')
        else:
            ax.set_xlabel(time_values.name, fontsize=9)

    # 隐藏多余子图
    for idx in range(n_indicators, len(axs)):
        axs[idx].axis('off')

    # 添加共享图例
    handles, labels = axs[0].get_legend_handles_labels()
    fig.legend(handles, labels, 
               loc='upper right', 
               bbox_to_anchor=(0.98, 0.97), 
               frameon=False,
               fontsize=10)

    # 调整布局并保存
    plt.suptitle("指标数据补全可视化对比", y=0.99, fontsize=14)
    plt.tight_layout(rect=[0, 0, 1, 0.95])  # 为总标题留空间
    plot_path = os.path.join(vis_dir, "指标数据补全对比图.png")
    plt.savefig(plot_path, dpi=150, bbox_inches='tight')
    plt.close()
    print(f"📊 可视化图表已保存: {plot_path}")

if __name__ == "__main__":
    # ====== 直接修改这两个路径 ======
    INPUT_PATH  = r"C:\Users\Hwh\Desktop\Code\Python\统计建模\数据收集2.xlsx"
    OUTPUT_PATH = r"C:\Users\Hwh\Desktop\Code\Python\统计建模\完整数据2.xlsx"
    
    try:
        fill_missing_values(INPUT_PATH, OUTPUT_PATH)
    except Exception as e:
        print(f"❌ 运行错误: {str(e)}")