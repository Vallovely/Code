#include <stdio.h>
int main(){
    int s1,s2,s3;
    scanf("%d %d %d",&s1,&s2,&s3);
    int sum[200]={0};
    int i,j,k;
    for(i=1;i<=s1;i++){
        for(j=1;j<=s2;j++){
            for(k=1;k<=s3;k++){
                sum[i+j+k]+=1;
            }
        }
    }
    int temp=0;
    int ans=0;
    for(i=3;i<=199;i++){
        if(sum[i]>temp){
            temp=sum[i];
            ans=i;
        }
    }
    printf("%d",ans);
}