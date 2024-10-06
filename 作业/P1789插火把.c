#include <stdio.h>
int main(){
    int n,x,y;
    scanf("%d %d %d",&n,&x,&y);
    int a[n+5][n+5];
    for(int i=1;i<=n+4;i++){
        for(int j=1;j<=n+4;j++){
            a[i][j]=1;
        }
    }
    for(int i=1;i<=x;i++){
        int xx0,xy0;
        scanf("%d %d",&xx0,&xy0);
        int xx=xx0+2,xy=xy0+2;
        a[xx][xy]=0;
        a[xx+1][xy]=0;
        a[xx+2][xy]=0;
        a[xx-1][xy]=0;
        a[xx-2][xy]=0;
        a[xx][xy+1]=0;
        a[xx][xy+2]=0;
        a[xx][xy-1]=0;
        a[xx][xy-2]=0;
        a[xx+1][xy+1]=0;
        a[xx+1][xy-1]=0;
        a[xx-1][xy+1]=0;
        a[xx-1][xy-1]=0;
    }
    for(int i=1;i<=y;i++){
        int yx0,yy0;
        scanf("%d %d",&yx0,&yy0);
        int yx=yx0+2,yy=yy0+2;
        a[yx][yy]=0;
        a[yx+1][yy]=0;
        a[yx+2][yy]=0;
        a[yx-1][yy]=0;
        a[yx-2][yy]=0;
        a[yx][yy+1]=0;
        a[yx][yy+2]=0;
        a[yx][yy-1]=0;
        a[yx][yy-2]=0;
        a[yx+1][yy+1]=0;
        a[yx+1][yy-1]=0;
        a[yx-1][yy+1]=0;
        a[yx-1][yy-1]=0;
        a[yx+2][yy+2]=0;
        a[yx+2][yy-2]=0;
        a[yx-2][yy+2]=0;
        a[yx-2][yy-2]=0;
        a[yx+2][yy+1]=0;
        a[yx+2][yy-1]=0;
        a[yx-2][yy+1]=0;
        a[yx-2][yy-1]=0;
        a[yx+1][yy+2]=0;
        a[yx+1][yy-2]=0;
        a[yx-1][yy+2]=0;
        a[yx-1][yy-2]=0;
    }
    int ans=0;
    for(int i=3;i<=n+2;i++){
        for(int j=3;j<=n+2;j++){
            ans+=a[i][j];
        }
    }
    printf("%d",ans);
    return 0;
}


