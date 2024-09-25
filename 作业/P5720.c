#include <stdio.h>
int main(){
    int a;
    scanf("%d", &a);
    int i;
    for(i=1;a!=1;i++){
        a/=2;
    }
    printf("%d",i);
}