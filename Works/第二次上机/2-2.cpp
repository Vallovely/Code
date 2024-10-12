#include <stdio.h>
int main(){
    char letter;
    scanf("%c", &letter);
    int num;
    if(letter>='A'&&letter<='Z'){
        num=letter;
    }else{
        if(letter>='a'&&letter<='z'){
            num=letter-'a'+'A';
        }else{
            printf("error:这不是一个字母！");
            return -1;
        }
    }
    int n=(int)(num-'A'+1);
    char a[2*n-1][n];
    for(int j=0;j<n;j++){
        for(int i=0;i<(2*n-1);i++){
            if(i<=n-1){
               if((i+j)>=(n-1)){
                    a[i][j]=(char)('A'+(i+j-n+1));
                }else{
                   a[i][j]=' ';
                }
            }
            a[2*n-2-i][j]=a[i][j];
            printf("%c", a[i][j]);
        }
        printf("\n");
    }
    return 0;
}