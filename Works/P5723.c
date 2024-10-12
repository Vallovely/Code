#include <stdio.h>
#include <stdbool.h>
bool p(int n){
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
    scanf("%d", &N);
    int temp=0;
    int num=0;
    for(int i=2;temp+i<=N;i++){
        if(p(i)){
            printf("%d\n", i);
            temp+=i;
            num++;
        }
    }
    printf("%d\n", num);
    return 0;
}