#include <stdio.h>
#include <math.h>

int main() {
    int m, n;
    scanf("%d %d", &m, &n);
    int x=0;
    for (int i=m;i<=n;i++) {
        int base=10;
        int left;
        if(i==0){
            printf("0\n");
            x=1;
        }
        for(;(i*i*10)/base>0;) {
            left=(i*i)%base;
            base*=10;
            if(i==left){
                printf("%d\n", i);
                x=1;
            }
        }
        
    }
    if(x==0){
        printf("No Answer\n");
    }
}
