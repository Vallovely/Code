typedef struct node{
    char data[52];
    struct node *next;
}Node;
void addNode(Node **p,int i,char *str);
void deleteNode(Node **p,char *str);
int searchNode(Node *p,char *str);
void updataNode(Node **p,int i,char *str);
void exchangeNode(Node **p);
void printList(Node *p);
