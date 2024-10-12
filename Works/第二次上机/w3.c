#include <stdio.h>
#include <math.h>
int main(){
    int h,m;
    int H,M;
    scanf("%d,%d",&h,&m);
    scanf("%d,%d",&H,&M);
    int t=(int)abs(H*60+M-h*60-m);
    printf("%d hour %d minute",t/60,t%60);
}