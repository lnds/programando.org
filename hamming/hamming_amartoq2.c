/*********************************************************************
 hamming-128.c - versión 128bits
 
 Compilación performante:
 $ clang -O3 hamming-128.c -o hamming-128
 
 Compilación para depuración:
 $ clang -DDEBUG hamming-128.c -o hamming-128
 
 Ejecución:
 $ time ./hamming-128 2 3 5 100000
 290237644800000000000000000000000000000
 
 real	0m0.008s
 user	0m0.004s
 sys	0m0.003s
 
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
#include <string.h>
#include <unistd.h>

#if DEBUG
#define printf_debug(format, ...) printf(format, __VA_ARGS__)
#else
#define printf_debug(format, ...)
#endif

typedef __uint128_t NUM;
char si[100], sz[100], sc1[100], sc2[100], sc3[100], si1[100], si2[100], si3[100];

/* horrible código que convierte a decimal, asume char largo 100 */
char *ss(NUM i, char *s) {
  memset(s, 0, 100);
  int j = 98;
  while (i > 0) {
    int x = i % 10;
    s[j--] = '0' + x;
    i /= 10;
  }
  return &s[j+1];
}

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
        printf_debug("%5s %12s | %12s %5s %12s %5s %12s %5s\n", ss(i, si), ss(z, sz), ss(c1, sc1), ss(i1, si1), ss(c2, sc2), ss(i2, si2), ss(c3, sc3), ss(i3, si3));
        if (z < arr[i-1]) {
          printf("ERROR: límite 128bits alcanzado, último cálculo correcto es n: %s h: %s\n", ss(i-1, si), ss(arr[i-1], sz));
          abort();
        }
        if (c1 <= z) c1 = p1*arr[i1++];
        if (c2 <= z) c2 = p2*arr[i2++];
        if (c3 <= z) c3 = p3*arr[i3++];
    }
    
    free(arr);
    return z;
}

int main(int argc, const char * argv[]) {
    NUM p1 = atol(argv[1]);
    NUM p2 = atol(argv[2]);
    NUM p3 = atol(argv[3]);
    NUM n  = atol(argv[4]);
    
    NUM r  = h(p1, p2, p3, n);
    printf("%s\n", ss(r, sz));
    sleep(5);
    return 0;
}