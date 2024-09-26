#include <stdio.h>
int main(){
    int n,l,x[l+1];
    scanf("%d", &n);
    x[0]=n;
    for(l=1;n!=1;l++){
        if(n%2==0){
            n/=2;
        }else{
            n*=3;
            n+=1;
        }
        printf("n的值为%d\n",n);
        printf("l的值为%d\n",l);
        x[l]=n;
        printf("x[%d]的值为%d\n\n",l,x[l]);
    }
    printf("\n循环结束后l的值为%d\n",l);
}