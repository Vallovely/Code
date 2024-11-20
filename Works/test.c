
// int main(){
//   int a, b, c;
//   scanf("%d %d %d", &a, &b, &c);
//   float d = (a+b+c);
//   printf("%f\n", d);
//   return 0;
// }

#include <graphics.h>
#include <stdbool.h>
#include <stdio.h>
int main() {
    // 初始化图形系统
    initgraph(200,200,0);
    
    // 绘制一个蓝色矩形
    setfillcolor(BLUE);
    solidrectangle(1,1,100,100);
    // 暂停以查看效果
    getchar();
    
    // 关闭图形界面
    closegraph();
    return 0;
}
