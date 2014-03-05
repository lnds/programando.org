from math import sqrt
import time

class clsNumeros:    
    def __init__(self, op1, op2, op3, op4):
        self.numero = 4
        self.oper = [float() for i in range(5)]
        self.oper[1] = op1
        self.oper[2] = op2
        self.oper[3] = op3
        self.oper[4] = op4
        
    def CountOperaciones():
        return 10

    def NumerosConsiderados(self, idxOper):
        num = self.oper[idxOper]

        if num == 1:
            return 1
        elif num == 2:
            return 1
        elif num == 3:
            return 1
        elif num == 4:
            return 1
        elif num == 5:
            return 1
        elif num == 6:
            return 2
        elif num == 7:
            return 2
        elif num == 8:
            return 2
        elif num == 9:
            return 2
        elif num == 10:
            return 1

    def GetValorOper(self, idxOper):
        num = self.oper[idxOper]
        
        if num == 1:
            return self.numero
        elif num == 2:
            return sqrt(self.numero)
        elif num == 3:
            return Factorial(self.numero)
        elif num == 4:
            return self.numero/10
        elif num == 5:
            return 4 / 9
        elif num == 6:
            return 44
        elif num == 7:
            return sqrt(4 / (4/9))
        elif num == 8:
            return 4.4
        elif num == 9:
            return sqrt(4) / .4
        elif num == 10:
            return sqrt(4/9)

    def GetExprOper(self, idxOper):
        num = self.oper[idxOper]

        if num == 1:
            return str(self.numero)
        elif num == 2:
            return "r(" + str(self.numero) + ")"
        elif num == 3:
            return str(self.numero) + "!"
        elif num == 4:
            return str(".4")
        elif num == 5:
            return str(".4'")
        elif num == 6:
            return str("44")
        elif num == 7:
            return str("r(4/.4...)")
        elif num == 8:
            return str("4.4")
        elif num == 9:
            return "r(4)/.4"
        elif num == 10:
            return str("r(.4...)")

class clsOperaciones:
    def CountOperaciones():
        return 5

    def __init__(self, op1, op2, op3):
        self.oper = [float() for i in range(4)]
        self.oper[1] = op1
        self.oper[2] = op2
        self.oper[3] = op3

class clsResultado:

    def __init__(self, _cNum, _cOper):
        self.cNum = clsNumeros(1, 1, 1, 1)
        self.cOper = clsOperaciones(1, 1, 1)
        self.resultado = 0
        self.expr = ""
        self.cNum = _cNum
        self.cOper = _cOper

    def Calcular(self):
        expresion = ""
        idxNum = 1

        resParcial = self.cNum.GetValorOper(idxNum)
        expresion = self.cNum.GetExprOper(idxNum)

        consider = self.cNum.NumerosConsiderados(idxNum)
        
        for idxNum in range (2, 5):

            consider = consider + self.cNum.NumerosConsiderados(idxNum)
            
            numero1 = resParcial
            numero2 = self.cNum.GetValorOper(idxNum)
            oper = self.cOper.oper[idxNum-1]
            expr2 = self.cNum.GetExprOper(idxNum)
            
            if idxNum != 2:
                expresion = "(" + str(expresion) + ")"
                
            try:
                resultado = 0

                if oper == 1:
                    resParcial = numero1 + numero2
                    expresion = str(expresion) + "+" + expr2
                elif oper == 2:
                    resParcial = numero1 - numero2
                    expresion = str(expresion) + "-" + expr2
                elif oper == 3:
                    resParcial = numero1 * numero2
                    expresion = str(expresion) + "*" + expr2
                elif oper == 4:
                    if numero2 != 0:
                        resParcial = numero1 / numero2
                        expresion = str(expresion) + "/" + expr2
                    else:
                        resParcial = 0
                        expresion = "NULO"
                elif oper == 5:
                    resParcial = Elevar(numero1, numero2)
                    expresion = str(expresion) + "^" + expr2

                if consider == 4:
                    break
                
            except:
                expresion = "NULO"
                resParcial = 0            

        if consider != 4:
            resParcial = -1
            expresion = "NULO"
            
        self.resultado = resParcial
        self.expr = expresion


    def Operar (self, idxNum, expresion, numero1, numero2, oper, expr2):
        if idxNum != 2:
            expresion = "(" + expresion + ")"
        
        try:
            resultado = 0

            if oper == 1:
                resultado = numero1 + numero2
                expresion = expresion + "+" + expr2
            elif oper == 2:
                resultado = numero1 - numero2
                expresion = expresion + "-" + expr2
            elif oper == 3:
                resultado = numero1 * numero2
                expresion = expresion + "*" + expr2
            elif oper == 4:
                if numero2 != 0:
                    resultado = numero1 / numero2
                    expresion = expresion + "/" + expr2
                else:
                    resultado = 0
                    expresion = "NULO"
            elif oper == 5:
                resultado = numero1 ^ numero2
                expresion = expresion + "^" + expr2

            return resultado
            
        except:
            expresion = "NULO"
            return 0                 

