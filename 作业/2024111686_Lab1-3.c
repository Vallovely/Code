#include<stdio.h>
int main(){
    int x;   
    float t,tt;
    scanf("%d",&x);
    scanf("%f",&t);
    switch(x){
        case 0:
        tt=(5*(t-32))/9;
        printf("摄氏度为%.2f\n",tt);
            break;
        case 1:
        tt=t*9/5+32;
        printf("华氏度为%.2f\n",tt);
            break;
        default:
            break;
    }
    return 0;
}
 
