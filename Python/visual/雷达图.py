#!/usr/bin/env python
# coding: utf-8

# In[1]:


import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import math
 
# 自定义数据,A-D四个变量，var1-5:5个维度。
df = pd.DataFrame({
'group': ['A','B','C','D'],
'var1': [38, 1.5, 30, 45],
'var2': [29, 10, 9, 34],
'var3': [8, 39, 23, 24],
'var4': [7, 31, 33, 14],
'var5': [28, 15, 32, 14],
#'var6': [23, 25, 18, 23]
})
#获取除了第一列之外的所有列名 
var_names = df.columns[1:]
#print(df)
#print('------------------------')
#print(var_names)


# In[2]:


# 在极坐标下，计算每个轴的角度,5个维度一共有5个轴
#math.pi是python中一个内置常量，用于表示圆周率π。例如，如果有五个维度，角度将均匀分布在0到2π之间，每个角度间隔为2π/5‌
angles = [i/float(len(var_names))*2*math.pi for i in range(len(var_names))]  # 每个变量的角度位置
angles += angles[:1]  # 闭合圆形图，需要在末尾增加一个与起始相同的值(从最开始的列开始算，取到索引1列，左闭右开，所以只能取到索引0列，即第一个数)
print('angles',angles)
#print(float(len(var_names)))


# 仅绘制df中第一行数据的雷达图

# 获取第一行数据，剔除group。values.flatten().tolist()的作用是将多维数组转换为一维数组，并将其转换为列表。
values = df[var_names].iloc[0,:].values.flatten().tolist()
print('df[var_names]:',df[var_names])
values += values[:1] # 闭合圆形图，需要在末尾增加一个与起始相同的值
print('values:',values)


# 初始化布局，polar=True表示画极坐标图
ax = plt.subplot(111, polar=True)

#x标签，即雷达图中圆外周围的变量标签名字，需要指定角度位置和维度的名称对应
#angles[:-1]表示在原来angles基础上减少最后一个值（取索引时，最后一列不取），即对应的5个维度的角度，var_names为5个维度的名字 
plt.xticks(angles[:-1], var_names, color='grey', size=8)
print(angles[:-1])


# y标签，即圆里面标签数值，把括号里的0改为其他数值，比如90，观察一下图的变化
ax.set_rlabel_position(0)
plt.yticks([10,20,30], ["10","20","30"], color="grey", size=7)
plt.ylim(0,40)
 
# 绘制数据，若5个维度，为了保证雷达图首尾闭合，angles,values里必须是6个值
ax.plot(angles, values, linewidth=1, linestyle='solid')

# 填充区域颜色
ax.fill(angles, values, 'b', alpha=0.1)
 
plt.show()


# In[3]:

#绘制多变量的雷达图（多个变量在一张图上显示）

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import math
 
# 自定义数据
df = pd.DataFrame({
'group': ['A','B','C','D'],
'var1': [38, 1.5, 30, 4],
'var2': [29, 10, 9, 34],
'var3': [8, 39, 23, 24],
'var4': [7, 31, 33, 14],
'var5': [28, 15, 32, 14]
})

#取到var1-var5的标签值 
var_names = df.columns[1:]
 
# 计算每个轴的角度，整个圆的角度认为是2Π
angles = [i/float(len(var_names))*2*math.pi for i in range(len(var_names))]  # 每个变量的角度位置
angles += angles[:1]  # 闭合圆形图，需要在末尾增加一个与起始相同的值
 
 
# 初始化布局
ax = plt.subplot(111, polar=True)
 
# 偏移-将第一个轴位于顶部
ax.set_theta_offset(math.pi / 2)
#设置顺时针方向或逆时针方向，默认是逆时针，-1为顺时针
ax.set_theta_direction(-1)
 
# 添加多个极坐标图
# 绘制第一个图
#获取第一行数据，剔除group。values.flatten().tolist()的作用是将多维数组转换为一维数组，并将其转换为列表。
values = df.loc[0].drop('group').values.flatten().tolist()
values += values[:1]
ax.plot(angles, values, linewidth=1, linestyle='solid', label="group A")
ax.fill(angles, values, 'b', alpha=0.1)
#print(values)

# 绘制第二个图
#获取第二行数据，剔除group。values.flatten().tolist()的作用是将多维数组转换为一维数组，并将其转换为列表。
values = df.loc[1].drop('group').values.flatten().tolist()
values += values[:1]
ax.plot(angles, values, linewidth=1, linestyle='solid', label="group B")
ax.fill(angles, values, 'r', alpha=0.1)
#print(values)
 
plt.xticks(angles[:-1], var_names)
ax.set_rlabel_position(0)
plt.yticks([10,20,30], ["10","20","30"], color="grey", size=7)
plt.legend(loc='upper right', bbox_to_anchor=(0.1, 0.1))
 
plt.show()


# In[4]:


import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import math
 
# 自定义数据
df = pd.DataFrame({
'group': ['A','B','C','D'],
'var1': [38, 1.5, 30, 4],
'var2': [29, 10, 9, 34],
'var3': [8, 39, 23, 24],
'var4': [7, 31, 33, 14],
'var5': [28, 15, 32, 14]
})
 
 
# 自定义函数-每一行绘制一个雷达图
def make_spider(row, title, color):
 
 # 计算维度个数，本例共4个变量，每个变量有五个维度var1-var5,N=5
    categories = df.columns[1:]
    N = len(categories)

 # 计算角度
    angles = [n / float(N) * 2 * math.pi for n in range(N)]
    angles += angles[:1]
 
 # 初始化布局,下面for in循环row值从0开始
    ax = plt.subplot(2,2,row+1, polar=True)
 
 # 偏移-将第一个轴位于顶部，设置顺时针方向
    ax.set_theta_offset(math.pi / 2)
    ax.set_theta_direction(-1)
 
 # x标签需要5个维度值，#angles[:-1]表示在原来angles基础上（6个值）减少最后一个值 
    plt.xticks(angles[:-1], categories, color='grey', size=8)
 
 # y标签
    ax.set_rlabel_position(0)
    plt.yticks([10,20,30], ["10","20","30"], color="grey", size=7)
    plt.ylim(0,40)
 
 # 画雷达图，因为要闭合，需要六个值
    values = df.loc[row].drop('group').values.flatten().tolist()
    values += values[:1]
    ax.plot(angles, values, color=color, linewidth=2, linestyle='solid')
    ax.fill(angles, values, color=color, alpha=0.4)
 
 # 标题
    plt.title(title, size=11, color=color, y=1.1)
 
# 图标参数,可以把下面两行加注释，观察图的变化
my_dpi=96
plt.figure(figsize=(1000/my_dpi, 1000/my_dpi), dpi=my_dpi)
 
# 创建一个颜色映射,len(df.index)=4,所以取色带Set2中的4种颜色
my_palette = plt.get_cmap("Accent", len(df.index))
#print(len(df.index)) 

# 绘制多个图，本例绘制了4个图，"group"+df['group'][row]的意思是group A-D中的任意一个
for row in range(0, len(df.index)):
    make_spider(row=row, title='group '+df['group'][row], color=my_palette(row))
plt.savefig('D:/ABC/雷达图.jpg',dpi=1000)
plt.show()


# In[ ]:




