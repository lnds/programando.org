/*********************************************************************
 hamming.c - versión corregida pero ocupa mucha memoria
 
 Compilación performante:
 $ clang -O3 hamming.c -o hamming
 
 Compilación para depuración:
 $ clang -DDEBUG hamming.c -o hamming
 
 Ejecución:
 $ time ./hamming 7 13 19 1200
 8885630201238423997
 
 real	0m0.004s
 user	0m0.001s
 sys  0m0.002s
 
 DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
 Version 2, December 2004 
 
 Copyright (C) 2012 Aldrin Martoq
 
 Everyone is permitted to copy and distribute verbatim or modified 
 copies of this license document, and changing it is allowed as long 
 as the name is changed. 
 
 DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
 TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 
 
 0. You just DO WHAT THE FUCK YOU WANT TO.
 **********************************************************************/



#include <stdio.h>
#include <stdlib.h>

#if DEBUG
#define printf_debug(format, ...) printf(format, __VA_ARGS__)
#else
#define printf_debug(format, ...)
#endif

typedef unsigned long long NUM;


NUM min(NUM a, NUM b, NUM c) {
    NUM x = a < b ? a : b;
    return x < c ? x : c;
}

NUM h(NUM p1, NUM p2, NUM p3, NUM n) {
    NUM c1 = p1, c2 = p2, c3 = p3;
    NUM i1 = 1, i2 = 1, i3 = 1;
    NUM *arr = calloc(sizeof(NUM), n);

    printf_debug("%5s %12s | %12s %5s %12s %5s %12s %5s\n", "n", "h", "p1", "i1", "p2", "i2", "p3", "i3");
    
    NUM z = 0;
    for (NUM i = 1; i <= n; i++) {
        arr[i] = z = min(c1, c2, c3);
        printf_debug("%5llu %12lli | %12llu %5llu %12llu %5llu %12llu %5llu\n", i, z, c1, i1, c2, i2, c3, i3);
        while (c1 <= z) c1 = p1*arr[i1++];
        while (c2 <= z) c2 = p2*arr[i2++];
        while (c3 <= z) c3 = p3*arr[i3++];
    }
    
    free(arr);
    return z;
}

int main(int argc, const char * argv[]) {
    NUM p1 = atol(argv[1]);
    NUM p2 = atol(argv[2]);
    NUM p3 = atol(argv[3]);
    NUM n  = atol(argv[4]);
    
    printf("%llu\n", h(p1, p2, p3, n));
    return 0;
}