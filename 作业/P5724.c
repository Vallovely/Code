#include <stdio.h>
int main(){
    int n;
    scanf("%d",&n);
    int a[n];
    int max=0;
    int min=1000;
    for(int i=0;i<n;i++){
        scanf("%d",&a[i]);
        if(a[i]>max){
            max=a[i];
        }
        if(a[i]<min){
            min=a[i];
        }
    }
    printf("%d\n",max-min);
}