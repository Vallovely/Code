#include <stdio.h>
int main(){
    int w,x,h;
    scanf("%d %d %d",&w,&x,&h);
    int b[w+1][x+1][h+1];
    int q;
    for(int i=1;i<=w;i++){
        for(int j=1;j<=x;j++){
            for(int k=1;k<=h;k++){
                b[i][j][k]=1;
            }
        }
    }
    scanf("%d",&q);
    for(int a=1;a<=q;a++){
        int b1,b2,b3,b4,b5,b6;
        scanf("%d %d %d %d %d %d",&b1,&b2,&b3,&b4,&b5,&b6);
        for(int i=b1;i<=b4;i++){
            for(int j=b2;j<=b5;j++){
                for(int k=b3;k<=b6;k++){
                    b[i][j][k]=0;
                }
            }
        }
    }
    int temp=0;
    for(int i=1;i<=w;i++){
        for(int j=1;j<=x;j++){
            for(int k=1;k<=h;k++){
                temp+=b[i][j][k];
            }
        }
    }
    printf("%d\n",temp);
}
