#include <stdio.h>
int peach(int n){
    if(n==1){
        return 1;
    }
    return (peach(n-1)+1)*2;
}
int main(){
    for(int i=2;i<=10;i++){
         if(i!=10){
            printf("第%d天还剩下%d个桃子\n ",11-i,peach(i));
         }
         else{
            printf("第%d天摘了%d个桃子\n ",11-i,peach(i));
         }
    }
    return 0;
}