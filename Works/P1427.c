#include <stdio.h>
int main(){
    int a[101];
    int i;
    for(i=0;i<101&&(a[i-1]!=0||i==0);i++){
        scanf("%d",&a[i]);
    }
    for(int j=i-2;j>=0;j--){
        printf("%d ",a[j]);
    }
}