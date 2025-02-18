#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "my_linked_list.h"
void printList(Node *p){
    while(p!= NULL){
        printf("%s", p->data);
        p = p->next;
        if(p!=NULL){
            printf("->");
        }
    }
    printf("\n");
}
void addNode(Node **p,int i,char *str){ 
    printf("addNode(%d,%s)\n",i,str);
    Node *newNode = (Node*)malloc(sizeof(Node)); 
    if(newNode == NULL){
        printf("Memory of newNode allocation failed.\n");
        exit(1);
    }  
    newNode->next = NULL;
    strcpy(newNode->data,str);
    //存入数据
    printf("addNode(%d,%s)\n",i,str);
    if(i==0){
        Node *temp = (*p)->next;
        newNode->next = *p;
        *p = newNode;
        (*p)->next = temp;
        free(temp);
    }else{
        Node *p1 = *p;
        for(int j=0;j<i-1;j++){
             if(p1->next!=NULL){
                p1 = p1->next;
             }
        }
        newNode->next = p1->next;
        p1->next = newNode;
    }
    printf("addNode(%d,%s) success.\n",i,str);
};
int searchNode(Node *p,char *str){
    int i=0;
    while(p!= NULL){
        if(strcmp(p->data,str)==0){
            printf("Find the node at %d\n",i);
            return i;
        }
        p = p->next;
        i++;
    }
    printf("Not find the node.\n");
    return -1;
}
void deleteNode(Node **p,char *str){
    int flag=searchNode(*p,str);
    if(flag!=-1){
        if(flag==0){
            Node *temp = *p;
            *p = (*p)->next;
            free(temp);
        }else{
            Node *p1 = *p;
            for(int j=0;j<flag-1;j++){
                p1 = p1->next;
            }
            Node *temp = p1->next;
            (*p1).next = p1->next->next;
            free(temp);
        }
    }else{
        printf("Not find the data to delete.\n");
    }
};
void updataNode(Node **p,int i,char *str){
    Node *newNode = (Node*)malloc(sizeof(Node)); 
    if(newNode == NULL){
        printf("Memory of newNode allocation failed.\n");
        exit(1);
    }  
    strcpy(newNode->data,str);
    //存入数据
    if(i==0){
        newNode->next = (*p)->next;
        Node *temp = *p;
        *p = newNode;
        free(temp);
    }else{
        Node *p1 = *p;
        for(int j=0;j<i-1;j++){
             if(p1->next!=NULL){
                p1 = p1->next;
             }
        }
        newNode->next = p1->next->next;
        Node *temp = p1->next;
        p1->next = newNode;
        free(temp);
    }
}
void exchangeNode(Node **p){
    if (*p == NULL || (*p)->next == NULL) {
        // 链表为空或只有一个节点，无需交换
        return;
    }

    Node **current = p;
    while ((*current) != NULL && (*current)->next != NULL) {
        // 保存要交换的两个节点
        Node *first = *current;
        Node *second = (*current)->next;

        // 更新前驱节点的 next 指针
        *current = second;

        // 更新 first 和 second 的 next 指针
        first->next = second->next;
        second->next = first;

        // 移动 current 到下一个待交换的节点对之前的位置
        current = &(first->next);
    }
}

