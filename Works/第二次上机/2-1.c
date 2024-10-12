#include <stdio.h>
int main(){
    double n;//由于题目没有交代是否必须为整点时刻，使用double保险(
    scanf("%lf", &n);
    if(0<=n && n<12){
        printf("good morning.");
        return 0;
    }
    if(12==n){
        printf("good noon.");
        return 0;
    }
    if(n>12&&n<18){
        printf("good afternoon.");
        return 0;
    }
    if(n>=18&&n<21){
        printf("good evening.");
        return 0;
    }
    if(n>=21&&n<24){
        printf("good night.");
        return 0;
    }
    printf("the input is invalid.");
    return 0;
}