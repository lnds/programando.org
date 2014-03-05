def nor(a, b):
	return ~(a | b) & 0xFFFF

mem = [0] * (64*1024)

IP  = 0xFFFF
SR  = 0xFFFE
OUT = 0xFFFD

mem[IP] = 0

mem[0] = 1000
mem[1] = 1000
mem[2] = 1001
mem[3] = 1001
mem[4] = 1001
mem[5] = 1002
mem[6] = 1002
mem[7] = 1002
mem[8] = OUT
mem[9] = 1003
mem[10] = 1003
mem[11] = IP
 
print "Start"
while True: 
	i = mem[IP]
	print "i",i
	a = mem[i+0]
	b = mem[i+1]
	r = mem[i+2]
	mem[IP] = i + 3
	f = nor(mem[a], mem[b])
	mem[r] = f
	print "IP:", mem[IP]
	mem[SR] = ((f >> 15) & 1) | ((f & 0x7FFF) << 1)
	if mem[IP] >= 0xFFFD:
		break
print "End"
print "IP: ", mem[IP]
print "SR: ", mem[SR]
print "OUT: ", mem[OUT]