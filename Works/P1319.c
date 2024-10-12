#include <stdio.h>
int main(){
    int N;
    scanf("%d", &N);
    int p=1;
    int left=0;
    for(int i=1;i<=N*N;i++){
        if(left==0){
            scanf("%d", &left);
            p=1-p;
        }
        if(left==0){
            scanf("%d", &left);
            p=1-p;
        }
        printf("%d", p);
        left--;
        if(i%N==0){
            printf("\n");
        }
    }
}