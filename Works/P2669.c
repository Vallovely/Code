#include <stdio.h>
int main(){
    int n;
    scanf("%d",&n);
    int gold=0;
    int level=1;
    int exp=0;
    for(int i=1;i<=n;i++){
        exp+=1;
        gold+=level;
        if(exp>=level){
            exp=0;
            level+=1;
        }
    }
    printf("%d",gold);
    return 0;
}