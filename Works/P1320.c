#include <stdio.h>
#include <string.h>
int main(){
    int N;
    char x[40001];
    char str[200];
    scanf("%s",str);
    int l=strlen(str);
    strcat(x,str);
    for(int i=2;i<=l;i++){
        scanf("%s",str);
        strcat(x,str);
    }
    printf("%d ",l);
    if(x[0]=='1'){
        printf("0 ");
    }
    char temp=x[0];
    int num=0;
    for(int i=0;i<=strlen(x)-1;i++){
        if(x[i]==temp){
            num++;
        }else{
            temp=x[i];
            printf("%d ",num);
            num=1;
        }
    }
    printf("%d",num);
    return 0;
}