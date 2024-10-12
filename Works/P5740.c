#include <stdio.h>
#include <math.h>
int main(){
    int N;
    scanf("%d", &N);
    struct student{
        char name[20];
        int c;
        int m;
        int e;
    }s[N];
    for(int i=0;i<N;i++){
        scanf("%s %d %d %d", s[i].name, &s[i].c, &s[i].m, &s[i].e);
    }
    int delta1, delta2, delta3,delta4;
    for(int i=0;i<N;i++){
        for(int j=i+1;j<N;j++){
            delta1 = abs(s[i].c - s[j].c);
            delta2 = abs(s[i].m - s[j].m);
            delta3 = abs(s[i].e - s[j].e);
            delta4 = abs(s[i].c + s[i].m + s[i].e - s[j].c - s[j].m - s[j].e);
            if(delta1<=5 && delta2<=5 && delta3<=5 && delta4<=10){
                printf("%s %s\n", s[i].name, s[j].name);

            }
        }
    }
}