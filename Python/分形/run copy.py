import turtle
import sys

def dol_system_fractal(n_iter, angle, axiom, rules, rating,length=300, start_pos=(-200, 0), 
                       start_heading=0, bg_color="white", color="black", 
                       screen_size=(800, 600), speed=0):
    """
    使用海龟绘图实现DOL系统生成分形
    
    参数:
    n_iter (int): 迭代次数
    angle (float): 旋转角度（度数）
    axiom (str): 初始公理
    rules (dict): 替代规则字典 {原始字符: 替换字符串}
    length (int): 初始线段长度 (默认为300)
    start_pos (tuple): 起始位置 (默认(-200, 0))
    start_heading (float): 起始方向 (默认0，向右)
    bg_color (str): 背景颜色 (默认"black")
    color (str): 线条颜色 (默认"cyan")
    screen_size (tuple): 窗口尺寸 (默认(800, 600))
    speed (int): 海龟速度 (0最快, 默认为0)
    """
    if sys.version_info >= (3, 11):
        turtle.mode("standard")
        turtle.TurtleScreen._RUNNING = True
    
    # 设置窗口
    window = turtle.Screen()
    window.title(f"DOL系统分形 (迭代次数: {n_iter})")
    window.bgcolor(bg_color)
    window.setup(width=screen_size[0], height=screen_size[1])
    
    # 创建海龟
    fractal_turtle = turtle.Turtle()
    fractal_turtle.speed(speed)
    fractal_turtle.color(color)
    fractal_turtle.penup()
    fractal_turtle.goto(start_pos)
    fractal_turtle.setheading(start_heading)
    fractal_turtle.pendown()
    
    # 应用L系统规则生成字符串
    def generate_l_string(axiom, rules, n):
        """生成L系统字符串"""
        current_string = axiom
        
        for _ in range(n):
            new_string = ""
            for char in current_string:
                if char in rules:
                    new_string += rules[char]
                else:
                    new_string += char
            current_string = new_string
        
        return current_string
    
    # 计算缩放因子
    def calculate_scale_factor(rules):
        """计算缩放因子，保持整体尺寸相似"""
        avg_length = 0
        count = 0
        
        for key in rules:
            # 计算规则中"F"的数量
            f_count = rules[key].count("F")
            if f_count > 0:
                avg_length += f_count
                count += 1
        
        # 避免除以零
        if count == 0 or avg_length == 0:
            return 3  # 默认缩放因子
        
        return avg_length / count
    
    # 绘图函数
    def draw_fractal(instructions, segment_length, angle):
        """根据L系统指令绘制分形"""
        stack = []  # 用于保存状态的栈
        
        for command in instructions:
            if command == "F":  # 向前移动并画线
                fractal_turtle.forward(segment_length)
            elif command == "G": #向前移动并画线
                fractal_turtle.forward(segment_length)
            elif command == "f":  # 向前移动但不画线
                fractal_turtle.penup()
                fractal_turtle.forward(segment_length)
                fractal_turtle.pendown()
            elif command == "+":  # 左转
                fractal_turtle.left(angle)
            elif command == "-":  # 右转
                fractal_turtle.right(angle)
            elif command == "|":  # 调头
                fractal_turtle.setheading(fractal_turtle.heading() + 180)
            elif command == "[":  # 保存状态
                stack.append((fractal_turtle.position(), fractal_turtle.heading()))
            elif command == "]":  # 恢复状态
                if stack:
                    position, heading = stack.pop()
                    fractal_turtle.penup()
                    fractal_turtle.goto(position)
                    fractal_turtle.setheading(heading)
                    fractal_turtle.pendown()
            elif command == ">":  # 增加线段长度
                segment_length *= 1.1
            elif command == "<":  # 减少线段长度
                segment_length *= 0.9
    
    # 计算缩放因子
    if rating==None:
        scale_factor = calculate_scale_factor(rules)
        actual_length = length / (scale_factor ** n_iter)
    else:
        actual_length = length / (rating ** n_iter)
    
    # 生成指令字符串
    instructions = generate_l_string(axiom, rules, n_iter)
    
    # 打印生成的字符串（调试用）
    print(f"生成的L系统字符串长度: {len(instructions)}")
    
    # 绘制分形
    draw_fractal(instructions, actual_length, angle)
    
    # 完成绘图
    fractal_turtle.hideturtle()
    window.exitonclick()

if __name__ == "__main__":
    # =============================================
    # 示例用法：科赫雪花
    # =============================================
    
    dol_system_fractal(
        n_iter=0,
        angle=60,
        rating=3,
        axiom="F--F--F",
        rules={"F": "F+F--F+F"},
        length=500,
        start_pos=(-250, 150),
        screen_size=(800, 600),
    )
    
    
    # =============================================
    # 示例用法：分形树
    # =============================================
    # dol_system_fractal(
    #     n_iter=5,
    #     angle=25,
    #     axiom="F",
    #     rules={"F": "F[-F]F[+F]F"},
    #     length=150,
    #     start_pos=(0, -300),
    #     start_heading=90
    # )
    
    # =============================================
    # 示例用法：谢尔宾斯基三角形
    # =============================================
    """
    dol_system_fractal(
        n_iter=0,
        angle=60,
        rating=2,
        axiom="F--F--F",
        rules={
            "F": "F--F--F--GG",
            "G": "GG",
        },
        screen_size=(800, 600),
        length=400,
        start_pos=(-160, 100)
    )
    """
    
    """
    dol_system_fractal(
        n_iter=0,
        angle=90,
        rating=3,
        axiom="F",
        rules={
            "F": "F-F+F+F+f-F-F-F+F",
            "f": "fff"
        },
    )
    """
