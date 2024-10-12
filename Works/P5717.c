#include <stdio.h>
int main(){
	int x[3],i,j;/** 3为数组元素数量 根据需要修改 **/
    scanf("%d %d %d",&x[0],&x[1],&x[2]);
	for(i=0;i<3;i++){
		for(j=i+1;j<3;j++){
			if(x[i]>x[j]&&i<j){
				int t1=x[j],t2=x[i];
				x[i]=t1;
				x[j]=t2;
			};
		};
	};
    if(x[0]+x[1]>x[2]){
        int r=x[0]*x[0]+x[1]*x[1]-x[2]*x[2];
        if(r==0){
            printf("Right triangle\n");
        };
        if(r>0){
            printf("Acute triangle\n");
        };
        if(r<0){
            printf("Obtuse triangle\n");
        };
        if(x[0]==x[1]||x[1]==x[2]){
            printf("Isosceles triangle\n");
        };
        if(x[0]==x[1]&&x[0]==x[2]){
            printf("Equilateral triangle\n");
        };
    }else{
        printf("Not triangle");
    };
    return 0;
};