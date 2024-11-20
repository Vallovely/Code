#include <stdio.h>
#include <stdlib.h>
#include <time.h>
void exchangeSort(int [], int);
void bubbleSort(int [], int);
void selectionSort(int [], int);
void insertionSort(int [], int);
void quickSort(int [], int, int, int);
int main(){
    int lth=0;//数组长度并初始化
    scanf("%d", &lth);
    srand(time(NULL));
    int arr[lth];
    for(int i=0;i<lth;i++){
        arr[i]=rand()%100+1;
    }
    printf("Data size: %d\n", lth);
    int arru[lth];

    for(int i=0;i<lth;i++){
        arru[i]=arr[i];
    }
    int beginTime=clock();
    selectionSort(arr,lth);
    int endTime=clock();
    int ms=(endTime-beginTime)*1000/CLOCKS_PER_SEC;
    printf("selectionSort uses %d.%d seconds!\n", ms/1000, ms%1000 );
    
    for(int i=0;i<lth;i++){
        arru[i]=arr[i];
    }
    beginTime=clock();
    bubbleSort(arr,lth);
    endTime=clock();
    ms=(endTime-beginTime)*1000/CLOCKS_PER_SEC;
    printf("bubbleSort uses %d.%d seconds!\n", ms/1000, ms%1000 );

    for(int i=0;i<lth;i++){
        arru[i]=arr[i];
    }
    beginTime=clock();
    insertionSort(arr,lth);
    endTime=clock();
    ms=(endTime-beginTime)*1000/CLOCKS_PER_SEC;
    printf("insertionSort uses %d.%d seconds!\n", ms/1000, ms%1000 );

    for(int i=0;i<lth;i++){
        arru[i]=arr[i];
    }
    beginTime=clock();
    quickSort(arr,lth,0,lth-1);
    endTime=clock();
    ms=(endTime-beginTime)*1000/CLOCKS_PER_SEC;
    printf("quickSort uses %d.%d seconds!\n", ms/1000, ms%1000 );

    for(int i=0;i<lth;i++){
        arru[i]=arr[i];
    }
    beginTime=clock();
    exchangeSort(arr,lth);
    endTime=clock();
    ms=(endTime-beginTime)*1000/CLOCKS_PER_SEC;
    printf("exchangeSort uses %d.%d seconds!\n", ms/1000, ms%1000 );

    return 0;

}

void exchangeSort(int arr[], int lth){
    int temp=0;
    for(int i=0;i<=lth-2;i++){
        for(int j=i+1;j<=lth-1;j++){
            if(arr[i]>arr[j]){
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return;
}

void selectionSort(int arr[], int lth){
    int temp=0;
    for(int i=0;i<=lth-2;i++){
        int min_index=i;
        for(int j=i+1;j<=lth-1;j++){
            if(arr[j]<arr[min_index]){
                min_index=j;
            }
        }
        temp=arr[i];
        arr[i]=arr[min_index];
        arr[min_index]=temp;
    }
    return;
}

void insertionSort(int arr[], int lth){
    int temp=0;
    for(int i=1;i<=lth-1;i++){
        for(int j=i-1;j>=0;j--){
            if(arr[j+1]<arr[j]){
                temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return;
}
    
void bubbleSort(int arr[], int lth){
    int temp=0;
    for(int i=0;i<=lth-2;i++){
        for(int j=0;j<=lth-i-2;j++){
            if(arr[j]>arr[j+1]){
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return;
}

void quickSort(int arr[], int lth, int low, int high){
    if(low<high){
        int High=high;//将high的值储存在High变量中
        int Low=low;//将low的值储存在Low变量中
        int pivot=arr[low];//这样写，pivot可以为arr的任意元素 不一定是low
        int temp=0;
        for(;low<high;){
             if(arr[high]>=pivot){
                high--;
            }//如果arr[high]大于等于pivot，则继续往左找
            if(arr[low]<=pivot){
                low++;
            }//如果arr[low]小于等于pivot，则继续往右找
            if(arr[high]<pivot&&arr[low]>pivot){
                temp=arr[low];
                arr[low]=arr[high];
                arr[high]=temp;
            }//如果arr[high]小于pivot且arr[low]大于pivot，则交换arr[low]和arr[high]
        }
        arr[low]=pivot;
        quickSort(arr,lth,Low,low-1);
        quickSort(arr,lth,low+1,High);
    }
    return;
}