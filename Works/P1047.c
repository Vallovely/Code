#include <stdio.h>
int main(){
    int x[10001];
    int l,m;
    scanf("%d %d",&l,&m);
    for(int i=0;i<=l;i++){
        x[i]=1;
    }
    for(int j=1;j<=m;j++){
        int u,v;
        scanf("%d %d",&u,&v);
        for(;u<=v;u++){
            x[u]=0;
        }
    }
    int tree=0;
    for(int i=0;i<=l;i++){
        tree+=x[i];
    }   
    printf("%d",tree);
    return 0;
}