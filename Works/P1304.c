#include <stdio.h>
#include <stdbool.h>
bool p(int n){
    if(n<=1){
        return false;
    }
    for(int i=2;i*i<=n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}
//需stdbool.h头文件
//判断是否为素数函数 作者说好用极了()
int main(){
    int N;
    scanf("%d",&N);
    for(int i=4;i<=N;i+=2){
        for(int j=2;j+j<=i;j++){
            if(p(j)){
                if(p(i-j)){
                    printf("%d=%d+%d\n",i,j,i-j);
                    break;  
                }
            }
        }
    }
    
}