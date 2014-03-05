import operator
 
from math import sqrt

nums  = { 1: { 2: "r(4)", 4: "4", 24: "4!", 4.0/9.0: ".4'", .4: ".4", sqrt(4.0/9.0):"r(.4')" } }

def paren(x,level):
    return "(" + x + ")" if level > 1 else x

def populate_level(funcs,level):

   for i in range(1,level):
       ni  = nums[i]
       nli = nums[level-i]
       nums[level] = dict( [ (funcs[op](x,y), paren(ni[x],i) + op + paren(nli[y],level-i)) for op in funcs for x in ni for y in nli ] )
   nums[2][44] = "44"

def populate(funcs):
    for l in range(2,5):
        populate_level(funcs, l)

    n4 = nums[4]
    for n in range(0,101):
        if n in n4:
           print n, "=", n4[n]

faraway = -9999
def midiv(x,y): return float(x)/float(y) if y != 0 else faraway
      
def mipow(x,y): return x**y if x >= 0 and x <= 10 and y >= 0 and y <= 5 else faraway

ops = { "+": operator.add, "-": operator.sub, "*": operator.mul, "/": midiv, "^": mipow }
 
if __name__ == '__main__':
    from time import time
    t1 = time()
    populate(ops)
    t2 = time()
    print "Tiempo: %g" % (t2-t1)
