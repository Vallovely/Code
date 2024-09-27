#include <stdio.h>	
int main(void)	
{	short x=86, y=82;	
    printf("%5hd%5hd%5hd\n", !x, x||y, x&&y);	
    printf("%5hu%5hd%5hd\n", ~x, x|y, x&y);	
    printf("%5hd%5hd%5hd\n \n", ~x, x|y, x&y);
    return 0;	
}	

