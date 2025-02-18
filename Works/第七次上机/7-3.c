#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int beginHour;
    int endHour;
} Event;

// 比较函数，用于qsort排序
int compareEvents(const void *a, const void *b) {
    Event eventA = *(Event *)a;
    Event eventB = *(Event *)b;
    
    if (eventA.beginHour != eventB.beginHour)
        return eventA.beginHour - eventB.beginHour;
    else
        return eventA.endHour - eventB.endHour;
}

void printEvents(Event *events, int len) {
    // 对事件进行排序
    qsort(events, len, sizeof(Event), compareEvents);
    
    // 打印排序后的事件
    for (int i = 0; i < len; ++i) {
        printf("[%d, %d]\n", events[i].beginHour, events[i].endHour);
    }
}

int checkConflicts(Event *events, int len) {
    // 如果没有活动或只有一个活动，则不会有冲突
    if (len <= 1) {
        return 1; // 表示可以有序安排
    }

    // 假设活动已经按开始时间排序
    for (int i = 1; i < len; ++i) {
        // 如果当前活动的开始时间小于等于前一个活动的结束时间，则有冲突
        if (events[i].beginHour < events[i-1].endHour) {
            return 0; // 表示不可以有序安排
        }
    }
    return 1; // 表示可以有序安排
}

void printCanSchedule(int canSchedule) {
    if (canSchedule) {
        printf("是\n");
    } else {
        printf("否\n");
    }
}

int main() {
    // 输入样例1
    Event events1[] = {{1, 4}, {2, 3}, {3, 4}, {1, 3}, {10, 20}, {6, 9}, {1, 7}, {4, 10}, {4, 20}, {5, 9}, {12, 23}, {17, 20}};
    int length1 = sizeof(events1) / sizeof(events1[0]);

    // 输入样例2
    Event events2[] = {{1, 4}, {20, 22}, {7, 9}, {4, 6}, {6, 7}, {14, 16}, {13, 14}, {10, 12}, {17, 19}, {22, 24}};
    int length2 = sizeof(events2) / sizeof(events2[0]);

    // 打印并检查输入样例1
    printf("Sample 1:\n");
    printEvents(events1, length1);
    printCanSchedule(checkConflicts(events1, length1));

    // 打印并检查输入样例2
    printf("\nSample 2:\n");
    printEvents(events2, length2);
    printCanSchedule(checkConflicts(events2, length2));

    return 0;
}