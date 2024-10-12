#include <stdio.h>
int main(){
    int n,m;
    scanf("%d %d",&n,&m);
    int a[n+1];
    for(int i=1;i<=n;i++){
        scanf("%d",&a[i]);
    }
    int hurt=__INT32_MAX__;
    for(int i=1;i<=n-m+1;i++){
        int temp=0;
        for(int j=i;j<=i+m-1;j++){
            temp+=a[j];
        }
        if(temp<hurt){
            hurt=temp;
        }
    }
    printf("%d",hurt);
    return 0;
}