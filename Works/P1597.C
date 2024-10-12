#include <stdio.h>
#include <string.h>
int main(){
    int a[3]={0,0,0};
    char s1;
    char s2;
    for(;scanf("%c:=%c;",&s1,&s2)==2;){
        a[s1-'a']=(s2>='0'&&s2<='9')?s2-'0':a[s2-'a'];
    }
    printf("%d %d %d",a[0],a[1],a[2]);
}