
def	ALTO(mem, ip, acum, r0, r1):
	return -1, acum, r0, r1
	
def LIM(mem,ip, acum, r0, r1):
	acum = 0
	return ip + 1, acum, r0, r1
	
def ACUM(mem, ip, acum, r0, r1):
	ip = ip + 1
	acum = acum + mem[ip]
	return ip + 1, acum, r0, r1
	
def MUL(mem, ip, acum, r0, r1):
	ip = ip + 1
	acum = acum * mem[ip]
	return ip + 1, acum, r0, r1
	
def RES(mem, ip, acum, r0, r1):
	ip = ip + 1
	acum = acum - mem[ip]
	return ip + 1, acum, r0, r1
	
def DIV(mem, ip, acum, r0, r1):
	ip = ip + 1
	acum = acum / mem[ip]
	return ip + 1, acum, r0, r1
	
def IMPR(mem, ip, acum, r0, r1):
	print (acum)
	return ip + 1, acum, r0, r1
	
def LEER(mem, ip, acum, r0, r1):
	val = input()
	acum = val
	return ip + 1, acum, r0, r1
	
def ALM(mem, ip, acum, r0, r1):
	ip = ip+1
	mem[mem[ip]] = acum
	return ip+1, acum, r0, r1
	
def REC(mem, ip, acum, r0, r1):
	ip = ip+1
	acum = mem[mem[ip]] 
	return ip+1, acum, r0, r1
	
def RR0(mem, ip, acum, r0, r1):
	ip = ip + 1
	r0 = mem[ip]
	return ip + 1, acum, r0, r1
	
def RR1(mem, ip, acum, r0, r1):
	ip = ip + 1
	r1 = mem[ip]
	return ip + 1, acum, r0, r1

def RSUM(mem, ip, acum, r0, r1):
	acum = r0 + r1
	return ip + 1, acum, r0, r1

def RMUL(mem, ip, acum, r0, r1):
	acum = r0 * r1
	return ip + 1, acum, r0, r1
	
def RRES(mem, ip, acum, r0, r1):
	acum = r0 - r1
	return ip + 1, acum, r0, r1
	
def RDIV(mem, ip, acum, r0, r1):
	acum = r0 / r1
	return ip + 1, acum, r0, r1
	
def AR0(mem, ip, acum, r0, r1):
	ip = ip + 1
	r0 = mem[ip]
	return ip + 1, acum, r0, r1
	
def AR1(mem, ip, acum, r0, r1):
	ip = ip + 1
	r1 = mem[ip]
	return ip + 1, acum, r0, r1
	
def INC(mem, ip, acum, r0, r1):
	acum = acum + 1
	return ip + 1, acum, r0, r1

def DEC(mem, ip, acum, r0, r1):
	acum = acum - 1
	return ip + 1, acum, r0, r1
	
def INCR0(mem, ip, acum, r0, r1):
	r0 = r0 + 1
	return ip + 1, acum, r0, r1
	
def DECR0(mem, ip, acum, r0, r1):
	r0 = r0 - 1
	return ip + 1, acum, r0, r1
	
def INCR1(mem, ip, acum, r0, r1):
	r1 = r1 + 1 	
	return ip + 1, acum, r0, r1
	
def DECR1(mem, ip, acum, r0, r1):
	r1 = r1 - 1
	return ip + 1, acum, r0, r1
	
def SALTA(mem, ip, acum, r0, r1):
	ip = ip + 1
	return mem[ip], acum, r0, r1
	
def SSC(mem, ip, acum, r0, r1):
	ip = ip + 1
	if acum == 0:
		ip = mem[ip]
	else:
		ip = ip + 1
	return ip, acum, r0, r1
	
	
def SSN(mem, ip, acum, r0, r1):
	ip = ip + 1
	if acum < 0:
		ip = mem[ip]
	else:
		ip = ip + 1
	return ip, acum, r0, r1

def SSP(mem, ip, acum, r0, r1):
	ip = ip + 1
	if acum > 0:
		ip = mem[ip]
	else:
		ip = ip + 1
	return ip, acum, r0, r1

def SRMA(mem, ip, acum, r0, r1):
	ip = ip + 1
	if r0 > r1:
		ip = mem[ip]
	else:
		ip = ip + 1
	return ip, acum, r0, r1

def SRME(mem, ip, acum, r0, r1):
	ip = ip + 1
	if r0 < r1:
		ip = mem[ip]
	else:
		ip = ip + 1
	return ip, acum, r0, r1
	
def SRIG(mem, ip, acum, r0, r1):
	ip = ip + 1
	if r0 == r1:
		ip = mem[ip]
	else:
		ip = ip + 1
	return ip, acum, r0, r1

nemonicos = ['ALTO','LIM','ACUM','MUL','RES','DIV','IMPR','LEER','ALM','REC','RR0','RR1','RSUM','RMUL','RRES','RDIV',
        'AR0','AR1','INC','DEC','INCR0','DECR0','INCR1','DECR1','SALTA','SSC','SSN','SSP', 'SRMA','SRME''SRIG']
		
		
funciones = [ALTO,LIM,ACUM,MUL,RES,DIV,IMPR,LEER,ALM,REC,RR0,RR1,RSUM,RMUL,RRES,RDIV,AR0,AR1,INC,DEC,INCR0,DECR0,INCR1,DECR1,SALTA,SSC,SSN,SSN,SRMA,SRME,SRIG]

TAM_MEMORIA = 1024 # tamaño en bytes de la memoria

def loader(nombre_archivo):
	memoria = []
	archivo =open(nombre_archivo)
	lineas = archivo.readlines()
	for linea in lineas:
		codigo = linea.strip()
		if codigo in nemonicos:
			memoria.append(nemonicos.index(codigo))
		else:
			memoria.append(int(codigo))
	# la memoria tiene un tamaño de TAM_MEMORIA
	while len(memoria) < TAM_MEMORIA:
		memoria.append(0)
	return memoria

def cpu(archivo):
	memoria = loader(archivo)
	r0 = 0
	r1 = 0
	acum = 0
	ip = 0
	while ip >= 0:
		# print (ip, nemonicos[memoria[ip]], acum, r0, r1)
		ip, acum, r0, r1 = funciones[memoria[ip]](memoria, ip, acum, r0, r1)
	
import sys

cpu(sys.argv[1])
