#include <stdio.h>
int main(){
    int n;
    scanf("%d", &n);
    int a[n+1];
    int b[120]={0};
    for(int i=1;i<=n;i++){
        scanf("%d", &a[i]);
    }
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            for(int k=j+1;k<=n;k++){
                if(a[j]+a[k]-a[i]==0){
                    b[i]=1;
                }
            }
        }
    }
    int sum=0;
    for(int i=1;i<=n;i++){
        sum+=b[i];
    }
    printf("%d", sum);
    return 0;
}