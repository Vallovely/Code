#include <stdio.h>
#include <string.h>
int main(){
    char str[201];
    fgets(str,201,stdin);
    int t=0;
    for(int i=0;i<strlen(str);i++){
        switch (str[i])
        {
            case 'a':
            case 'd':
            case 'g':
            case 'j':
            case 'm':
            case 'p':
            case 't':
            case 'w':
            case ' ':
                t+=1;
                break;
            case 'b':
            case 'e':
            case 'h':
            case 'k':
            case 'n':
            case 'q':
            case 'u':
            case 'x':
                t+=2;
                break;
            case 'c':
            case 'f':
            case 'i':
            case 'l':
            case 'o':
            case 'r':
            case 'v':
            case 'y':
                t+=3;
                break;
            case 's':
            case 'z':
                t+=4;
                break;
        }
    }
    printf("%d",t);
    return 0;
}