#include <stdio.h>
int main(){
    int total=900;
    int single[4]={160,40,50,80};
    for(int i=1;i<=6;i++){
        for(int j=0;j<=23;j++){
            for(int k=0;k<=18;k++){
                for(int l=0;l<=12;l++){
                    if(i*single[0]+j*single[1]+k*single[2]+l*single[3]==total&&j+k>=1&&i+k+j+l<=10){
                        printf("%d %d %d %d\n",i,j,k,l);
                    }
                }
            }
        }
    }
}