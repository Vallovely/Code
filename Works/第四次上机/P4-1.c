#include <stdio.h>
void title(int m, int y){
    printf("------------------------------\n");
    switch (m)
    {
    case 1:
        printf("      January   %d\n", y);
        break;
    case 2:
        printf("     February   %d\n", y);
        break;
    case 3:
        printf("       March   %d\n", y);
        break;
    case 4:
        printf("       April   %d\n", y);
        break;
    case 5:
        printf("         May   %d\n", y);
        break;
    case 6:
        printf("       June   %d\n", y);
        break;
    case 7:
        printf("       July   %d\n", y);
        break;
    case 8:
        printf("      August   %d\n", y);
        break;
    case 9:
        printf("      September   %d\n", y);
        break;
    case 10:
        printf("     October   %d\n", y);
        break;
    case 11:
        printf("     November   %d\n", y);
        break;
    case 12:
        printf("     December   %d\n", y);
        break;
    default:
        printf("Invalid month\n");
        break;
    }
    printf("------------------------------\n");
    printf(" Sun Mon Tue Wed Thu Fri Sat\n");
}
int Celler(int m,int y){
    if(m==1||m==2){
        m+=12;
        y--;
    }
    int c=y/100;
    int d=c/4;
    int e=2-c+d+(31*(m+12))/12;
    int f=((y%100)+((y%100)/4)+(31*(m+12))/12)%7;
    return f;
}
int day_count(int m,int y){
    int day_count=0;
    switch (m)
    {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        day_count=31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        day_count=30;
        break;
    case 2:
        if((y%4==0&&y%100!=0)||(y%400==0)){
            day_count=29;
        }else{
            day_count=28;
        }
        break;
    default:
        break;
    }
    return day_count;
}
int main(){
    int m, y;
    scanf("%d %d", &m, &y);
    title(m, y);
    int day[36];
    for(int i=1;i<=35;i++){
        if(i<Celler(m,y)+1){
            day[i]=0;
        }else{
            day[i]=i-Celler(m,y);
        }
    }
    for(int i=1;i<=day_count(m,y)+Celler(m,y);i++){
        if(day[i]!=0){
            printf("%4d", day[i]);
        }else{
            printf("    ");
        }
        if(i%7==0||i==day_count(m,y)+Celler(m,y)){
            printf("\n");
        }
    }
    printf("------------------------------\n");
}