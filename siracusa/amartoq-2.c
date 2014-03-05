// siracusa-performante.c -- versión en C de siracusa-performante.rb
// por @aldrinmartoq
// 
// Ejemplo compilación clang y ejecución:
// $ clang -O4 siracusa-performante.c -o siracusa
// $ time ./siracusa 10000000
// 8400511
// 
// real 0m1.729s
// user 0m1.719s
// sys  0m0.007s

#include <stdlib.h>
#include <stdio.h>
#include <strings.h>

typedef unsigned long long NUMERO;
#define MAX 1000000
NUMERO saltos[MAX];

NUMERO siracusa(NUMERO i) {
    if (i < MAX && saltos[i] != 0) return saltos[i];
    NUMERO b = siracusa(i % 2 == 0 ? i/2 : i*3+1) + 1;
    if (i < MAX) saltos[i] = b;
    return b;
}

int main(int argc, char **argv) {
    NUMERO i, max = 0, index;
    bzero(saltos, MAX);
    saltos[1] = 3;
    saltos[2] = 1;
    saltos[3] = 7;
    saltos[4] = 2;
    for (i = 1; i < atol(argv[1]); i++) {
        NUMERO resultado = siracusa(i);
        if (resultado > max) {
            max = resultado;
            index = i;
        }
    }
    printf("%llu\n", index);
}