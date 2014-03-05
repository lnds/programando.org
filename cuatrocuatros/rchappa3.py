import operator
 
from math import sqrt

nums  = { 1: { 2: "r(4)", 4: "4", 24: "4!", 4.0/9.0: ".4'", .4: ".4", sqrt(4.0/9.0):"r(.4')" },
          2: { 44: "44" }, 3: {}, 4: {} }

def paren(x,level):
    return "(" + x + ")" if level > 1 else x

def populate_level(funcs,level):

   nl = nums[level]
   for i in range(1,level):
       ni  = nums[i]
       nli = nums[level-i]
       newelements = [ (funcs[op](x,y), paren(ni[x],i) + op + paren(nli[y],level-i)) for op in funcs for x in ni for y in nli ]
       for k,v in newelements:
           if k not in nl or len(v) < len(nl[k]):
              nl[k] = v

def evalme(expr):
   expr = expr.replace("4!","24").replace(".4'","(4.0/9.0)").replace("r(","sqrt(").replace("^","**")
   expr = expr.replace("4.0","X").replace("44","Y").replace(".4","Z")
   expr = expr.replace("4","4.0").replace("Z",".4").replace("Y","44").replace("X","4.0")
   return eval(expr)

def populate(funcs):
    for l in range(2,5):
        populate_level(funcs, l)

    missing = []
    n4 = nums[4]
    for n in range(0,101):
        if n in n4:
           print n, "=", n4[n].replace("(44)","44")
           print "TST", n, n == int(evalme(n4[n])+0.000001)
           if n != int(evalme(n4[n])+0.000001):
              print n, int(evalme(n4[n])+0.000001)
              print n, evalme(n4[n])
        else:
           missing.append(n)

    if len(missing) > 0:
       print "Aun falta generar:", missing
        
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
