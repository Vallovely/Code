#include <stdio.h>
#include <stdbool.h>
#define R 100
#define C 100
typedef struct matrix{
    int row,col;
    int data[R+1][C+1];
}matrix;