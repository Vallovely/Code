#include <stdio.h>
#include <limits.h>
int main(){
	int n,x,y,s1,s2=INT_MAX;
	scanf("%d\n",&n);
    for(int i=1;i<=3;i++){
		scanf("%d %d\n",&x,&y);
		s1=(n/x+(n%x!=0))*y;//(整除问题的一种处理方法)
		if(s1<=s2){
			s2=s1;
		};
	};
	printf("%d",s2);
};
