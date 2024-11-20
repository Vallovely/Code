#include <stdio.h>
#include <stdlib.h>
int main() {
    int* p = (int*)malloc(100 * sizeof(int)); 
    int a[99] = {0};
    
    for(int i = 0; i < 100; i++){
        a[i] = i;
        printf("a[%d]=%d\n",i,a[i]);
    }//定义一部分元素 从a[0]到a[99]有定义 此后无定义 659 367 555 675
    p=a;
    for(int i = 0; i < 9999; i++){
        printf("p[%d]=%d\n",i,p[i]);
    }
    //}
    return 0;
}
/*int main(){
    int a[5]= {1,2,3,4,5};
    int* p = malloc(5 * sizeof(int));
    for(int i = 0; i < 5; i++){
        p[i] = a[i];
    }
    printf("尝试访问未分配的堆内存:\n");
    for(int i = 0; i < 50; i++){
        printf("p[%d]=%x \n",i, p+i);
    }
    return 0;
}*/