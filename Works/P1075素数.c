#include <stdio.h>
#include <math.h>
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
    int n;
    scanf("%d", &n);
    for(int i=2;i*i<=n;i++){
        if(n%i==0&&p(i)&&p(n/i)){
            printf("%d\n",n/i);
        }
    }
}


