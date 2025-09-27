import numpy as np
import matplotlib.pyplot as plt

def linear_regression(x_data, y_data):
    # 计算基本统计量
    n = len(x_data)
    x_mean = np.mean(x_data)
    y_mean = np.mean(y_data)
    xy_mean = np.mean(np.multiply(x_data, y_data))
    x_square_mean = np.mean(np.square(x_data))
    x_mean_square = x_mean ** 2
    
    # 计算斜率和截距
    k = (xy_mean - x_mean * y_mean) / (x_square_mean - x_mean_square)
    b = y_mean - k * x_mean
    
    # 创建回归线数据
    regression_line = k * np.array(x_data) + b
    
    # 输出计算结果
    print(f"x均值: {x_mean:.4f}")
    print(f"y均值: {y_mean:.4f}")
    print(f"xy均值: {xy_mean:.4f}")
    print(f"x均值平方: {x_mean_square:.4f}")
    print(f"x平方均值: {x_square_mean:.4f}")
    print(f"斜率k: {k:.4f}")
    print(f"截距b: {b:.4f}")
    
    # 绘制图像
    plt.figure(figsize=(10, 6))
    plt.scatter(x_data, y_data, color='blue', label='原始数据')
    plt.plot(x_data, regression_line, color='red', label=f'回归线: y = {k:.4f}x + {b:.4f}')
    
    plt.title('一元线性回归分析')
    plt.xlabel('X')
    plt.ylabel('Y')
    plt.legend()
    plt.grid(True)
    plt.show()
    
    return k, b

# 示例数据
x_data = [2.0, 2.5, 3, 3.5, 4]
y_data = [38.9, 48.7, 58.1, 67.6, 77.7]

# 执行线性回归
linear_regression(x_data, y_data)