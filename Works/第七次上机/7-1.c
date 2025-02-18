#include <stdio.h>
#include <stdbool.h>
struct test1
{
    char a;
    float c;
    double d;
    char f;
    //1+p3+4+8+1+p7=24
};

struct test2
{
    char c;
    int *p1;
    int t;
    double *p2;
    //1+p7+8+4+p4+8=32
};

typedef struct 
{
    char c1;
    int i;
    //1+p3+4=8
} S1;

struct S3
{
    char c2;
    S1 s;
    char c3;
    //1+p3+1+p3+4+1+p3=16
};

struct example {
    char a;      // 1 byte, 对齐要求 1 字节
    long long b[3];    // 8 bytes (4 bytes each), 对齐要求 4 字节
    short c;     // 2 bytes, 对齐要求 2 字节
    //1+7+8+8+8+2+6
};
int main(){
    printf("Size of test1 is %d\n", sizeof(struct test1));
    printf("Size of test2 is %d\n", sizeof(struct test2));
    printf("Size of S3 is %d\n", sizeof(struct S3));
    printf("Size of example is %d\n", sizeof(struct example));
}