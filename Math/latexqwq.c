#include <stdio.h>
int main(){
    double a;
    scanf("%lf", &a);
    for(int i=1;i<=1000;i++){
        a=a+a*a/(i*i);
        printf("%.12lf\n", a);
    }
}