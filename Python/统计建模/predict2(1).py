import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
plt.rcParams['font.sans-serif'] = ['SimHei']  # 使用黑体
plt.rcParams['axes.unicode_minus'] = False    # 解决负号显示问题
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import MinMaxScaler


# 1. 数据读取与预处理
def load_and_preprocess(file_path):
    # 读取Excel数据（假设第一列是年份，第二列是碳排放值）
    df = pd.read_excel(file_path,header=0)

    # 分离特征和目标变量
    X = df.iloc[:10, 2:].values  # 所有影响碳排放的因素
    y = df.iloc[:10, 1].values  # 碳排放量（第一列）

    # 数据标准化处理
    scaler = MinMaxScaler()
    X_scaled = scaler.fit_transform(X)

    # 构建随机森林模型
    model = RandomForestRegressor(
        n_estimators=200,  # 决策树数量
        max_depth=10,  # 防止过拟合
        random_state=42,
        n_jobs=-1
    )
    model.fit(X_scaled, y)

    return model, scaler


# 2. 预测函数
def predict_emission(model, scaler, new_factors):
    # 数据标准化
    new_factors_scaled = scaler.transform([new_factors])

    # 预测
    prediction = model.predict(new_factors_scaled)

    return prediction[0]


# 3. 可视化函数
def plot_prediction(original_factors, prediction):
    plt.figure(figsize=(10, 6))

    # 创建双轴条形图
    bars = plt.bar(range(len(original_factors)), original_factors, width=0.4, label='输入因素', align='center')
    plt.bar(range(len(original_factors)), [prediction] * len(original_factors), width=0.4,
            label='预测排放量', align='edge', color='orange')

    # 添加数据标签
    plt.xticks(range(len(original_factors)), [f'因子{i + 1}' for i in range(len(original_factors))])
    plt.ylabel('标准化值')
    plt.title('输入因素与预测碳排放量对比')
    plt.legend()
    plt.grid(axis='y', linestyle='--', alpha=0.7)
    plt.tight_layout()
    plt.show()


# 主程序
if __name__ == "__main__":
    # 示例文件路径（需替换为实际路径）
    file_path = "C:\大学\统计建模大赛\副本完整数据2.xlsx"
    df = pd.read_excel(file_path)
    # 加载数据并训练模型
    model, scaler = load_and_preprocess(file_path)

    # 用户输入新数据（示例）
    new_year_factors = df.iloc[11, 2:].values
    print(new_year_factors)
                        # 假设格式：[年份, 因素1, 因素2, 因素3]

    # 执行预测
    predicted_emission = predict_emission(model, scaler, new_year_factors)  # 排除年份

    # 输出结果
    print(f"预测年份的数值为：{predicted_emission:.2f} ")

    # 可视化输入因素与预测结果
    plot_prediction(new_year_factors, predicted_emission)