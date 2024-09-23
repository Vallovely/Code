#include <stdio.h>
int main(){
    int h[8][3];
    for(int i=1;i<=7;i++){
        scanf(
        "%d %d"
        ,&h[i][1],&h[i][2]
        );
    };
    int x=0;
    int y=8;
    for(int i=1;i<=7;i++){
        if(h[i][1]+h[i][2]>y){
            x=i;
			y=h[i][1]+h[i][2];
            printf("%d\n",y);
        };
    };
    printf("%d",x);
};