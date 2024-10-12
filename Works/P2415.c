#include <stdio.h>
int main(){
    long long ans=0;
    int n=0,i,a;
    for(;scanf(" %d",&a)!=EOF;n++){
        ans+=a;
    }
    for(i=1;i<n;i++){
        ans*=2;
    }
    printf("%lld",ans);
    return 0;
}
//输入末尾应换行后CtrlZ，否则会导致程序卡死