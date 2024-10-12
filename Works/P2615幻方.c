#include <stdio.h>
int main(){
    int n;
    scanf("%d", &n);
    int a[40][40]={0};
    int ci,ji;
    for(int i=1;i<=n*n;i++){
        if(i==1){
            a[1][(n+1)/2]=1;
            ci=1;
            ji=(n+1)/2;
            //printf("a%d在(%d,%d)\n",i,ci,ji);
            continue;
        }
        if(ci==1&&ji!=n){
            a[n][ji+1]=i;
            ci=n;
            ji=ji+1;
            //printf("b%d在(%d,%d)\n",i,ci,ji);
            continue;
        }
        if(ci!=1&&ji==n){
            a[ci-1][1]=i;
            ci=ci-1;
            ji=1;
            //printf("c%d在(%d,%d)\n",i,ci,ji);
            continue;
        }
        if(ci==1&&ji==n){
            a[ci+1][ji]=i;
            ci=ci+1;
            ji=ji;
            //printf("d%d在(%d,%d)\n",i,ci,ji);
            continue;
        }
        if(ci!=1&&ji!=n){
            if(a[ci-1][ji+1]==0){
                a[ci-1][ji+1]=i;
                ci=ci-1;
                ji=ji+1;
                //printf("e%d在(%d,%d)\n",i,ci,ji);
                continue;
            }else{
                a[ci+1][ji]=i;
                ci=ci+1;
                ji=ji;
                //printf("f%d在(%d,%d)\n",i,ci,ji);
                continue;
            }
        }
    }
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            printf("%d ",a[i][j]);
        }
        printf("\n");
    }
    return 0;
}