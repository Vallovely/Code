#include <stdio.h>
#include <stdbool.h>
bool mirror(int a){
    int b,c;
    b=0;
    c=a;
    for(;a>0;){
        b*=10;
        b+=a%10;
        a/=10;
    }
    return b==c;
}
//需stdbool.h头文件
//判断是否为回文数
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
//判断是否为素数
int main(){
    int a,b;
    scanf("%d %d",&a,&b);
    for(int i=a;i<=b;i++){
        if(i%2!=0&&i%3!=0&&(i%5!=0||i==5)&&(i%7!=0||i==7)&&(i%11!=0||i==11)){
            if(mirror(i)){
                if(p(i)){
                    printf("%d\n",i);
                }
            }//嵌套显著降低时间复杂度
        }
    }
    return 0;
}
