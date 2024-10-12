#include <stdio.h>
#include <math.h>
int main(){
    int m,n;
    scanf("%d %d",&m,&n);
    int a[10]={0};
    for(int i=m;i<=n;i++){
        int base=10;
        for(int j=0;i>=pow(base,j);j++){
            a[i/(int)(pow(base,j))%10]+=1;
        }
    }
    for(int i=0;i<10;i++){
        printf("%d ",a[i]);
    }
    return 0;
}