#include <stdio.h>
int greatestCommonDivisor(int x1,int x2){
    int temp=1;
    for(int i=2;i<=x1;i++){
        if(x1%i==0&&x2%i==0){
            temp=i;
        }
    }
    return temp;
};
int main(){
    long long int x[3];
    scanf("%lld %lld %lld",&x[0],&x[1],&x[2]);
	for(int i=0;i<3;i++){
		for(int j=i+1;j<3;j++){
			if(x[i]>x[j]&&i<j){
				int t1=x[j],t2=x[i];
				x[i]=t1;
				x[j]=t2;
			};
		};
	};
    //printf("%lld %lld %lld",x[0],x[1],x[2]);
    //排序获得最短边x[0]和最长边x[2]
    int r=greatestCommonDivisor(x[0],x[2]);
    printf("%d/%d\n",x[0]/r,x[2]/r);
};