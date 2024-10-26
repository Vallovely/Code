#include <stdio.h>
#include <string.h>
int main(){
    char p[26][200]={0};
    for(int i=0;i<4;i++){
        char str[200];
        fgets(str,200,stdin);
        for(int j=0;j<strlen(str);j++){
            switch ((int)(str[j]-'A'))
            {
                case 0:
                    strcat(p[0],"*");
                    break;
                case 1:
                    strcat(p[1],"*");
                    break;
                case 2: 
                    strcat(p[2],"*");
                    break;
                case 3:
                    strcat(p[3],"*");
                    break;
                case 4:
                    strcat(p[4],"*");
                    break;
                case 5:
                    strcat(p[5],"*");
                    break;
                case 6:
                    strcat(p[6],"*");
                    break;
                case 7:
                    strcat(p[7],"*");
                    break;
                case 8:
                    strcat(p[8],"*");
                    break;
                case 9:
                    strcat(p[9],"*");
                    break;
                case 10:
                    strcat(p[10],"*");
                    break;
                case 11:
                    strcat(p[11],"*");
                    break;
                case 12:
                    strcat(p[12],"*");
                    break;
                case 13:
                    strcat(p[13],"*");
                    break;
                case 14:
                    strcat(p[14],"*");
                    break;
                case 15:
                    strcat(p[15],"*");
                    break;
                case 16:
                    strcat(p[16],"*");
                    break;
                case 17:
                    strcat(p[17],"*");
                    break;
                case 18:
                    strcat(p[18],"*");
                    break;
                case 19:
                    strcat(p[19],"*");
                    break;
                case 20:
                    strcat(p[20],"*");
                    break;
                case 21:
                    strcat(p[21],"*");
                    break;
                case 22:
                    strcat(p[22],"*");
                    break;
                case 23:
                    strcat(p[23],"*");
                    break;
                case 24:
                    strcat(p[24],"*");
                    break;
                case 25:
                    strcat(p[25],"*");
                    break;
                default:
            }
        }
    }
    int len=0;
    for(int i=0;i<26;i++){
        if(strlen(p[i])>len){
            len=strlen(p[i]);
        }
    }
    for(int i=len-1;i>=0;i--){
        for(int j=0;j<26;j++){
            if(i<strlen(p[j])){
                printf("%c",p[j][i]);
                
            }
            else{
                printf(" ");
            }
            if(j!=25){
                printf(" ");
            }
        }
        printf("\n");
    }
    printf("A B C D E F G H I J K L M N O P Q R S T U V W X Y Z\n");
    return 0;
}