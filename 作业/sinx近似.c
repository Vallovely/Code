#include <stdio.h>
#include <math.h>

double factorial(int n) {
    if(n==0||n==1) {
        return 1;
    }else{
        return n*factorial(n-1);
    }
}//阶乘

double sine(double x, int n) {
    double result=0;
    for(int i=1;i<=n;i++) {
        double term=pow(x,2*i-1)/factorial(2*i-1);
        if(i%2!=0) {
            result+=term;
        }else{
            result-=term;
        }
    }
    return result;
}//用泰勒计算正弦值

int main() {
    double x;
    int n;  
    scanf("%lf %d", &x, &n);
    double sinx=sine(x,n);
    printf("%.8f\n",sinx);
    return 0;
}