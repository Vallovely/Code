#include <stdio.h>
int main(){
    int n;
    scanf("%d", &n);
    double a[n+1];
    a[0]=0.00;
    a[1]=1.00;
    for(int i=2;i<=n;i++){
        a[i]=a[i-1]+a[i-2];
    }
    printf("%.2lf", a[n]);
}