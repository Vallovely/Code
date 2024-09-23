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
	printf("%d %d %d",x[0],x[1],x[2]);
    return 0;
};