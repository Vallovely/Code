import pygame
import sys
from pygame.locals import *

class IdleGame:
    def __init__(self):
        pygame.init()
        pygame.display.set_caption("the beginning of everything")
        self.font = pygame.font.SysFont(['Microsoft YaHei', 'SimHei', 'Arial'], 24)
        self.screen = pygame.display.set_mode((1080, 720))
        self.color_map = {
                'black': (0, 0, 0), 
                'white': (255, 255, 255), 
                'gray': (128, 128, 128), 
                'blue': (0, 0, 255), 
                'green': (0, 255, 0), 
                'red': (255, 0, 0), 
                'yellow': (255, 255, 0)
                }   
    def update(self):
            return
    def text_render(self, text, color, pos):
        """渲染文本"""
        text_surface = self.font.render(text, True, color)
        self.screen.blit(text_surface, pos)
        return text_surface
        #text: 类型为str，表示要渲染的文本，例子: "Hello, world!"
        #color: 类型为tuple，表示文本的颜色，例子: (255, 0, 0)
        #pos: 类型为tuple，表示文本左上角坐标，例子: (100, 100)
    def botton_render(self, text, text_color, botton_color, pos, size, action):
        """渲染按钮"""
        text_surface = self.font.render(text, True, text_color)
        button_surface = pygame.Surface(size)
        button_surface.fill(botton_color)
        button_surface.blit(text_surface,text_surface.get_rect(center=button_surface.get_rect().center))
        self.screen.blit(button_surface, pos)
        return button_surface
        #text_color: 类型为tuple，表示按钮文本的颜色，例子: (255, 0, 0)
        #botton_color: 类型为tuple，表示按钮的颜色，例子: (255, 0, 0)
        #pos: 类型为tuple，表示按钮左上角坐标，例子: (100, 100)
        #size: 类型为tuple，表示按钮大小，例子: (100, 50)
        #action: 类型为function，表示按钮点击事件，例子: lambda: print("Button clicked!")
    def draw(self):
            """绘制游戏界面"""
            self.screen.fill(self.color_map['white'])
            self.text_render("Hello, world!", self.color_map['red'], (100, 100))
            self.botton_render("Click me!", self.color_map['black'], self.color_map['green'], (300, 300), (100, 50), lambda: print("Button clicked!"))
    def handle_events(self):
        """处理事件"""
        for event in pygame.event.get():
            if event.type == QUIT:
                return False
        return True
    def run(self):
        """主循环"""
        clock = pygame.time.Clock()
        running = True
        while running:
            running = self.handle_events()
            self.update()
            self.draw()
            pygame.display.flip()
            clock.tick(60)

if __name__ == "__main__":
    game = IdleGame()
    game.run()