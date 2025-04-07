import pandas as pd
import numpy as np

# 设置随机种子保证可重复性
np.random.seed(42)

# 生成列名 (Param_01到Param_30)
columns = [f'Param_{i+1:02d}' for i in range(30)]

# ========== 修改部分开始 ==========
# 第一步：创建完整的数据集（不含缺失值）
data = {
    # 前10列：高方差正态分布
    **{f'Param_{i+1:02d}': np.random.normal(loc=50, scale=20, size=100) for i in range(10)},
    
    # 中间10列：均匀分布
    **{f'Param_{i+11:02d}': np.random.uniform(0, 1, 100) for i in range(10)},
    
    # 后10列：低方差泊松分布
    **{f'Param_{i+21:02d}': np.random.poisson(lam=5, size=100) for i in range(10)}
}

# 第二步：单独添加缺失值
for col in columns[::3]:  # 每隔3列添加缺失值
    mask = np.random.rand(100) < 0.95  # 生成布尔掩码
    data[col] = np.where(mask, data[col], np.nan)  # 保留95%数据，5%设为NaN
# ========== 修改部分结束 ==========

# 创建DataFrame
df = pd.DataFrame(data)



# 保存为CSV
df.to_csv('sample_data.csv', index=False)

print("数据生成成功！前5行预览：")
print(df.head())