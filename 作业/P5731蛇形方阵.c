#include <stdio.h>
int main(){
    int n;
    scanf("%d",&n);
    int a[n+1][n+1];
    for(int i=1;i<=n;i++){
        if(i%2==0){
            for(int j=1;j<=n;j++){
            a[i][j]=(i*4+j);
            }
        }
        if(i%2==1){
            for(int j=1;j<=n;j++){
            a[i][j]=(i*4+j);
            printf("%2d ",a[i][j]);
            }
            printf("\n");
        }
    }
}
