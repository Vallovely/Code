#include <stdio.h>
int main(){
    int x,n,s=0;
    scanf("%d %d",&x,&n);
    for(int i=0;i<n;i++){
        int l=(x+i)%7;
        if(l==0||l==6){
        }else{
            s=s+250;
        };
    };
    printf("%d",s);
    return 0;
};