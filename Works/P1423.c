#include <stdio.h>
int main(){
    double s;
    scanf("%lf",&s);
    double ds=2.0;
    double covered=0.0;
    int i=0;
    for(;covered<s;i++){
        covered+=ds;
        ds*=0.98;
    }
    printf("%d\n",i);
}