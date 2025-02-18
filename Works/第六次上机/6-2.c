#include <stdio.h>




static int dayTab[2][13] = {{0,31,28,31,30,31,30,31,31,30,31,30,31},{0,31,29,31,30,31,30,31,31,30,31,30,31}};

void  MonthDay(int year, int yearDay, int *pMonth, int *pDay)
{  
	int  i, leap;
	leap = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);    
	for (i=1; yearDay>dayTab[leap][i]; i++)
	{
    	yearDay = yearDay - dayTab[leap][i];
	}
	*pMonth = i;      /*将计算出的月份值赋值给pMonth所指向的变量*/
	*pDay = yearDay;   /*将计算出的日期赋值给pDay所指向的变量*/
}
/* 
函数功能：给定某一年的第几天，计算它是这一年的第几月第几日
函数入口参数:整型变量year，存储年信息
            整型变量yearDay，存储这一年的第几天
函数出口参数：整型指针pMonth，指向存储这一年第几月的整型变量
            整型指针pDay，指向存储第几日的整型变量
函数返回值:无 
*/

int main(){
    printf("2012年的12月21日是2012年的第几天？\n");
    int month, day;
    for(int i=1;i<=366;i++){
        MonthDay(2012,i,&month,&day);
        if(month==12&&day==21){
            printf("2012年的12月21日是2012年的第%d天\n",i);
            break;
        }
    }
    return 0;
}