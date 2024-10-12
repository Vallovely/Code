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
    int n;
    scanf("%d", &n);
    int a[n];
    for(int i=0;i<n;i++){
        scanf("%d", &a[i]);
        if(p(a[i])){
            printf("%d ", a[i]);
        }
    }
    return 0;
}