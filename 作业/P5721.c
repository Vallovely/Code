#include <stdio.h>
int print(int x){
    if(x<10){
        printf("0%d",x);
    }
    else{
        printf("%d",x);
    }
}
int main(){
    int n;
    int temp=1;
    scanf("%d", &n);
    for(int i=1;i<=n;i++){
        for(int j=1;j<=(n+1-i);j++){
            print(temp);    
            temp++;
        }
        printf("\n");
    }
    return 0;
}