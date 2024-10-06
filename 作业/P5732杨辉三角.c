#include <stdio.h>
int main(){
    int n;
    scanf("%d", &n);
    int a[n+1][n+1];
    for(int i=1;i<=n;i++){
        a[i][i]=a[i][1]=1;
        printf("%d ",a[i][1]);
        for(int j=2;j<=i-1;j++){
            a[i][j]=a[i-1][j-1]+a[i-1][j];
            printf("%d ",a[i][j]);
        }
        if(i>=2){
            printf("%d ",a[i][i]);
        }
        printf("\n");
    }
}