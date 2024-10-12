#include <stdio.h>
#include <math.h>
int main(){
    int n;
    scanf("%d", &n);
    int a[n][3];
    int temp=0;
    for(int i=0;i<n;i++){
        scanf("%d %d %d", &a[i][0], &a[i][1], &a[i][2]);
    }
    for(int i=0;i<n;i++){
        for(int j=i+1;j<n;j++){
            temp=(fabs(a[i][0]-a[j][0])<=5&&fabs(a[i][1]-a[j][1])<=5&&fabs(a[i][2]-a[j][2])<=5&&fabs(a[i][0]+a[i][1]+a[i][2]-a[j][0]-a[j][1]-a[j][2])<=10)?temp+1:temp;
        }
    }
    printf("%d\n", temp);
    return 0;
}