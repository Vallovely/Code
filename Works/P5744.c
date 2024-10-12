#include <stdio.h>
int main(){
    int n;
    scanf("%d",&n);
    char name[100];
    int age;
    int score;
    for(int i=1;i<=n;i++){
        scanf("%s",name);
        printf("%s ",name);
        scanf("%d",&age);
        printf("%d ",age+1);
        scanf("%d",&score);
        if(score>=500){
            printf("600\n");
        }else{
            printf("%d\n",(int)score/5*6);
        }
    }
}