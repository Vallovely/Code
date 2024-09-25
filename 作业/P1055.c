#include <stdio.h>
int main(){
    char c[10];
    scanf("%c-%c%c%c-%c%c%c%c%c-%c",&c[1],&c[2],&c[3],&c[4],&c[5],&c[6],&c[7],&c[8],&c[9],&c[0]);
    int x[10],sum=0;
    for(int i=1;i<10;i++){
        x[i]=(int)(c[i]-'0');
        sum+=x[i]*i;
    }
    int r=sum%11;
    if(r<10){
        if(r==(int)(c[0]-'0')){
            printf("Right");
        }else{
            printf("%c-%c%c%c-%c%c%c%c%c-%d",c[1],c[2],c[3],c[4],c[5],c[6],c[7],c[8],c[9],r);
        }
    }
    if(r==10){
        if (c[0]=='X'){
            printf("Right");
        }else{
            printf("%c-%c%c%c-%c%c%c%c%c-X",c[1],c[2],c[3],c[4],c[5],c[6],c[7],c[8],c[9]);
        }
    }
}