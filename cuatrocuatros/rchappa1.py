FARAWAY = -9999     
FERROR  = 0.00001
LIMITE  = 100

import operator

def midiv(x,y): 
    if y == 0: return FARAWAY
    return float(x) / float(y)

def miexp(x,y): 
    if type(x) != int or type(y) != int: return FARAWAY
    if x > 20 or y > 20: return FARAWAY
    return x**y

def mipegador(x,y): 
    if x != 4 or y != 4: return FARAWAY
    return int(str(int(x))+str(int(y)))

from math import sqrt

values      = [ 4, 24, 4.0/9.0, .4, 2, sqrt(4.0/9.0) ] 
values_str1 = [ "4", "4!", ".4'", ".4", "r(4)", "r(.4')"  ]
op          = [ operator.sub, operator.add, operator.mul, midiv, miexp, mipegador ]
opstr       = [ "-", "+", "*", "/", "^", "_" ]

values_str2 = [ "4", "24.0", "(4.0/9.0)", "0.4", "2.0", "sqrt(4.0/9.0)" ]

values_str = values_str1

def mytry( stack, operaciones, sofar, solution ):
   if len(solution) == LIMITE: return

   if len(stack) == 4:
      dif = sofar - int(sofar+0.5)
      if dif < 0: dif = -dif
      if dif < FERROR:
         sofar = int(sofar+0.5)
         if sofar > 0 and sofar <= LIMITE and sofar not in solution:
            solution[sofar] = { "stack":list(stack), "op":list(operaciones) }
      return
   
   prevsofar = sofar
   for i in range(len(values)):
       stack.append(values_str[i])
       for j in range(len(op)):
           if len(operaciones) == 0 and j >= 2: continue
           operaciones.append(opstr[j])
           sofar = op[j](prevsofar,values[i])
           mytry( stack, operaciones, sofar, solution )
           operaciones.pop()
       stack.pop()

def solve():
   solution = {}
   mytry( [], [], 0, solution )
   print "Solucion muestra", len(solution), "numeros y sus expresiones"
   noestan = []
   for i in range(1,LIMITE+1):
       if i not in solution:
          noestan.append(i)
   if len(noestan) > 0: print "Problemas. No estan:", noestan
   return solution

def printsol(n,sol_n):
    print n,"=",

    exp = ""
    prev_op = ""
    for i in range(4):
       curr_op = sol_n['op'][i]
       if i > 0 or curr_op != "+": 
          parentizar = False
          if curr_op == "^": 
             parentizar = True
          if (i>1 and (curr_op in ["*","/"] and prev_op in ["+","-"])): 
             parentizar = True
          if parentizar:
             exp = "(" + exp + ")"
          if curr_op != "_":
             exp += curr_op
       exp += sol_n['stack'][i] 
       prev_op = curr_op

    for i in range(1,10):
        if i == 4: 
           assert( exp.count(str(i)) == 4 )    
        else:
           assert( exp.count(str(i)) == 0 )    
    print exp

def showsolution(solution):
   for s in sorted(solution.keys()):
       printsol( s, solution[s] )

if __name__ == '__main__':
   from time import time
   inicio = time()
   sol = solve()
   showsolution(sol)
   fin = time()
   print('Tiempo total %g' % (fin - inicio))

