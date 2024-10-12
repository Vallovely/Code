#include <stdio.h>
int main(){
    int n;
    scanf("%d", &n);
    int a[n];
    int Maxcombo=1;
    int combo=1;
    for(int i=0;i<n;i++){
        scanf("%d", &a[i]);
        if(i!=0){
            //printf("%d\n", a[i]-a[i-1]);
            if(a[i]-1==a[i-1]){
                combo++;
                if(combo>Maxcombo){
                    Maxcombo=combo;
                }
            }else{
                combo=1;
            }
        }
    }
    printf ("%d", Maxcombo);
}