#include <stdio.h>
int main(){
    char a;
    scanf("%c", &a);
    printf("%c", (int)(a+'A'-'a'));
    return 0;
}