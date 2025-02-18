#include <stdio.h>
#include <stdlib.h>
#include <string.h>
/*int main(void)
{
    int a[5]= {1,2,3,4,5};
    int *p = a;
    for(int i=0;i<5;i++){
        printf("%d ",*(p+i));
        printf("%d ",p[i]);
        printf("%d ",a[i]);
        printf("%d \n",*(a+i));
    }
     printf("%d \n",sizeof(*a));
        printf("%d \n",sizeof(*p));
        printf("%d \n",sizeof(*&a));
        printf("%d \n",sizeof(*&p));
    return 0;
}*/
/*int main(void)
{
    char a[6]="hello";
    char *p = a;
    printf("%c \n",*p);
    printf("%s \n",a);
}*/
/*int main(void){
    int a=1;
    int c=(a*=2);
    printf("%d \n",a);
    c+=(a+=3);
    printf("%d \n",a);
    printf("%d \n",c);
    return 0;
}*/
void countCalls() {
    static int callCount = 0; // 函数内的静态变量
    callCount++;
    printf("Called %d times\n", callCount);
}
int main(void){
    countCalls();
    countCalls();
    countCalls();
    return 0;
}
    