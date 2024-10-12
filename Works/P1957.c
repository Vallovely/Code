#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main() {
    int n;
    scanf("%d", &n);

    char operation;
    char temp;
    int num1, num2;
    char str1[20], str2[20], result_str[20];

    for (int i = 0; i < n; i++) {
        // 读取操作符
        scanf(" %c", &operation);  // 注意前面的空格，用于忽略前导空白字符

        if (operation >= 'a' && operation <= 'c') {
            temp = operation;  // 保存操作符
            // 读取两个整数
            scanf("%d %d", &num1, &num2);
        } else {
            ungetc(operation, stdin);  // 跳过操作符
            scanf("%d %d", &num1, &num2);
            operation = temp;  // 还原操作符
        }
        sprintf(str1, "%d", num1);
        sprintf(str2, "%d", num2);
        // 根据操作符执行相应的运算
        switch (operation) {
            case 'a':
                sprintf(result_str, "%d", num1 + num2);
                printf("%d+%d=%s\n", num1, num2, result_str);
                break;

            case 'b':
                sprintf(result_str, "%d", num1 - num2);
                printf("%d-%d=%s\n", num1, num2, result_str);
                break;

            case 'c':
                sprintf(result_str, "%d", num1 * num2);
                printf("%d*%d=%s\n", num1, num2, result_str);
                break;

            default:
                printf("Invalid operation: %c\n", operation);
                continue;
        }

        // 计算并输出总长度
        int total_length = strlen(result_str) + strlen(str1) + strlen(str2) + 2;
        printf("%d\n", total_length);
    }

    return 0;
}