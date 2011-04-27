nemonicos = ['ALTO','LIM','ACUM','MUL','RES','DIV','IMPR','LEER','ALM','RR0','RR1','RSUM','RMUL','RRES','RDIV',
        'AR0','AR1','INC','DEC','INCR0','DECR0','INCR1','DECR1','SALTA','SSC','SSN','SSN','SRMA','SRME''SRIG']
		
memoria = []

def loader(nombre_archivo):
	archivo =open(nombre_archivo)
	lineas = archivo.readlines()
	for linea in lineas:
		codigo = linea.strip()
		if codigo in nemonicos:
			memoria.append(nemonicos.index(codigo))
		else:
			memoria.append(int(codigo))
			
loader('tabla_cinco.a')
