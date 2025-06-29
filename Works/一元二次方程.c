#include <stdio.h>

#include <math.h>

int main() {
    double a, b, c;
    double delta, rt1, rt2, rP, iP;

    // 输入系数
    printf("请输入方程的系数 a, b, c: ");
    if (scanf("%lf %lf %lf", &a, &b, &c) != 3) {
        printf("输入错误，请确保输入了三个数字。\n");
        return 1;
    }

    // 判断 a 是否为 0
    if (a == 0) {
        if (b == 0) {
            if (c == 0) {
                printf("方程有无数个解。\n");
            } else {
                printf("方程无解。\n");
            }
        } else {
            // 如果 a 为 0 且 b 不为 0，则方程退化为一元一次方程
            rt1 = -c / b;
            printf("这是一个一元一次方程，解为: x = %.2f\n", rt1);
        }
        return 0;
    }

    // 计算判别式
    delta = b * b - 4 * a * c;

    // 根据判别式的值来计算根
    if (delta > 0) {
        // 两个不同的实数根
        rt1 = (-b + sqrt(delta)) / (2 * a);
        rt2 = (-b - sqrt(delta)) / (2 * a);
        printf("方程有两个实数根: x1 = %.2f, x2 = %.2f\n", rt1, rt2);
    } else if (delta == 0) {
        // 一个重根
        rt1 = -b / (2 * a);
        printf("方程有一个重根: x1 = x2 = %.2f\n", rt1);
    } else {
        // 两个复数根
        rP = -b / (2 * a);
        iP = sqrt(-delta) / (2 * a);
        printf("方程有两个复数根: x1 = %.2f + %.2fi, x2 = %.2f - %.2fi\n", rP, iP, rP, iP);
    }

    return 0;
}