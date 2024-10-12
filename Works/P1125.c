#include <stdio.h>
#include <string.h>
#include <stdbool.h>
bool p(int n){
    if(n<=1){
        return false;
    }
    for(int i=2;i*i<=n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}
//需stdbool.h头文件
//判断是否为素数函数 作者说好用极了()
int main(){
    char str[100];
    scanf("%s", str);
    char letter[26]={0};
    for(int i=0;i<strlen(str);i++){
        letter[str[i]-'a']++;
    }
    int max=0;
    int min=100;
    for(int i=0;i<26;i++){
        if(letter[i]>max){
            max=letter[i];
        }
        if(letter[i]<min&&letter[i]!=0){
            min=letter[i];
        }
    }
    if(p(max-min)){
        printf("Lucky Word\n");
        printf("%d\n", max-min);
    }else{
        printf("No Answer\n");
        printf("0");
    }
}