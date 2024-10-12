#include <stdio.h>
#include <stdbool.h>
bool runnian(int year){
    if(year%4==0&&(year%100!=0||year%400==0)){
        return true;
    }
    else{
        return false;
    }
}
int main(){
    int x,y;
    scanf("%d %d",&x,&y);
    int temp=0;
    for(int i=x;i<=y;i++){
        if(runnian(i)){
            temp++;
        }
    }
    printf("%d\n",temp);
    for(int i=x;i<=y;i++){
        if(runnian(i)){
            printf("%d ",i);
        }
    }
}