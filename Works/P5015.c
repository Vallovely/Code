#include <stdio.h>
#include <string.h>
int main(){
    char str[20];
    *gets(str);
    int w=0;
    for(int i=0; i<strlen(str); i++){
        if(str[i]>='a' && str[i]<='z'){
            w++;
        }
        if(str[i]>='A' && str[i]<='Z'){
            w++;
        }
        if(str[i]>='0' && str[i]<='9'){
            w++;
        }
    }
    printf("%d",w);
    return 0;
}