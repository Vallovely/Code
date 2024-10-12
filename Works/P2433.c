#include <stdio.h>
#include <math.h>
int main(){
    int x;
    scanf("%d", &x);
    switch (x)
    {
        case 1:
        printf("I love Luogu!");
        break;

        case 2:
        printf("6 4");
        break;

        case 3:
        printf("3\n12\n2");
        break;

        case 4:
        printf("166.667");
        break;

        case 5:
        int z=(int)((260+220)/(12+20));
        printf("%d",z);
        break;

        case 6:
        printf("10.8167");
        break;

        case 7:
        printf("110\n90\n0");
        break;

        case 8:
        printf("31.4159\n78.5398\n523.599\n");
        break;

        case 9:
        printf("22");
        break;

        case 10:
        printf("9");
        break;

        case 11:
        printf("33.3333");
        break;

        case 12:
        printf("13\nR");
        break;

        case 13:
        double c=3.141593,v1=(4*c*64)/3.0,v2=(4*c*1000)/3.0,d=cbrt(v1+v2);
        printf("%.0f",d);
        break;

        case 14:
        printf("50");
        break;
    }
}
