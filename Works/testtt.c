#include <stdio.h>
void func(int a, int b){
    a=5;
    b=10;
    printf("a=%d, b=%d\n", a, b);
}
int main(){
    int a=1, b=2;
    printf("a=%d, b=%d\n", a, b);
    func(a, b);
    printf("a=%d, b=%d\n", a, b);
    return 0;
}