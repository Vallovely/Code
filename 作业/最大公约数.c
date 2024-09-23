#include <stdio.h>
int greatestCommonDivisor(int x1,int x2){
    int temp;
    for(int i=2;i<=x1;i++){
        if(x1%i==0&&x2%i==0){
            temp=i;
        }
    }
    return temp;
};

