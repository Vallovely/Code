#include <stdio.h>

int main(){
    int deng[2000005]={0};
    int n;
    scanf("%d", &n);
    double c[5001][2];
    for(int i=1;i<=n;i++){
        scanf("%lf%lf", &c[i][0], &c[i][1]);
    }
    for(int i=1;i<=n;i++){
        int p;
        for(int j=1;j<=c[i][1];j++){
            p=j*c[i][0];
            deng[p]=1-deng[p];
        }
    }
    for(int i=1;i<=2000005;i++){
        if(deng[i]==1){
            printf("%d ", i);
            return 0;
        }
    }
}
   