# -*- coding: utf-8 *-*
import sys
import math


def tokenize(s):
    "Convierte una cadena en una lista de tokens"
    return s \
        .replace('(', ' ( ').replace(')', ' ) ').replace(',', ' , ').split()


def parse(tokens, symbols):
    "Separa una secuencia de tokens en una lista de operadores y operandos"
    operadores = []
    operandos = []
    for token in tokens:
        if token in symbols:
            operadores.append(token)
        else:
            operandos.append(token)
    return operadores, clean_operandos([op for op in operandos])


def clean_operandos(proto):
    "Separa los operandos contenidos en una lista de tokens"
    op = []
    string = []
    isString = False
    while len(proto) > 0:
        token = proto.pop(0)
        if token.startswith('"') or token.startswith("'"):
            isString = True
        if token.endswith('"') or token.endswith("'"):
            string.append(token)
            op.append(' '.join(string))
            string = []
            isString = False
        elif isString:
            string.append(token)
        elif token not in ['(', ')', ',']:
            op.append(token)
    return op


def halstead(operadores, operandos):
    "Implementa las métricas de Halstead"
    n1 = len(set(operadores))
    N1 = len(operadores)
    n2 = len(set(operandos))
    N2 = len(operandos)
    N = N1 + N2
    n = n1 + n2
    V = N * math.log(n, 2)
    D = (n1 / 2.0) * (float(N2) / n2)
    L = 1.0 / D
    E = V * D
    T = E / 18.0
    return {
        'n1': n1,
        'N1': N1,
        'n2': n2,
        'N2': N2,
         'N': N,
         'n': n,
         'V': V,
         'D': D,
         'L': L,
         'E': E,
         'T': T
    }


def main(args):
    """
        Carga los archivos del programa fuente y la lista de tokens y
        calcula las métricas de Halstead.
    """
    symbols = [token.replace('\n', '') for token 
        in open(args[1], 'rb').readlines()]
    code = open(args[2], 'rb').read()
    operadores, operandos = parse(tokenize(code), symbols)
    print halstead(operadores, operandos)


if __name__ == '__main__':
    main(sys.argv)
