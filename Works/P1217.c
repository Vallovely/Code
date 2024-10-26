#include <stdio.h>
#include <stdbool.h>
#include <time.h>

// 判断是否为回文数
bool mirror(int a) {
    int b, c;
    b = 0;
    c = a;
    for (; a > 0;) {
        b *= 10;
        b += a % 10;
        a /= 10;
    }
    return b == c;
}

// 判断是否为素数
bool p(int n) {
    if (n <= 1) {
        return false;
    }
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

int main() {
    int a, b;


    // 读取输入
    scanf("%d %d", &a, &b);

    // 记录程序开始时间
    //clock_t start = clock();

    for (int i = a; i <= b; i++) {
        if (i % 2 != 0 && i % 3 != 0 && (i % 5 != 0 || i == 5) && (i % 7 != 0 || i == 7) && (i % 11 != 0 || i == 11)) {
            if (mirror(i)) {
                if (p(i)) {
                    printf("%d\n", i);
                }
            }
        }
    }

    // 记录程序结束时间
    //clock_t end = clock();

    // 计算并输出运行时间
    //double time_spent = (double)(end - start) / CLOCKS_PER_SEC;
    //printf("程序运行时间: %.6f 秒\n", time_spent);

    return 0;
}