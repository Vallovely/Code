#include <stdio.h>
int main(){
    int a=9;
    if(a%2==1){
        a=a+1;
        printf("这怎么会有区别呢\n");
    }
    if(a%2==0){
        printf("哈哈，还真有\n");
    }
}