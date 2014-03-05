#include <stdio.h>
#include <stdlib.h>
 
int siracusa(long unsigned int n) {
    int incr = 0;
    if (n == 1)
        return 3;
    while (n != 1) {
        if (n % 2 == 0)
            n = n / 2;
        else
            n = n * 3 + 1;
        incr++;
    }
    return incr;
}
 
int main(int argc, char* argv[]) {
    long unsigned int n = atol(argv[1]);
    int max = siracusa(1), pos = 0;
    for(long unsigned int i = 1; i <= n; i++) {
        if (siracusa(i) > max) {
            max = siracusa(i);
            pos = i;
        }
    }
    printf("%d\n", pos);
    return 0;
}