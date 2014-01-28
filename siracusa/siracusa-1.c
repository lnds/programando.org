#include <stdlib.h>
#include <stdio.h>

typedef unsigned long long INT;

INT orbita(INT n) {
	INT largo = 0;
	do {
		n = (n % 2) == 0 ? n / 2 : n*3+1; 
		largo++;
	} while (n>1);
	return largo;
}

int main(int argc, char* argv[]) {
	INT n = (argc == 2) ? atol(argv[1]) : 0;
	INT lmax = 0;
	INT index = 0;
	for (INT i = n; i >= 1; --i) {
		INT l = orbita(i);
		if (l > lmax) { lmax = l; index = i; }
	}
	printf ("%llu, %llu\n", index, lmax);
	return 0;
}

