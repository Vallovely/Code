import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import numpy as np

# 创建画布和坐标轴
fig, ax = plt.subplots(figsize=(8, 6))
ax.set_xlim(-1, 7)
ax.set_ylim(-1, 7)
ax.set_aspect('equal')
ax.axis('off')  # 隐藏坐标轴

# --- 绘制上下对称的两把弯曲尺子 ---
# 生成尺子的弯曲形状（上下对称的正弦曲线）
x = np.linspace(1, 5, 100)
y_upper = 4 + 0.3 * np.sin(x * np.pi/2)  # 上侧尺子向下弯曲
y_lower = 2 - 0.3 * np.sin(x * np.pi/2)  # 下侧尺子向上弯曲

# 绘制上下两把尺子
ax.plot(x, y_upper, color='blue', lw=3, label='上侧尺子')
ax.plot(x, y_lower, color='blue', lw=3, label='下侧尺子')

# --- 绘制被夹住的小球 ---
ball = mpatches.Circle((3, 3), radius=0.4, color='red', zorder=10)
ax.add_patch(ball)
ax.text(3, 3.8, '被夹住的小球', ha='center', color='red', fontsize=10)

# --- 绘制夹持力箭头 ---
# 上侧尺子对球的力（向下）
ax.arrow(3, 4, 0, -0.8, head_width=0.2, head_length=0.3, fc='green', ec='black', lw=2)
ax.text(3.3, 3.5, '夹持力 $N_1$', color='green', fontsize=10)

# 下侧尺子对球的力（向上）
ax.arrow(3, 2, 0, 0.8, head_width=0.2, head_length=0.3, fc='green', ec='black', lw=2)
ax.text(3.3, 2.5, '夹持力 $N_2$', color='green', fontsize=10)

# --- 添加静态参考线（可选）---
ax.plot([1, 5], [3, 3], linestyle='--', color='gray', alpha=0.5)  # 对称中心线

# --- 标注参数 ---
ax.text(5.5, 4.5, '尺子刚度 $k$\n摩擦系数 $\mu$', color='blue', fontsize=10, bbox=dict(facecolor='white', alpha=0.8))
plt.title("两把尺子对称夹持小球的力学示意图", fontsize=12, pad=20)

plt.show()