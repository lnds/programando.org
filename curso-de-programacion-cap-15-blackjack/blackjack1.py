import random  

def baraja_mezclada():  
	palos = ['C', 'D', 'T', 'P']  
	valores = ['A'] + [v for v in range(2,11)] + ['J', 'Q', 'K']  
	baraja = [(valor, palo) for palo in palos for valor in valores]  
	random.shuffle(baraja)
	while len(baraja) > 0:  
		yield baraja.pop(0)
		
def valor_mano(cartas):
	valor = 0
	ases = False
	for carta in cartas:
		valor_carta = carta[0]
		if  valor_carta in ('J','Q','K'):
			valor += 10
		elif valor_carta == 'A':
			ases = True
			valor += 1
		else:
			valor += valor_carta
	
	if ases and (valor + 10) <= 21:
		valor += 10
			
	return valor

	
def solicitar_jugada(jugada):
	if jugada == 'I':
		prompt = "Jugada? ('R':Retirarse, 'D':Doblar, 'O':Otra carta, 'M': Mantener cartas) --> "
		opciones = ['R','D','O','M']
	else:
		prompt = "Jugada? ('R':Retirarse, 'O':Otra carta, 'M': Mantener cartas) --> "
		opciones = ['R','O','M']

	opcion = input(prompt).strip().upper()
	while opcion not in opciones:
		print("opción incorrecta")
		opcion = input(prompt).strip().upper()

	print("Opción elegida: ", opcion, "\n")
	return opcion
	
	
def mostrar_mano(prompt, mano):
	print("\t", prompt, 
	      " ".join ( str(carta[0])+"-"+carta[1] for carta in mano),
		  " ( Valor: ", valor_mano(mano), ")\n")

def mostrar_manos(mano_jugador, mano_couprier):
	mostrar_mano("Cartas Jugador:  ", mano_jugador)
	mostrar_mano("Cartas Couprier: ", mano_couprier)
	
def jugar_couprier(mano, baraja):
	while valor_mano(mano) < 17:
		mano.append(next(baraja))
	return mano
	
def determinar_ganancia(mano_jugador, mano_couprier, apuesta, jugada):
	if jugada == 'R':
		ganancia = -apuesta
	else:
		jugador, couprier = valor_mano(mano_jugador), valor_mano(mano_couprier)
		ganancia = 0	
		if jugador <= 21 < couprier or couprier < jugador <= 21:
			ganancia = apuesta
		elif couprier <= 21 < jugador or jugador < couprier <= 21:
			ganancia = -apuesta
		if jugada == 'D':
			ganancia *= 2
	return ganancia

	
def jugar_mano(apuesta, pozo):
	print ("Nueva mano, apuesta $", apuesta, " pozo $", pozo-apuesta, "\n")
	baraja = baraja_mezclada()
	mano_jugador, mano_couprier  = [next(baraja), next(baraja)], [next(baraja), next(baraja)]
	ganancia = 0
	if valor_mano(mano_jugador) == 21:
		mostrar_manos(mano_jugador, mano_couprier)
		print ("¡Jugador tienen black jack!")
		ganancia = (3*apuesta)//2
	else:
		jugada = 'I'
		while jugada in ['I','O']:
			mostrar_manos(mano_jugador, mano_couprier)
			jugada = solicitar_jugada(jugada)
			if jugada == 'M':
				mano_couprier = jugar_couprier(mano_couprier, baraja)
			elif jugada == 'D':
				mano_jugador.append(next(baraja))
				mano_couprier = jugar_couprier(mano_couprier, baraja)
			elif jugada == 'O':
				mano_jugador.append(next(baraja))
				if valor_mano(mano_jugador) > 21:
					jugada = 'R'
		mostrar_manos(mano_jugador, mano_couprier)
		ganancia = determinar_ganancia(mano_jugador, mano_couprier, apuesta, jugada)
	return ganancia

def mostrar_resultado(resultado, pozo):
	if resultado > 0:
	   print("Jugador gana $", resultado)
	elif resultado < 0:
		print("Jugador pierde $", -resultado)
	else:
		print("Empate")
	print ("Su pozo es: $", pozo, "\n")
			
def solicitar_apuesta(pozo, apuesta_minima):
	valor = -1
	if pozo < apuesta_minima:
		print ("Su pozo no le alcanza para seguir jugando, inténtelo de nuevo en otra oportunidad")		
	else:
		prompt = "\nIngrese su apuesta (min: "+str(apuesta_minima)+", max: "+str(pozo)+", 0 para finalizar juego): "
		while valor != 0 and not (apuesta_minima <= valor <= pozo):
			valor = int(input(prompt))
	print ("")
	return valor

# black jack				
def black_jack(pozo, apuesta_minima):
	# ciclo principal del programa
	print ("Bienvenido al juego de black jack")
	apuesta = solicitar_apuesta(pozo, apuesta_minima)
	while apuesta_minima <= apuesta <= pozo:
		resultado = jugar_mano(apuesta, pozo)
		pozo += resultado
		mostrar_resultado(resultado, pozo)
		apuesta = solicitar_apuesta(pozo, apuesta_minima)
	print ("Gracias por participar, tu pozo final es: ", pozo)
	
# main
black_jack(500, 10)

