#include <stdio.h>
int main(){
    int n,k;
    scanf("%d %d",&n,&k);
    int sumA=0,sumB=0;
    double numA,numB=0;
    for(int i=1;i<=n;i++){
        if(i%k==0){
            sumA+=i;
            numA+=1.0;
        }else{
            sumB+=i;
            numB+=1.0;
        }
    }
    printf("%.1f %.1f",sumA/numA,sumB/numB);
    return 0;
}