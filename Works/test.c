// #include <stdio.h>
// int main(){
//   int a, b, c;
//   scanf("%d %d %d", &a, &b, &c);
//   float d = (a+b+c);
//   printf("%f\n", d);
//   return 0;
// }

#include <graphics.h>
#include <stdbool.h>

int main() {
    // 初始化图形系统
    initgraph(640, 480,0);
    
    // 绘制一个红色矩形
    setfillcolor(RED);
    solidrectangle(100, 100, 200, 200);
    
    // 暂停以查看效果
    getch();
    
    // 关闭图形界面
    closegraph();
    return 0;
}
