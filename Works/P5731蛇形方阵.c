#include <stdio.h>
int main(){
    int n;
    scanf("%d",&n);
    int a[n+1][n+1];
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            a[i][j]=0;
        }
    }
    int derection=1;
    int c=1,j=1;
    a[c][j]=1;
    for(int i=2;i<=n*n;i++){
        if(derection==1){
            if(j+1<=n&&a[c][j+1]==0){
                j++;
                a[c][j]=i;
            }else{
                derection=2;
            }
        }
        if(derection==2){
            if(c+1<=n&&a[c+1][j]==0){
                c++;
                a[c][j]=i;
            }else{
                derection=3;
            }
        }
        if(derection==3){
            if(j-1>=1&&a[c][j-1]==0){
                j--;
                a[c][j]=i;
            }else{
                derection=4;
            }
        }
        if(derection==4){
            if(c-1>=1&&a[c-1][j]==0){
                c--;
                a[c][j]=i;
            }else{
                derection=1;
                j++;
                a[c][j]=i;
            }
        }
    }
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            printf("%5d",a[i][j]);
        }
        printf("\n");
    }
    return 0;
}
