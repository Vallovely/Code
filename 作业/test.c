#include <stdio.h>
int main(){
    int a=5,b =-a++;
    int x=5,c=-(x++);
    printf("a=%d,b=%d,c=%d\n",a,b,c);
}