import sys
import re
import math


tokens, fuente = open(
    sys.argv[1], 'r').read().split(), open(sys.argv[2], "r").read()

strregexp = r"\'([^\"\'\\]*(?:\\.[^\"\'\\]*)*)\'|\"([^\"\'\\]*(?:\\.[^\"\'\\]*)*)\""

n2data = re.findall(strregexp, fuente)

fuente = re.sub('|'.join([re.escape(
    i) for i in ". , ; : ? ! [ ] ( ) { }".split(' ') if i not in tokens]), " ", re.sub(
    strregexp, ' ', fuente))

fuente = [i for i in sum([re.split('[a-zA-Z0-9 ]+', j) for j in fuente.splitlines(
)], []) if i] + [i for i in sum([re.split('\\W+', j) for j in fuente.splitlines()], []) if i]


n1data = [i for i in fuente if i in tokens]
n2data = n2data + [i for i in fuente if i not in tokens]

n1, N1, n2, N2 = len(set(n1data)), len(n1data), len(set(n2data)), len(n2data)

N, n = N1 + N2, n1 + n2
V, D = N * math.log(n, 2), (n1 / 2) * (N2 / n2)
L, E = 1 / D, V * D
T = E / 18

print(
    "n1 = {} => {}\nN1 = {} => {}\nn2 = {} => {}\nN2 = {} => {}\n\nN = {}\nn = {}\nV = {}\nD = {}\nL = {}\nE = {}\nT = {}".format(
      n1, set(n1data), N1, n1data, n2, set(n2data), N2, n2data, N, n, V, D, L,
      E, T))
