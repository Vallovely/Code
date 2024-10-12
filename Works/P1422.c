#include <stdio.h>
int main(){
    int x;
    scanf("%d",&x);
    if(x<=150){
        printf("%.1f",x*0.4463);
    };
    if(x>150&&x<=400){
        printf("%.1f",150*0.4463+(x-150)*0.4663);
    };
    if(x>400){
        printf("%.1f",150*0.4463+250*0.4663+(x-400)*0.5663);
    };
};