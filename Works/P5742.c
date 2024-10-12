#include <stdio.h>
int main(){
    int n;
    scanf("%d", &n);
    int a[3];
    for(int i=0;i<n;i++){
        scanf("%d %d %d", &a[0], &a[1], &a[2]);
        if(a[1]+a[2]>140&&a[1]*7+a[2]*3>=800){
            printf("Excellent\n");
        }else{
            printf("Not excellent\n");
        }
    }
}
