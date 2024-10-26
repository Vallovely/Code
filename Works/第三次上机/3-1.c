#include <stdio.h>
int main(){
    int n;
    scanf("%d", &n);
    int v=25,t=2;
    long long int sum=0;
    for(int i=1;i<=n;i++){
        sum+=v*t;
        v*=2;
        t+=2;
    }
    printf("%lld", sum);
}