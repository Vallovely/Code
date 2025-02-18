#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "my_linked_list.h"
//gcc -o linked_list main.c my_linked_list.c

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


void printMenu() {
    printf("\n1. 增加数据\n");
    printf("2. 删除数据\n");
    printf("3. 查找数据\n");
    printf("4. 更新数据\n");
    printf("5. 交换节点\n");
    printf("0. 退出\n");
}

int main() {
    Node *p = malloc(sizeof(Node));
    Node **head = &p;
    p->next = NULL;
    memset(p->data, 0, sizeof(p->data));
    while (1) {
        printMenu();
        int choice;
        printf("请输入您的选择: ");
        scanf("%d", &choice);

        if (choice == 0) {
            break;
        }

        switch (choice) {
            case 1:
                int i;
                char data[100];
                printf("请输入您要添加的数据: ");
                scanf("%d %s", &i, data);
                addNode(head, i, data);
                printf("数据添加成功。\n");
                printList(*head);
                writeToFile(*head, "Input.txt");
                break;

            case 2:
                char deleteData[100];
                printf("请输入您要删除的数据: ");
                scanf("%s", deleteData);
                deleteNode(head, deleteData);
                printList(*head);
                writeToFile(*head, "Input.txt");
                break;

            case 3:
                char searchData[100];
                printf("请输入您要查找的数据: ");
                scanf("%s", searchData);
                searchNode(*head, searchData);
                printList(*head);
                writeToFile(*head, "Input.txt");
                break;

            case 4:
                int index;
                char updateData[100];
                printf("请输入要更新的节点位置: ");
                scanf("%d", &index);
                printf("请输入新的数据: ");
                scanf("%s", updateData);
                updataNode(head, index, updateData);
                printList(*head);
                writeToFile(*head, "Input.txt");
                break;

            case 5:
                exchangeNode(head);
                printList(*head);
                writeToFile(*head, "Input.txt");
                break;

            default:
                printf("无效的选择，请重新输入。\n");
                break;
        }
    }

    // 释放内存
    Node **current = head;
    while (current != NULL) {
        Node *temp = *current;
        *current = (*current)->next;
        free(temp);
    }

    return 0;
}