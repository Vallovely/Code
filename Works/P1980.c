#include <stdio.h>
#include <math.h>
int main(){
    int n,x;
    scanf("%d %d",&n,&x);
    int temp=0;
    for(int i=1;i<=n;i++){
        int base=10;
        for(int j=0;i>=pow(base,j);j++){
            if(i/(int)(pow(base,j))%10==x){//获取当前位数字
                temp++;
            }
        }
    }
    printf("%d",temp);
    return 0;
}