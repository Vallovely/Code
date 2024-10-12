#include <stdio.h>
#include <string.h>
int main(){
    int n;
    scanf("%d", &n);
    char c[100];
    scanf("%s", c);
    int l=strlen(c);
    for(int i=0;i<l;i++){
        c[i]=(c[i]-'a'+n)%26+'a';
    }
    printf("%s", c);
    return 0;
}