#include <stdio.h>
int main(){
    int x[3],i,j;/** 3为数组元素数量 根据需要修改 **/
    scanf("%d %d %d\n",&x[0],&x[1],&x[2]);
	for(i=0;i<3;i++){
		for(j=i+1;j<3;j++){
			if(x[i]>x[j]&&i<j){
				int t1=x[j],t2=x[i];
				x[i]=t1;
				x[j]=t2;
			};
		};
	};
    char y[3];
    scanf("%c%c%c",&y[0],&y[1],&y[2]);
    for(int r=0;r<=2;r++){
        switch (y[r])
        {
            case 'A':
            printf("%d",x[0]);
            break;
            case 'B':
            printf("%d",x[1]);
            break;
            case 'C':
            printf("%d",x[2]);
            break;
        }
    }
}