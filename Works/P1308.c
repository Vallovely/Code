#include <stdio.h>
#include <string.h>

int main() {
    char word[11] = {0};
    char str[1000001] = {0};

    // 读取输入
    fgets(word, 11, stdin);
    fgets(str, 1000001, stdin);

    // 去除换行符
    size_t len = strlen(word);
    if (len > 0 && word[len - 1] == '\n') {
        word[len - 1] = '\0';
    }
    len = strlen(str);
    if (len > 0 && str[len - 1] == '\n') {
        str[len - 1] = '\0';
    }

    // 将输入转换为小写
    for (int i = 0; word[i]; i++) {
        if (word[i] >= 'A' && word[i] <= 'Z') {
            word[i] = word[i] - 'A' + 'a';
        }
    }
    for (int i = 0; str[i]; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            str[i] = str[i] - 'A' + 'a';
        }
    }

    int pos = -1;
    int count = 0;

    // 查找子串
    for (int i = 0; i < strlen(str); i++) {
        if (str[i] == word[0]) {
            int j;
            for (j = 1; j < strlen(word); j++) {
                if (str[i + j] != word[j]) {
                    break;
                }
            }
            if (j == strlen(word)) { // 确保整个单词都匹配
                if (pos == -1) {
                    pos = i;
                }
                count++;
            }
        }
    }

    if(pos == -1){
        printf("-1");
    }else{
        printf("%d %d\n", pos, count);
    }
    return 0;
}