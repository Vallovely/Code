#include <stdio.h>
int main(){
    int n;
    scanf("%d", &n);
    int a[n+1],b[n+1];
    for(int i=1;i<=n;i++){
        scanf("%d", &a[i]);
        b[i]=0;
    }
    for(int i=1;i<=n;i++){
        for(int j=1;j<i;j++){
            if(a[j]<a[i]){
                b[i]++;
            }
        }
        printf("%d ", b[i]);
    }
}