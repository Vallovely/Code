#include <stdio.h>
int d(int x){
    return (x+1)*2;
}
int main(){
    int n;
    scanf("%d",&n);
    int peach=1;
    for(int i=1;i<=n-1;i++){
        peach=d(peach);
    }
    printf("%d",peach);
}