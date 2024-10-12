#include <stdio.h>
int main(){
    char letter;
    scanf("%c", &letter);
    if(letter >= 'a' && letter <= 'z'){
        printf("The uppercase of input is %c.", letter-32);
    }else{
    if(letter >= 'A' && letter <= 'Z'){
        printf("The lowercase of input is %c.", letter+32);
    }else{
        printf("The input is not a letter!");
    }
    }
    
}