#include <stdio.h>
int main(){
    int n;
    scanf("%d", &n);
    int x=1;
    for(int k=1;;k++){
        for(x=1;x<=100;x++){
            if(52*(7*x+21*k)==n){
                printf("%d\n", x);
                printf("%d\n", k);
                return 0;
            }
        }
    }
}
