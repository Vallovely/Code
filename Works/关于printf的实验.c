#include <stdio.h>
int main(){
    char c='A';
    printf("%c\n",c);//character字符
    printf("%d\n",c);//decimal整形
    printf("%x\n",c);//hexadecimal十六进制
    printf("%o\n",c);//octal八进制
    printf("%u\n",c);//unsigned int
 
    double d=3.1415926;
    printf("%f\n",d);//float浮点数
    printf("%e\n",d);//exponential浮点数
    printf("%10f\n",d); //float浮点数，10位宽度
    printf("%10.f\n",d);//float浮点数，10位宽度，小数点后面不显示
    //其中.后的数字只在printf中有效，在scanf中无效  
    printf("%%\n");    //输出%
    int b,m;
    scanf("%d %d", &b, &m); //读取两个整数
    printf("%d %d",b,m);
}
//scanf("%c", &ch); //读取一个字符
//ch = getchar(); //读取一个字符
//printf("%c", ch); //输出字符
//putchar(ch); //输出字符
//%md//m为位宽 

//算数运算符
//一元 取反-0.