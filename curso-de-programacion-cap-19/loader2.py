nemonicos = ['ALTO','LIM','ACUM','MUL','RES','DIV','IMPR','LEER','ALM','REC','RR0','RR1','RSUM','RMUL','RRES','RDIV',
        'AR0','AR1','INC','DEC','INCR0','DECR0','INCR1','DECR1','SALTA','SSC','SSN','SSP','SRMA','SRME''SRIG']
		
def traduce(codigo):
	return nemonicos.index(codigo) if codigo in nemonicos else int(codigo)
		
def loader(nombre_archivo):
	with open(nombre_archivo) as archivo:
		return map(traduce, [linea.strip() for linea in archivo.readlines()]) 
	
	
memoria = loader('tabla_cinco.a')

for m in memoria:
   print(m)