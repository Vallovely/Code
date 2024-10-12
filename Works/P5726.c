#include <stdio.h>

int main(){
    int N;
    scanf("%d", &N);
    int a[10000]={0};
    int h=-1;
    int l=11;
    double sum=0.0;
    for(int i=0;i<N;i++){
        scanf("%d", &a[i]);
        if(a[i]>h){
            h=a[i];
        }
        if(a[i]<l){
            l=a[i];
        }
        sum+=a[i];
    }
    double avg=(sum-l-h)/(N-2);
    printf("%.2f", avg);
    return 0;
}