def Factorial(numero):
    if numero > 1:
        return Factorial(numero - 1) * numero
    else:
        return 1

def Elevar(numero, potencia):
    resultado = 1    
    for x in range(1, potencia + 1):
        resultado = resultado * numero
    return resultado
    
def GeneraNumeros():
    c = []
    idx = [float() for i in range(5)]
    idx[1] = 1
    idx[2] = 1
    idx[3] = 1
    idx[4] = 1
    looping = 1

    while looping == 1:        
        num = clsNumeros(idx[1], idx[2], idx[3], idx[4])
        c.append(num)        
        idx[4] = idx[4] + 1

        for i in range (4, 1, -1):
            if idx[i] > clsNumeros.CountOperaciones():
                idx[i] = 1
                idx[i-1] = idx[i-1] + 1

        if idx[1] > clsNumeros.CountOperaciones():
            looping = 0
         
    return c            

def GeneraOperaciones():
    c = []
    idx = [int() for i in range(4)]
    idx[1] = 1
    idx[2] = 1
    idx[3] = 1
    looping = 1

    while looping == 1:
        num = clsOperaciones(idx[1], idx[2], idx[3])
        c.append(num)
        idx[3] = idx[3] + 1

        for i in range (3, 1, -1):
            if idx[i] > clsOperaciones.CountOperaciones():
                idx[i] = 1
                idx[i-1] = idx[i-1] + 1        

        if idx[1] > clsOperaciones.CountOperaciones():
            looping = 0

    return c
    
def ExisteRespuesta(c, cRes):
    if (len(c) == 0):
        return 0    
    for n in c:
        if n.resultado == cRes.resultado:            
            return 1
    return 0    

def AgregaRespuesta(c, cRes):
        
    if cRes.resultado < 0 or cRes.resultado > 100:
        return

    if round(cRes.resultado) != cRes.resultado:
        return
    
    if ExisteRespuesta(c, cRes) == 0:
        c.append(cRes)


def PrintElemento(c, resultado):    
    for n in c:
        if round(n.resultado) == resultado:
            print (str(round(n.resultado)) + " = " + n.expr)
    
def MostrarEnOrden(c):
    for n in range(0, 101):
        PrintElemento(c, n)

def Calcular():
    numeros = GeneraNumeros()
    operaciones = GeneraOperaciones()    
    c = []

    done = False

    for n in range (0, len(numeros)):
        for o in range (0, len(operaciones)):
            cRes = clsResultado(numeros[n], operaciones[o])         
            cRes.Calcular()
            AgregaRespuesta (c, cRes)

            if len(c) == 101:
                done = True
                break

        if done == True:
            break

    MostrarEnOrden(c)

start_time = time.time()
Calcular()
end_time = time.time()
print("Tiempo: %g segundos" % (end_time - start_time))
print("Por Alvaro Veloso D.")
input("Press Enter to continue...")
