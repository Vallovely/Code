#include <stdio.h>
int main(){
    int n,m;
    scanf("%d %d",&n,&m);
    struct joiner{
        int a[m];
        int h;
        int l;
        double avg;
    }p[n];
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            scanf("%d",&p[i].a[j]);
        }
    }
    double max=-1.0;
    for(int i=0;i<n;i++){
        p[i].h=-1;
        p[i].l=11;
        double sum=0.0;
        for(int j=0;j<m;j++){
            if(p[i].a[j]>p[i].h){
                p[i].h=p[i].a[j];
            }
            if(p[i].a[j]<p[i].l){
                p[i].l=p[i].a[j];
            }
            sum+=p[i].a[j];
        }     
        p[i].avg=(double)(sum-p[i].l-p[i].h)/(double)(m-2);
        if(p[i].avg>max){
            max=p[i].avg;
        }
    }
    printf("%.2f",max);
}