#include <stdio.h>
int Gcd(int a, int b){
    int temp;
    for(int i=2;i<=a;i++){
        if(a%i==0&&b%i==0){
            temp=i;
        }
    }
    return temp;
}
int main(){
    int a,b;
    printf("Enter two numbers: ");
    scanf("%d %d",&a,&b);
    if(a<=0||b<=0){
        printf("Invalid input!");
    }else{
        printf("%d",Gcd(a,b));
    }
}