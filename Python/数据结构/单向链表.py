class ListNode:
    def __init__(self,val,next=None):
        self.val=val
        self.next=next
#当ListNode具有参数val和next的时候，将其作为构造方法的参数传入可以省去赋值语句
def addNode(pos,val):
    newNode=ListNode(val,pos.next)
    pos.next=newNode
head=None
for i in [4,7,5,10,12,18]:
    head=ListNode(i,head)
    print(head.val)
addNode(head,5)
print(head.val)