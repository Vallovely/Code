#include <stdio.h>
int main(){
    int s,v;
    scanf("%d %d",&s,&v);
    int time=10;
    if (s%v==0){
        time+=s/v;
    }else{
        time+=(s/v+1);
    }
    int endtime=(1440+480);
    int begintime=endtime-time;
    int min=begintime%60;
    int hour=((begintime-min)/60)%24;
    printf("%02d:%02d",hour,min);
}