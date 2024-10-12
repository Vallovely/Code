#include<stdio.h>
int main()
{
    int n;
    int s[101]={0},p[101]={0};
    p[0]=1;
    scanf("%d",&n);
    for(int i=1;i<=n;i++){
        for(int j=0;j<=100;j++){
            p[j]*=i;
        }
        for(int j=0;j<=99;j++){
            if(p[j]>=10){
                p[j+1]+=p[j]/10;
                p[j]%=10;
            }
        }
        for(int j=0;j<=100;j++){
            s[j]+=p[j];
        }
        for(int j=0;j<=99;j++){
            if(s[j]>=10){
                s[j+1]+=s[j]/10;
                s[j]%=10;
            }
        }
    }
    int i;
    for(i=100;s[i]==0;i--){
    }
    for(int j=i;j>=0;j--){
        printf("%d",s[j]);
    }
    return 0;
}
