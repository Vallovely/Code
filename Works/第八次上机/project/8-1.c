#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_LENGTH 50

typedef struct Node {
    char *data;
    struct Node *next;
} Node;

// 创建新节点
Node* createNode(const char *str) {
    Node *newNode = (Node*)malloc(sizeof(Node));
    if (newNode == NULL) {
        printf("Memory allocation failed.\n");
        exit(1);
    }
    newNode->data = strdup(str); // 使用 strdup 复制字符串并分配内存
    newNode->next = NULL;
    return newNode;
}

// 向链表中添加节点
void addNode(Node **head, const char *str) {
    Node *newNode = createNode(str);
    if (*head == NULL) {
        *head = newNode;
    } else {
        Node *current = *head;
        while (current->next != NULL) {
            current = current->next;
        }
        current->next = newNode;
    }
}

// 查找最长的字符串
const char* findLongestString(Node *head) {
    if (head == NULL) return NULL;

    Node *current = head;
    const char *longest = current->data;
    size_t maxLength = strlen(current->data);

    while (current != NULL) {
        if (strlen(current->data) > maxLength) {
            longest = current->data;
            maxLength = strlen(current->data);
        }
        current = current->next;
    }

    return longest;
}

// 将链表中的数据写入文件
void writeToFile(Node *head, const char *filename) {
    FILE *file = fopen(filename, "w");
    if (file == NULL) {
        printf("Failed to open file %s for writing.\n", filename);
        return;
    }

    Node *current = head;
    while (current != NULL) {
        fprintf(file, "%s\n", current->data);
        current = current->next;
    }

    fclose(file);
    printf("Data written to %s successfully.\n", filename);
}

// 释放链表内存
void freeList(Node *head) {
    Node *current = head;
    while (current != NULL) {
        Node *temp = current;
        current = current->next;
        free(temp->data); // 释放字符串内存
        free(temp);       // 释放节点内存
    }
}

int main() {
    Node *head = NULL;
    char input[MAX_LENGTH + 1]; // 额外空间用于终止符 '\0'

    printf("请输入字符串（以 '******' 结束）:\n");

    while (1) {
        if (scanf("%50s", input) != 1) { // 确保不会超过最大长度
            printf("无效输入，请重新输入。\n");
            while (getchar() != '\n'); // 清除输入缓冲区
            continue;
        }

        if (strcmp(input, "******") == 0) {
            break;
        }

        addNode(&head, input);
    }

    const char *longest = findLongestString(head);
    if (longest != NULL) {
        printf("最长的字符串是: %s\n", longest);
    } else {
        printf("没有输入任何有效字符串。\n");
    }

    writeToFile(head, "Input.txt");

    // 释放链表内存
    freeList(head);

    return 0;
}