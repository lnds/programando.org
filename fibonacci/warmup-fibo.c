#include <stdlib.h>
#include <stdio.h>

#define MAX_FIB 187
typedef __uint128_t NUM;

NUM fibnum[MAX_FIB];


int main(int argc, char* argv[]) {
	NUM a = atol(argv[1]);
	NUM b = atol(argv[2]);

	int i = 0;
	NUM fa = 0;
	NUM fb = 1;
	int cont = 0;
	while (fb <= b) {
		NUM ft = fa;
		fa = fb;
		fb = ft + fb;
		if (fa >= a)
			cont++;
	}
	printf("%d\n", cont);
	return 0;
}


/* 

64 bits
12200160415121876738 -- Fib(93)
18446744073709551615 -- 2^64-1 
19740274219868223167 -- Fib(94)

128 bits
332825110087067562321196029789634457848 -- Fib(186)
340282366920938463463374607431768211455 -- 2^128-1
538522340430300790495419781092981030533 -- Fib(187)

*/