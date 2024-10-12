#include <stdio.h>
int main(){
    double k;
    scanf("%lf", &k);
    double sum=0.0;
    int i=1;
    for(;sum<=k;i++){
        sum+=(1.0/i);
        //printf("%lf ",sum);
    }
    printf("%d",i-1);
}