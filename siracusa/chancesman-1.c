#include <stdio.h>

long siracusa(long num){
	long secuencia = 0;
	do{
		if(num%2==0){
	    		num /= 2;
		}else {
			num = num * 3 +1;
		}
		secuencia++;
	}while(num > 1);
	return secuencia;
}

int main(int args, char *argv[]){
	long param;
	printf("ingresar el parametro\n");
	scanf("%d",&param);
	long secuenciaMayor=1, mayor=1;
	for(long i=1; i<=param; i++){
		long Siracusa = siracusa(i);
		if(mayor < Siracusa){
			mayor=Siracusa;
			secuenciaMayor=i;
		}
	}

	printf("secuencia mayor: %d \n.",secuenciaMayor);
	return 0;
}