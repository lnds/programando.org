#una forma intuitiva, pero ineficiente de solucionar hamming

def merge(g, h):
	ng = g.next()
	nh = h.next()
	while True:
		if ng < nh:
			yield ng
			ng = g.next()
		elif ng > nh:
			yield nh
			nh = h.next()
		else:
			yield ng
			ng = g.next()
			nh = h.next()

def times(n, seq):
	for i in seq:
		yield n * i

def hamming(p1,p2,p3):
	yield 1
	m2 = times(p1, hamming(p1,p2,p3))
	m3 = times(p2, hamming(p1,p2,p3))
	m5 = times(p3, hamming(p1,p2,p3))
	for h in merge(merge(m2, m3), m5):
		yield h

import sys
p1 = int(sys.argv[1])
p2 = int(sys.argv[2])
p3 = int(sys.argv[3])
n  = int(sys.argv[4])
seq = hamming(p1, p2, p3)
result = next(seq)
for i in range(n):
    result = next(seq)
print result
