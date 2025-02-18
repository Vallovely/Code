#include <stdio.h>
void swap(int *, int *);
int main(){
    int a=5,b=10;
    printf("交换前: a=%d, b=%d\n",a,b);
    int *p1=&a, *p2=&b;
    int temp;
    temp=*p1;
    *p1=*p2;
    *p2=temp;
    printf("在main函数中交换后: a=%d, b=%d\n",a,b);
    swap(p1,p2);
    return 0;
}
void swap(int *a, int *b){
    int temp;
    temp=*a;
    *a=*b;
    *b=temp;
    printf("在swap函数中交换后: a=%d, b=%d\n",*a,*b);
    return;
}