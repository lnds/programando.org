/*********************************************************************
hamming.c

Compilación performante:
$ clang -O3 hamming.c -o hamming

Compilación para depuración:
$ clang -DDEBUG hamming.c -o hamming

Ejecución:
$ time ./hamming 7 13 19 1000000
3993073

real	0m0.010s
user	0m0.007s
sys	0m0.002s

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

    printf_debug("%5s %10s | %10s %10s %10s\n", "n", "h", "p1", "p2", "p3");

    NUM z = 0;
    for (NUM i = 1; i <= n; i++) {
        z = min(c1, c2, c3);
        printf_debug("%5llu %10lli | %10llu %10llu %10llu\n", i, z, c1, c2, c3);
        if (c1 <= z) c1 += p1;
        if (c2 <= z) c2 += p2;
        if (c3 <= z) c3 += p3;
    }
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