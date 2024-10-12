#include <stdio.h>
int main(){
    struct item{
        int item_number;
        double item_price;
        int m,d,y;
    }item1;
    scanf("%d %lf %d/%d/%d",&item1.item_number,&item1.item_price,&item1.m,&item1.d,&item1.y);
    printf("Your Information:\n");
    printf("Item    Unit       Purchase date\n");
    printf("%-8d$%-6.2lf    %02d%02d%d\n",item1.item_number,item1.item_price,item1.m,item1.d,item1.y);
}