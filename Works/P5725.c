#include <stdio.h>
int main(){
    int n;
    scanf("%d",&n);
    for(int i=1;i<=(n*n);i++){
        printf("%02d",i);
        if(i%n==0){
            printf("\n");
        }
    }
    printf("\n");
    int x=1;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            if(i+j<=n){
                printf("  ");
            }else{
                printf("%02d",x);
                x++;
            }
            if(j==n){
                printf("\n");
            }
        }
    }
    return 0;
}