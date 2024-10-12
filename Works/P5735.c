#include <stdio.h>
#include <math.h>
double dis(double x1,double y1,double x2,double y2){
    return sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
}
int main(){
    double x1,y1,x2,y2,x3,y3;
    scanf("%lf %lf",&x1,&y1);
    scanf("%lf %lf",&x2,&y2);
    scanf("%lf %lf",&x3,&y3);
    double Dis=dis(x1,y1,x2,y2)+dis(x2,y2,x3,y3)+dis(x3,y3,x1,y1);
    printf("%.2lf",Dis);
    return 0;
}