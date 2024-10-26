// #include <graphics.h>
// #include <stdbool.h>
// #include <conio.h>

// int main() {
//     // 初始化图形系统
//     initgraph(640, 480);
    
//     // 绘制一个红色矩形
//     setfillcolor(RED);
//     solidrectangle(100, 100, 200, 200);
    
//     // 暂停以查看效果
//      getch();
    
//     // 关闭图形界面
//     closegraph();
//     return 0;
// }

#include <graphics.h>
#include <stdio.h>  // 添加这个头文件，使用 getchar()

int main() {
    // 初始化图形系统
    initgraph(640, 480,0);

    // 绘制一个红色矩形
    setfillcolor(RED);
    solidrectangle(100, 100, 200, 200);

    // 暂停以查看效果
    getchar();  // 替换 getch()
    
    // 关闭图形界面
    closegraph();
    return 0;
}

