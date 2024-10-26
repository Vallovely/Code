#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int guess(int magic, int chance) {
    int guess = -1;
    scanf("%d", &guess);
    if (guess == magic)//猜对数(0代表该函数输出数为0，与下文第二个if条件相对应）
    {
        printf("用了%d次终于成功了\n", chance);
        return 0;
    }
    else if (guess < magic)//偏小
    {
        printf("小了\n");
        return 1;
    }
    else if (guess > magic)//偏大
    {
        printf("大了\n");
        return 1;
    }
}
int iscontiniue(int chance,int t) {
    if(t+1-chance==0){
        printf("是否继续？(y为继续，其他字符为退出)\n");
        char iscontinue;
        scanf(" %c", &iscontinue);
        if(iscontinue!='y'){
            return 0;
        }else{
            printf("进入新一轮\n", t+1-chance);
            return 1;
        }
    }else{
        return 1;
    }
}
int main()
{
    int magic;
    int max;
    printf("请输入上限:\n");
    scanf("%d", &max);
    int t=0;
    for (int i = 1;i <= max;i *= 2) {
        t++;
    }
    srand(time(NULL));//设置随机数
    magic = rand() % (max+1);//生成一随机数
    int chance = 1;
    printf("请输入你猜的数字(范围为0-%d)：\n你有%d次机会\n",max,t);
    do
    {
        
        if (guess(magic, chance) == 0)
        {
            break;
        }
        chance++;
        if (chance == t+1)
        {
            printf("太菜了，给你这么多次机会\n");
            printf("答案是%d\n", magic);
            if(iscontiniue(chance,t)==0){
                break;
            }else{
                chance=1;
                srand(time(NULL));//设置随机数
                magic = rand() % (max+1);//生成一随机数
            }
        }
    } while (chance <= t+1);
    return 0;
}
