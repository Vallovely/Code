#include <stdio.h>
typedef struct node{
        int data;
        struct node *next;
}Node;

Node *setNode(){
    Node *p=malloc(sizeof(Node));
    if(p==NULL){
        printf("Memory allocation failed!\n");
        exit(1);
    }
    p->next=NULL;
    memset(p->data,0,52);   
    return p;
}

void addNode(Node *head,int data){
    Node *p=setNode();
    p->data=data;
    p->next=head->next;
    head->next=p;
}

void delNode(Node *head){
    if(head->next!=NULL){
        head->next=head->next->next;
    }
}

int main(){

}
    
