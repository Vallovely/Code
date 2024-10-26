#include <stdio.h>
#include <stdlib.h>
#include <time.h>
// 显示地图
void showmap(int **map, int row, int col) {
    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            if (map[i][j] == -1) {
                printf("* "); // 显示地雷
            } else {
                printf("%d ", map[i][j]);
            }
        }
        printf("\n");
    }
}

// 增加数字
void numincrease(int *n) {
    if (*n != -1) {
        (*n)++;
    }
}

// 检查坐标是否有效
int isValid(int x, int y, int row, int col) {
    return (x >= 0 && x < row && y >= 0 && y < col);
}

int main() {
    int boom;
    int row, col;

    // 读取输入
    printf("请输入行数、列数和地雷数量: ");
    if (scanf("%d %d %d", &row, &col, &boom) != 3) {
        printf("输入错误，请确保输入了三个数字。\n");
        return 1;
    }

    // 动态分配二维数组
    int **map = (int **)malloc(row * sizeof(int *));
    for (int i = 0; i < row; i++) {
        map[i] = (int *)malloc(col * sizeof(int));
    }

    // 初始化地图
    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            map[i][j] = 0;
        }
    }

    srand((unsigned)time(NULL)); // 设置随机种子

    for (int i = 0; i < boom; ) {
        int x = rand() / (RAND_MAX / (row) + 1); // 更好的随机分布
        int y = rand() / (RAND_MAX / (col) + 1);

        if (map[x][y] != -1) {
            map[x][y] = -1;
            i++;

            // 增加周围格子的数字
            if (isValid(x - 1, y, row, col)) numincrease(&map[x - 1][y]);
            if (isValid(x + 1, y, row, col)) numincrease(&map[x + 1][y]);
            if (isValid(x, y - 1, row, col)) numincrease(&map[x][y - 1]);
            if (isValid(x, y + 1, row, col)) numincrease(&map[x][y + 1]);
            if (isValid(x - 1, y - 1, row, col)) numincrease(&map[x - 1][y - 1]);
            if (isValid(x - 1, y + 1, row, col)) numincrease(&map[x - 1][y + 1]);
            if (isValid(x + 1, y - 1, row, col)) numincrease(&map[x + 1][y - 1]);
            if (isValid(x + 1, y + 1, row, col)) numincrease(&map[x + 1][y + 1]);
        }
    }

    // 显示地图
    showmap(map, row, col);

    // 释放内存
    for (int i = 0; i < row; i++) {
        free(map[i]);
    }
    free(map);
    return 0;
}