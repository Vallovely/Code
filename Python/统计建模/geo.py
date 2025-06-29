import numpy as np
import plotly.graph_objects as go
from skimage.measure import marching_cubes

# 生成网格数据（步长 0.1 平衡精度与内存）
step = 0.1
x = np.arange(-1.5, 1.5, step)
y = np.arange(-1.5, 1.5, step)
z = np.arange(-1.5, 1.5, step)
X, Y, Z = np.meshgrid(x, y, z, indexing='ij')

# 计算方程并提取等值面
F = (X**2 + Y**2 + Z**2)**2 - 2 * X * Y
vertices, faces, _, _ = marching_cubes(F, level=0, spacing=(step, step, step))

# 转换为实际坐标并绘图
vertices = vertices * step + np.array([x[0], y[0], z[0]])
fig = go.Figure(data=[go.Mesh3d(
    x=vertices[:,0], y=vertices[:,1], z=vertices[:,2],
    i=faces[:,0], j=faces[:,1], k=faces[:,2],
    opacity=0.5, color='cyan'
)])
fig.show()