---
comments: true
date: 2011-04-07 12:50:22
layout: post
slug: la-logica-del-juego-de-blackjack
title: La lógica del juego de BlackJack
wordpress_id: 233
categories:
- Aprendiendo a programar
tags:
- blackjack
- curso
- juego
---

En el [capítulo anterior](http://www.programando.org/blog/2011/04/interfaz-de-usuario-black-jack/), de nuestro curso de programación, escribimos las rutinas necesarias para interactuar con el usuario. Además escribimos la función **blackjack()** que es la **rutina principal** de nuestro juego.

Ahora nos vamos a concentrar en la lógica del juego. Volvamos a revisar la función **blackjack()**:


    
    
    def blackjack(pozo, apuesta_minima):
         print ("Bienvenido al juego de black jack")
         apuesta = solicitar_apuesta(pozo, apuesta_minima)
         while apuesta_minima <= apuesta <= pozo:
             resultado = jugar_mano(apuesta, pozo)
             pozo  += resultado
             mostrar_resultado(resultado, pozo)
             apuesta = solicitar_apuesta(pozo, apuesta_minima)
         print ("Gracias por participar, su pozo final es: ", pozo)
    



Lo que vamos a escribir a continuación es la función **jugar_mano()**.

Escribamos primero lo que debe hacer en una serie de frases:



	
  1. Barajar las cartas.

	
  2. Repartir cartas al jugador.

	
  3. Repartir cartas al croupier.

	
  4. Si la mano es un blackjack:

	
    * Finalizar la mano y retornar como resultado el doble de la apuesta




	
  5. En caso contrario  solicitar al jugador su próxima jugada, la que puede ser: 'R' para retirarse, 'D' para doblar, 'O' para pedir otra carta, y 'M' para mantener sus cartas.


	
    * 
Dependiendo de la opción se le entregan más cartas al jugador.


	
    * Cuando el jugador ha dejado de pedir cartas entonces juega el croupier, solicitando cartas hasta completar 17.


	
  6. Se determina el resultado del juego y se retorna la ganancia o pérdida obtenida




Todo lo anterior se refleja en la siguiente función **jugar_mano()**:


    
    
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
    		while jugada in ['I', 'O']:
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
    
    



La función **baraja_mezclada()** en la línea 3 corresponde a una variación de la función con el mismo nombre que vimos en el [capítulo 12](http://www.programando.org/blog/2011/03/juegos-de-azar/), recuerden que esta función es una función generadora, esto nos permite usar la función primitiva **next()**. Con la función next() podemos obtener el siguiente elemento de un generador.

El if en la linea 6 sirve para controlar la situación en que tengamos 21 en la primera jugada, eso es un black jack, con lo que el resultado se paga 3 a 2.

A partir de la linea 10 tenemos el caso en que no hay black jack. 

El ciclo while requiere atención. Fíjense que partimos con el valor de la variable **jugada** en 'I', con esto podemos "pasar" por la condición inicial del while y se ejecuta de inmediato las funciones **mostrar_jugada()** y **solicitar_jugada()**. Pero, atención, 'I' no es una opción de las posibles, la razón por la que usamos 'I' es que la función **solicitar_jugada()** tienen un comportamiento distinto al principio del juego (ver más abajo).

Determinar la condición adecuada para colocar en un ciclo while no es fácil y más adelante vamos a dedicar unos capítulos a entender este tema. Les sugiero revisar este ciclo while y simular su comportamiento con papel y lapiz, anoten el valor de la variable jugada y estudien qué pasa al principio del ciclo y como varía el comportamiento del programa dependiendo de la opción que elija el jugador.

Si recuerdan en el [capítulo anterior](http://www.programando.org/blog/2011/04/interfaz-de-usuario-black-jack/) escribimos una versión de la función **solicitar_jugada()**, bueno, la versión definitiva de esa función es la siguiente:


    
    
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
    



Queda claro que el menú es distinto al principio del juego, pues sólo se puede doblar la apuesta en ese instante, de ahí en adelante la opción 'D' ya no se puede usar.

La función **mostrar_manos()** es muy sencilla, sólo llama a la función **mostrar_mano()** del capítulo anterior, dos veces, una por la mano del jugador y otra para mostrar la mano del couprier.


    
    
    
    def mostrar_mano(prompt, mano):
    	print("\t", prompt, 
    	      " ".join ( str(carta[0])+"-"+carta[1] for carta in mano),
    		  " ( Valor: ", valor_mano(mano), ")\n")
    
    def mostrar_manos(mano_jugador, mano_couprier):
    	mostrar_mano("Cartas Jugador:  ", mano_jugador)
    	mostrar_mano("Cartas Couprier: ", mano_couprier)
    



La función **jugar_couprier()** respeta la regla de que el couprier pide cartas hasta completar 17:


    
    
    def jugar_couprier(mano, baraja):
    	while valor_mano(mano) < 17:
    		mano.append(next(baraja))
    	return mano
    



Por último la función **determinar_ganancia()** nos entrega la ganancia (o pérdida si es negativa) de acuerdo a la comparación del valor de las manos del jugador y el couprier:


    
    
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
    



Con esto completamos nuestro programa que juega black jack. Este es el código completo del programa, te sugiero grabarlo como blackjack1.py y probarlo en tu ambiente:


    
    
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
    	
    # llamada a blackjack() con pozo inicial y apuesta minima
    black_jack(500, 10) # este es el punto de entrada del programa
    
    



Son 134 líneas de código. Por cierto, este programa tiene algunos defectos que vamos a resolver más adelante (¿puedes identificarlos?)

Esta vez no habrá ejercicios, la tarea es analizar cómo funciona este programa y entenderlo, te sugiero probar cambiando algunas cosas de este programa. Si algo no quedó claro te pido que me hagas consultas en los comentarios. Si identifican algún error por favor escríbanlo en los comentarios. El código fuente se encuentra en GitHub y lo pueden descargar desde allá en esta dirección: [https://github.com/lnds/programando.org/tree/master/curso-de-programacion-cap-15-blackjack](https://github.com/lnds/programando.org/tree/master/curso-de-programacion-cap-15-blackjack)

