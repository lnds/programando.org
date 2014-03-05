from math import trunc,sqrt
from decimal import Decimal, getcontext
from time import time

getcontext().prec = 8

def suma(a,b):
    return a+b

def resta(a,b):
    return a-b

def mult(a,b):
    return a*b

def div(a,b):
    return a/b

def pot(a,b):
    return a**b



prts ={Decimal(0.4):'.4', Decimal(2.0):'r(4)', Decimal(4.0):'4', Decimal(24.0):'4!', Decimal(44.0):'44',Decimal(0.04):'%4',Decimal(4.0/9.0):'p4',Decimal(sqrt(4.0/9.0)):'sp4',  suma:'+', resta:'-',mult:'*',div:'/'}
nums ={Decimal(4.0):1, Decimal(0.4):1, Decimal(24.0):1, Decimal(2.0):1, Decimal(44.0):2, Decimal(0.04):1, Decimal(4.0/9.0):1,  Decimal(sqrt(4.0/9.0)):1}
ops = [suma, resta, mult, div]
res ={}

def peso(*tupla):
    return sum(map((lambda t: nums[t]),tupla))

def formatear(tupla, izqADer):
    if izqADer and len(tupla) == 7:
        f = '((%s %s %s) %s %s) %s %s'
    if izqADer and len(tupla) == 5:
        f= '(%s %s %s) %s %s'
    if not izqADer :
        f= '(%s %s %s) %s (%s %s %s)'
    return f%tuple(map((lambda t:prts[t]),tupla)) 


def almacenar(res, r, tupla, izqADer):
    if 1<=r<=100 and r==trunc(r) and not(res.has_key(r)):
            res[r]=formatear(tupla, izqADer)
            
            
def calcular(res, *tupla):
    r = p = tupla[1](tupla[0],tupla[2])
    for i in range(3,len(tupla),2):
        r = tupla[i](r,tupla[i+1])
        almacenar(res, r, tupla, True)
    if (len(tupla)==7):
        try:
            r = tupla[3](p,tupla[5](tupla[4],tupla[6]))
            almacenar(res, r, tupla,False)
        except:
            pass

    
inicio = time()
for n1 in nums:
    for op1 in ops: 
        for n2 in nums:
            if peso(n1,n2) == 4:
                calcular(res, n1,op1, n2)
                continue
            for op2 in ops:
                for n3 in nums:
                    if peso(n1,n2,n3) == 4:
                        calcular(res, n1, op1, n2,op2,n3)
                        continue
                    for op3 in ops: 
                        for n4 in nums:
                            if peso(n1,n2,n3,n4) == 4:
                                calcular(res, n1, op1, n2,op2,n3,op3,n4)
                                continue                       

for (key,value) in res.items():
    print '%d=%s'%(int(key),value)
fin = time()
print('Tiempo total %g' % (fin - inicio))
