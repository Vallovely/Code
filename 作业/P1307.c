#include <stdio.h>
#include <string.h>
#include <stdbool.h>
int main(){
    char str[20]={0};
    scanf("%s", str);
    if(str[0]=='-'){
        printf("-");
    }
    bool ban=false;
    for(int i=strlen(str)-1;i>=0;i--){
        if(i!=0){
            if(str[i]!='0'){
                ban=true;
                printf("%c", str[i]);
            }else{
                if(ban){
                    printf("%c", str[i]);
                }
            }
        }else{
            if(str[i]!='-'){
                printf("%c", str[i]);
            }
        }
    }
    return 0;
}