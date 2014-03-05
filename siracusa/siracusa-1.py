import sys
n = int(sys.argv[1])
def orbit (n):
	l = 0
	n = (n/2,n*3+1)[n%2]
	while n > 1:
		n = (n/2,n*3+1)[n%2]
		l = l + 1
	return l+1
i = 0
lmax = 0
while (n>=1):
	l = orbit(n)
	if (l > lmax):
		i, lmax = n, l
	n = n -1
print i
