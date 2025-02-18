#include <stdio.h>
typedef struct Student{
    char *id;
    char *name;
    struct Subject{
        int mathScore;
        int physicsScore;
        int programmingScore;
   }Subject;
}Student;
Student stus[10] = {
    {"20221101", "A", {99, 100, 60}},
    {"20221102", "B", {98, 88, 90}},
    {"20221103", "C", {87, 100, 100}},
    {"20221104", "D", {89, 88, 87}}, 
    {"20221105", "E", {78, 90, 93}},
    {"20221106", "F", {100, 100, 100}},
    {"20221107", "G", {80, 94, 99}},
    {"20221108", "H", {100, 88, 78}}, 
    {"20221109", "I", {78, 77, 76}},
    {"20221110", "J", {90, 90, 97}}
};
void printScore(struct Student *stu,int len,int subject);
void exchangeSort(Student *arr, int lth, int subject);
void exchangestu(struct Student *stu1,struct Student *stu2);

int main(){
    int len=10;
    int subject=1;
    printScore(stus,len,subject);
    subject=2;
    printScore(stus,len,subject);
    subject=3;
    printScore(stus,len,subject);
    return 0;
};
void printScore(Student *stu, int len, int subject) {
    exchangeSort(stu, len, subject);
    printf("Sorted by subject %d:\n", subject);
    for (int i = 0; i < len; ++i) {
        printf("ID: %s, Name: %s, Math: %d, Physics: %d, Programming: %d\n",
               stu[i].id, stu[i].name,
               stu[i].Subject.mathScore,
               stu[i].Subject.physicsScore,
               stu[i].Subject.programmingScore);
    }
}
void exchangeSort(Student *arr, int lth, int subject) {
    for (int i = 0; i <= lth - 2; ++i) {
        for (int j = i + 1; j <= lth - 1; ++j) {
            int score_i, score_j;
            switch (subject) {
                case 1:
                    score_i = arr[i].Subject.mathScore;
                    score_j = arr[j].Subject.mathScore;
                    break;
                case 2:
                    score_i = arr[i].Subject.physicsScore;
                    score_j = arr[j].Subject.physicsScore;
                    break;
                case 3:
                    score_i = arr[i].Subject.programmingScore;
                    score_j = arr[j].Subject.programmingScore;
                    break;
                default:
                    return;
            }
            if (score_i < score_j) {
                exchangestu(&arr[i], &arr[j]);
            }
        }
    }
}
void exchangestu(struct Student *stu1,struct Student *stu2){
    Student temp=*stu1;
    *stu1=*stu2;
    *stu2=temp;
    return;
}