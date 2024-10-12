#include<stdio.h>
#include<math.h>
int main()
{
    float s = 1.0;
    float pi = 0.0;
    float i = 1.0;
    float n = 1.0;
    while(fabs(i)>1e-8)
    {
        pi+=i;
        n=n+2;
        s=-s;
        i=s/n;
    }
    pi*=4;
    printf("pi=%.10f\n",pi);
    return 0;
}