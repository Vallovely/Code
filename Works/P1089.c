#include <stdio.h>
int main(){
    int out[13];
    int bank=0;
    int left=0;
    for(int i=1;i<=12;i++){
        scanf("%d",&out[i]);
        left+=(300-out[i]);
        if(left<0){
            printf("-%d\n",i);
            return 0;
        }
        bank+=(left/100)*100;
        left-=(left/100)*100;
    }
    left+=(bank*1.2);
    printf("%d\n",left);
    return 0;
}