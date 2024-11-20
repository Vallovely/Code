#include <stdio.h>
/*int main() {
    int (*a)(int,int);
    int f(int a,int b){
        return a+b;
    }
    a=f;
    printf("%d\n",a(2,3));
    return 0;
}*/
/*int main(){
    int a[10]= {1,2,3,4,5,6,7,8,9,10};
    int (*p) = a;
    int i;
    for(i=0;i<10;i++){
        printf("%d ",*(p+i));
    }
    return 0;
}*/
/*int main(){
    int a[10] = {1,2,3,4,5,6,7,8,9,10};
    int (*p)[10];
    int i;
    for(i=0;i<10;i++){
        p[i] = ;
        printf("%d ",*p[i]);
    }
    return 0;
}*/
//int (*(*F)(int,int))(int)
/*void outp(int *,int);
void outp2(int [],int);

int main(){
    int a[10] = {1,2,3,4,5,6,7,8,9,10};
    int *p=a;

    outp(p,10);
    printf("\n");
    
    outp2(a,10);
    printf("\n");

    return 0;
}

void outp(int *p,int n){
    int i;
    for(i=0;i<n;i++){
        printf("%d ",*p++);
    }
};

void outp2(int a[],int n){
    int i;
    for(i=0;i<n;i++){
        printf("%d ",*(a+i));
    }
};

char (*f)(int,int);
char (*g)[];*/


int main() {
    int a = 5;
    int b = 10;

    // b * ++a
    int result = b * ++a;
    printf("result: %d\n", result);  // 输出 60
    printf("a: %d\n", a);            // 输出 6

    return 0;
}