#include <stdlib.h>
#include <stdio.h>

typedef unsigned long long INT;

INT orbita(INT n) {
	INT largo = 0;
	do {
		if (n&0x01)
			n = ((n<<1)|1)+n;
		do {
		    n =  n>>1;
		    largo++;
		} while(!(n&0x01));
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
	printf ("%llu\n", index);
	return 0;
}