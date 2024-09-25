#include <stdio.h>
int main(){
	int n;
	scanf("%d",&n);
	int x[n],i,j;/** n为数组元素数量 根据需要修改 **/
	for(int r=0;r<n;r++){
		scanf("%d",&x[r]);
	}
	for(i=0;i<n;i++){
		for(j=i+1;j<n;j++){
			if(x[i]>x[j]&&i<j){
				int t1=x[j],t2=x[i];
				x[i]=t1;
				x[j]=t2;
			};
		};
	};
	//输出排序后的数组 printf("%d %d %d",x[0],x[1],x[2]);
	printf("%d\n",x[0]);
    return 0;
};