//协方差计算
#include <stdio.h>
#include <math.h>

int main() {
    int n;
    double sum = 0, sum2 = 0, x, y; 
    printf("Enter the number of elements: ");
    scanf("%d", &n);
    printf("Enter the elements: ");
    for (int i = 0; i < n; i++) {
        scanf("%lf", &x);
        sum += x;
        sum2 += x * x;
    }
    double mean = sum / n;
    double variance = (sum2 / n) - (mean * mean);
    double stddev = sqrt(variance);
    printf("Mean = %.2lf\n", mean);
    printf("Variance = %.2lf\n", variance);
    printf("Standard deviation = %.2lf\n", stddev);
    return 0;
}