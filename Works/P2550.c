#include <stdio.h>
int main(){
    int n;
    int exp[7];
    scanf("%d", &n);
    for(int i=0;i<7;i++){
        scanf("%d", &exp[i]);
    }
    int hold[8]={0,0,0,0,0,0,0,0};
    int num;
    for(int i=0;i<n;i++){
        int bingo=0;
        for(int j=0;j<7;j++){
            scanf("%d",&num);
            for(int k=0;k<7;k++){
                if(exp[k]==num){
                    bingo+=1;
                }
            }
        }
        hold[bingo]+=1;
    }
    printf("%d ", hold[7]);
    printf("%d ", hold[6]);
    printf("%d ", hold[5]);
    printf("%d ", hold[4]);
    printf("%d ", hold[3]);
    printf("%d ", hold[2]);
    printf("%d ", hold[1]);
    return 0;
}