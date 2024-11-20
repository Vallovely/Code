#include <stdio.h>
#include <stdlib.h>

int binSearch(int arr[], int lth ,int tgt);
int main(){
    int arr[] = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19};
    int tgt = 15;
    int index = binSearch(arr,sizeof(arr)/sizeof(arr[0]),tgt);
    printf("The index of %d in the array is %d\n", tgt, index);
    return 0;
}
int binSearch(int arr[],int lth, int tgt){
    int low = 0, high = lth - 1, mid;
    for(; low <= high;){
        mid = low + (high - low) / 2;
        if(arr[mid] == tgt){
            return mid;
        }
        if(arr[mid] < tgt){
            low = mid + 1;
        }
        if(arr[mid] > tgt){
            high = mid - 1;
        }
    }
    return -1;
}
/*
binSearch:二分查找
int arr[]:待查找的有序数组
int lth:数组长度(注：数组在作为形参时会退化为指针，所以不可在内部使用sizeof(arr)来获取数组长度)
int tgt:目标值
return:目标值在数组中的下标，若不存在则返回-1
*/