#include <stdio.h>
int main(){
    int x[11];
    for(int i=0;i<10;i++){
        scanf("%d",&x[i]);
    };
    scanf("%d",&x[10]);
    int temp=0;
    for(int j=0;j<10;j++){
        if(x[j]<=(x[10]+30)){
            temp+=1;
        };
    };
    printf("%d",temp);
    return 0;
}