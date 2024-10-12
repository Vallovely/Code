#include <stdio.h>
int main(){
    int n,l,x[1000];
    scanf("%d", &n);
    x[0]=n;
    for(l=1;n!=1;l++){
        if(n%2==0){
            n/=2;
        }else{
            n*=3;
            n+=1;
        }
        x[l]=n;
    }
    for(int j=l-1;j>=0;j--){
        printf("%d ",x[j]);
    }
}