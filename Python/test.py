import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import solve_ivp
from scipy.signal import find_peaks

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False

# 参数设置
m = 1.0          # 质量 (kg)
l = 1.0          # 摆长 (m)
b = 0.1          # 阻尼系数 (N·m·s)
g = 9.8          # 重力加速度 (m/s²)
A = 1.5          # 驱动力振幅 (N·m)
omega_values = [2.0, np.sqrt(g/l)]  # 常规频率 vs 共振频率

# 定义微分方程
def pendulum_driven(t, y, omega):
    theta, dtheta = y
    tau_t = A * np.sin(omega * t)
    dydt = [
        dtheta,
        -(b/(m*l**2)) * dtheta - (g/l)*np.sin(theta) + tau_t/(m*l**2)
    ]
    return dydt

# 初始条件和时间设置
y0 = [0.1, 0.0]  # 初始角度θ=0.1 rad，角速度dθ/dt=0
t_span = [0, 50]  # 模拟时间范围
t_eval = np.linspace(0, 50, 5000)  # 高密度采样

# 数值求解不同频率的驱动
solutions = []
for omega in omega_values:
    sol = solve_ivp(
        pendulum_driven, t_span, y0, method='DOP853',
        args=(omega,), t_eval=t_eval
    )
    solutions.append((sol.t, sol.y[0], sol.y[1]))  # 存储(t, θ, dθ/dt)

# 计算稳态振幅
def calculate_amplitude(t, theta, t_start=30):
    mask = t >= t_start  # 截取稳态部分
    theta_steady = theta[mask]
    
    # 寻找极大值和极小值
    peaks_max, _ = find_peaks(theta_steady)
    peaks_min, _ = find_peaks(-theta_steady)
    
    if len(peaks_max) > 0 and len(peaks_min) > 0:
        amp_max = np.mean(theta_steady[peaks_max])
        amp_min = np.mean(theta_steady[peaks_min])
        amplitude = (amp_max - amp_min) / 2
    else:
        amplitude = 0.0
    return np.abs(amplitude)

amplitudes = []
for t, theta, _ in solutions:
    amp = calculate_amplitude(t, theta)
    amplitudes.append(amp)

# ----------------------------
# Figure 1：时间序列对比（初始显示0-20秒，可缩放）
# ----------------------------
plt.figure(num='Figure 1 - 时间序列对比', figsize=(14, 6))
colors = ['blue', 'red']
labels = [
    f'常规驱动 (ω={omega_values[0]:.1f}), 振幅={amplitudes[0]:.2f} rad',
    f'共振驱动 (ω={omega_values[1]:.2f}), 振幅={amplitudes[1]:.2f} rad'
]

for i, (t, theta, _) in enumerate(solutions):
    plt.plot(t, theta, color=colors[i], linewidth=0.8, label=labels[i])

# 标注振幅箭头
for i, (t, theta, _) in enumerate(solutions):
    mask = (t >= 40) & (t <= 50)  # 最后10秒的稳态区间
    t_last = t[mask]
    theta_last = theta[mask]
    
    if len(theta_last) > 0:
        peak_idx = np.argmax(np.abs(theta_last))
        t_peak = t_last[peak_idx]
        theta_peak = theta_last[peak_idx]
        
        plt.annotate(
            f'{amplitudes[i]:.2f} rad',
            xy=(t_peak, theta_peak),
            xytext=(t_peak-5, theta_peak + 1.5 if i==0 else theta_peak - 1.5),
            arrowprops=dict(facecolor=colors[i], arrowstyle='->', lw=1),
            fontsize=12,
            color=colors[i]
        )

plt.title("单摆角度对比：常规驱动 vs 共振驱动")
plt.xlabel("时间 t (s)")
plt.ylabel("角度 θ (rad)")
plt.xlim(0, 20)  # 初始显示0-20秒
plt.ylim(-5, 5)
plt.legend(loc='upper right')
plt.grid(True, alpha=0.3)

# ----------------------------
# Figure 2：相空间图对比
# ----------------------------
plt.figure(num='Figure 2 - 相空间图对比', figsize=(8, 8))
for i, (t, theta, dtheta) in enumerate(solutions):
    plt.plot(theta, dtheta, color=colors[i], linewidth=0.5, label=labels[i])

plt.title("相空间图对比")
plt.xlabel("θ (rad)")
plt.ylabel("dθ/dt (rad/s)")
plt.xlim(-6, 6)
plt.ylim(-8, 8)
plt.legend()
plt.grid(True, alpha=0.3)

# 显示所有窗口
plt.show(block=False)
plt.pause(0.1)
input("按 Enter 键退出...")