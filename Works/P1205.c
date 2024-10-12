#include <stdio.h>
#include <stdbool.h>
int main(){
    int n;
    scanf("%d", &n);
    char a[n+1][n+1],b[n+1][n+1];
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            scanf(" %c", &a[i][j]);
        }
    }
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            scanf(" %c", &b[i][j]);
        }
    }
    //输入两个矩阵
    int way[8]={0,0,0,0,0,0,0,0};
    
    
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            if(a[i][j]!=b[j][n-i+1]){
                way[1]=1;
            }
        }
    }
    //顺90 1

    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            if(a[i][j]!=b[n-i+1][n-j+1]){
                way[2]=1;
            }
        }
    }
    //顺180 2

    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            if(a[i][j]!=b[n-j+1][i]){
                way[3]=1;
            }
        }
    }
    //顺270 3

    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            if(a[i][j]!=b[i][n-j+1]){
                way[4]=1;
            }
        }
    }
    //水平反射 4

    int det1=1,det2=1,det3=1;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            if(a[i][j]!=b[n-j+1][n-i+1]){
                det1=0;
            }
            if(a[i][j]!=b[n-i+1][j]){
                det2=0;
            }
            if(a[i][j]!=b[j][i]){
                det3=0;
            }
            if(det1==0&&det2==0&&det3==0){
                way[5]=1;
            }
        }
    }
    //水平+旋转 5

    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            if(a[i][j]!=b[i][j]){
                way[6]=1;
            }
        }
    }
    //不变 6

    
    for(int i=1;i<=7;i++){
        if((int)way[i]==(int)0){
            printf("%d", i);
            return 0;
        }
    }
}