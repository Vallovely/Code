#include <stdio.h>
#include <math.h>
int main(){
    int n;
    scanf("%d", &n);
    int a[(int)pow(2, n)+1][(int)pow(2, n)+1];
    a[1][1]=1;
    a[1][2]=1;
    a[2][1]=1;
    a[2][2]=0;
    for(int x=2;x<=n;x++){
        for(int i=1;i<=pow(2,x-1);i++){
            for(int j=1;j<=pow(2,x-1);j++){
                a[i+(int)pow(2,x-1)][j+(int)pow(2,x-1)]=0;
                a[i+(int)pow(2,x-1)][j]=a[i][j];
                a[i][j+(int)pow(2,x-1)]=a[i][j];
            }
        }
    }
    for(int i=pow(2,n);i>=1;i--){
        for(int j=pow(2,n);j>=1;j--){
            printf("%d ", a[i][j]);
        }
        printf("\n");
    }
}