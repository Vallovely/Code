import turtle
import time

# 设置窗口
window = turtle.Screen()
window.title("科赫曲线 - L系统分形")
window.bgcolor("black")
window.setup(width=800, height=600)

# 创建海龟
koch_turtle = turtle.Turtle()
koch_turtle.speed(0)
koch_turtle.color("cyan")
koch_turtle.penup()
koch_turtle.goto(-200, 0)
koch_turtle.pendown()

# L系统参数
iterations = 0  # 迭代次数（1-4效果最佳，更高次数会增加计算时间）
length = 300    # 初始长度
angle = 60      # 旋转角度（科赫曲线通常为60度，这里设为90度创造变体）

# 科赫曲线的L系统规则
def koch_l_system(n):
    """生成L系统字符串"""
    s = "F--F--F"  # 初始状态
    
    for _ in range(n):
        s = s.replace("F", "F+F--F+F")
        print(f"Iteration {_ + 1}: {s}")  # 输出每次迭代的结果
    return s

# 绘图函数
def draw_koch_curve(instructions, length, angle):
    """根据L系统指令绘制曲线"""
    positions = []
    angles = []
    
    for command in instructions:
        if command == "F":
            koch_turtle.forward(length)
        elif command == "+":
            koch_turtle.left(angle)
        elif command == "-":
            koch_turtle.right(angle)
        elif command == "[":
            positions.append(koch_turtle.position())
            angles.append(koch_turtle.heading())
        elif command == "]":
            pos = positions.pop()
            ang = angles.pop()
            koch_turtle.penup()
            koch_turtle.goto(pos)
            koch_turtle.setheading(ang)
            koch_turtle.pendown()
    
    # 添加结束标记点
    koch_turtle.dot(5, "red")

# 显示标题
title = turtle.Turtle()
title.speed(0)
title.color("white")
title.penup()
title.hideturtle()
title.goto(0, 250)
title.write("科赫曲线 (L系统生成)", align="center", font=("Arial", 16, "bold"))

# 显示参数
info = turtle.Turtle()
info.speed(0)
info.color("yellow")
info.penup()
info.hideturtle()
info.goto(0, -270)
info.write(f"迭代次数: {iterations} | 角度: {angle}°", align="center", font=("Arial", 12))

# 添加装饰性边界
border = turtle.Turtle()
border.speed(0)
border.color("gray")
border.penup()
border.goto(-350, -250)
border.pendown()
for _ in range(2):
    border.forward(700)
    border.left(90)
    border.forward(500)
    border.left(90)
border.hideturtle()

# 计算缩放因子
scale_factor = 1 / (3 ** iterations)
actual_length = length * scale_factor

# 生成并绘制科赫曲线
instructions = koch_l_system(iterations)
koch_turtle.pensize(2)
draw_koch_curve(instructions, actual_length, angle)

# 添加完成提示
koch_turtle.penup()
koch_turtle.goto(0, -230)
koch_turtle.color("lightgreen")
koch_turtle.write("科赫曲线绘制完成！", align="center", font=("Arial", 14, "bold"))

# 保持窗口打开
turtle.done()