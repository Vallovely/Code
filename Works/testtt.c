#include <stdio.h>
#include <string.h>
#include <ctype.h>
void removeSpaces(char *s) {
    int i, j;
    for (i = 0, j = 0; s[i]!= '\0'; i++) {
        if (s[i]!= ' ') {
            s[j] = s[i];
            j++;
        }
    }
    s[j] = '\0';
}
void toLowerCase(char *s) {
    int i;
    for (i = 0; s[i]!= '\0'; i++) {
        s[i] = tolower(s[i]);
    }
}
int isWordBoundary(char *text, int index) {
    if (index == 0) {
        return (text[index + 1]!= '\0' && text[index + 1]!= ' ');
    } else if (text[index - 1] == ' ') {
        return (text[index + 1]!= '\0' && text[index + 1]!= ' ');
    }
    return 0;
}

int main() {
    char word[100];
    char text[1000];
    int count = 0;
    int firstPos = -1;
    scanf("%[^\n]%*c", word);
    scanf("%[^\n]%*c", text);
    removeSpaces(word);
    removeSpaces(text);
    toLowerCase(word);
    toLowerCase(text);
    int textLen = strlen(text);
    int wordLen = strlen(word);
    for (int i = 0; i <= textLen - wordLen; i++) {
        int j;
        for (j = 0; j < wordLen; j++) {
            if (text[i + j]!= word[j]) break;
        }
        if (j == wordLen && isWordBoundary(text, i)) {
            count++;
            if (firstPos == -1) firstPos = i;
        }
    }

    if (count == 0) {
        printf("-1\n");
    } else {
        printf("%d %d\n", count, firstPos);
    }
    return 0;
}