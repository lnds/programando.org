---
comments: true
date: 2011-04-06 12:17:02
layout: post
slug: interfaz-de-usuario-black-jack
title: La interfaz de usuario de Black Jack
wordpress_id: 209
categories:
- Aprendiendo a programar
---

Ya es tiempo de que montemos nuestro juego. En las lecciones previas aprendimos todo lo necesario para armar el juego. Ahora vamos a escribir el programa que juega blackjack. Esta labor la dividimos en 2 partes: la interfaz de usuario y la lógica de juego.

En nuestra descripción de las reglas del juego definimos que el jugador tendrá un pozo inicial y una apuesta mínima, estos serán los dos parámetros iniciales de nuestro programa.

Imaginemos que nuestro programa es una función que recibe dos parámetros: **pozo** y **apuesta_minima**.

La idea es que el juego se extienda mientras el jugador tenga algo que apostar, o decida retirarse. Escribamos en términos simples cómo será el juego:


> 

> 
> 
	
>   1. Definir un pozo inicial y una apuesta mínima.
> 

	
>   2. Solicitar una apuesta inicial.
> 

	
>   3. Mientras el jugador tenga algo que apostar:


	
>     4. Jugar una mano con la puesta ingresada por el jugador.
> 
        
>     5. Modificar el pozo de acuerdo a lo que haya ganado o perdido el jugador.
> 
	
>     6. Mostrar el resultado de la mano jugada.
> 
	
>     7. Solicitar una nueva puesta.
> 

> 






 
 
La indentación nos permite indicar que tenemos un ciclo que se repetirá mientras el jugador tenga algo que apostar. Esta condición implica que si el jugador ingresa 0 (cero) como el monto de su apuesta entonces el juego termina.

Escribamos esto en python:


     
     
     def blackjack(pozo, apuesta_minima):
          print ("Bienvenido al juego de black jack")
          apuesta = solicitar_apuesta(pozo, apuesta_minima)
          while apuesta_minima <= apuesta <= pozo:
              resultado = jugar_mano(apuesta, pozo)
              pozo  += resultado
              mostrar_resultado(resultado, pozo)
              apuesta = solicitar_apuesta(pozo, apuesta_minima)
          print ("Gracias por participar, su pozo final es: ", pozo)
     
 
 

El programa es bastante pequeño, apenas 9 lineas de código, todo queda delegado en las funciones auxiliares: **solicitar_apuesta()**, **jugar_mano()** y **mostrar_resultado()**.

Le agregamos dos mensajes, uno de bienvenida y otro de despedida, el estilo de estos mensajes es formal. 

La función **solicitar_apuesta()** es muy importante, y está sujeta a estas restricciones: primero no debe aceptar apuestas que estén fuera del rango permitido, es decir, la apuesta debe ser mayor o igual a la apuesta mínima y menor o igual al pozo disponible, con una excepción, se acepta el valor 0. La otra condición que verifica esta función es si el pozo es suficiente para apostar. Si no hay suficiente dinero entonces también retorna un valor que permita salir del ciclo. Estas condiciones son importantes para que funcione adecuadamente la condición que tenemos en nuestro while.

Considerando todo lo anterior la función **solicitar_apuesta()** queda de este modo:


     
     
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
     
 
 

La función solicitar_apuesta verifica si el pozo es menor que la apuesta mínima, si este es el caso entonces retorna el valor -1, con esto se rompe la condición **(apuesta_minima <= apuesta <= pozo)** y el ciclo principal termina. Por otro lado, si el pozo es suficiente para apostar (es decir, pozo >= apuesta_minima), solicitamos al usuario que ingrese un monto. La condición escogida asegura que el valor sólo puede ser 0 ó estar dentro del rango entre apuesta_minima y pozo.

La función mostrar_resultado es muy simple:


     
     
     def mostrar_resultado(resultado, pozo):
     	if resultado > 0:
     	   print("Jugador gana $", resultado)
     	elif resultado < 0:
     	   print("Jugador pierde $", -resultado)
     	else:
     	   print("Empate")
     	print ("Su pozo es: $", pozo, "\n")
     
 
 

Noten que esta función asume que el resultado es negativo cuando el jugador pierde, positivo cuando gana y 0 cuando hay empate. Además es necesario que el pozo esté actualizado antes de invocar a esta función.

Hay dos funciones más que usaremos más adelante, en la segunda parte de la lógica de juego, y que son parte de la interfaz de usuario.

Primero vamos a necesitar una función que muestre las cartas de una mano y su valor, esta función es muy simple:


     
     
     
     def mostrar_mano(mensaje, mano):
     	print(mensaje, 
     	      " ".join ( str(carta[0])+"-"+carta[1] for carta in mano),
     		  " ( Valor: ", valor_mano(mano), ")\n")
     
 
 

La función **mostrar_mano()** imprime en pantalla un mensaje y luego una representación de las cartas. Si la mano es : [('K', 'P'),(8,'D')] su representación visual será: "K-P  8-D  (Valor: 18)".

La función **valor_mano()** es la misma que ya definimos en el [capítulo anterior](http://www.programando.org/blog/2011/04/la-reglas-del-juego/).

La otra función que usaremos en el próximo capítulo es una que nos permita solicitar al usuario que ingrese una entre varias opciones. A esta función la llamaremos **solicitar_jugada()**:


     
     
     def solicitar_jugada(prompt, opciones):
              """ opciones es un conjunto de strings que representan las 
              opciones del menú, deben venir todas en mayúsculas."""
     	opcion = input(prompt).strip().upper()
     	while opcion not in opciones:
     		print("opción incorrecta")
     		opcion = input(prompt).strip().upper()
     	print ("")
     	return opcion
     
 
 

La función input() nos retorna un String. Un string tiene los métodos **strip()** y **upper()**, **strip()** elimina todos los espacios en blanco que tenga un string, upper convierte el string a mayúsculas (es decir, si el string era 'a' queda como 'A').

En el próximo capítulo de nuestro [curso de programación](http://www.programando.org/blog/aprende-a-programar/) terminaremos el programa que implementa el juego de blackjack, en ese momento revisaremos las funciones que implementan la lógica del juego y usaremos las dos funciones que acabamos de implementar.

Ahora los ejercicios:

 
 
	
   1. Escribe la función pedir **solicitar_jugada()** en el IDLE y prueba ingresando distintos prompt y opciones (por ejemplo: solicitar_jugada("Responda la pregunta con un si o un no", ["SI", "NO"]).
 
	
   2. ¿Qué problema tiene la función **solicitar_apuesta()** cuando ingresas algo distinto a un número? ¿Se te ocurre como evitar el problema?
 
	
   3. ¿Se te ocurre otra forma de escribir la función **mostrar_mano()**?
 
	
   4. Escribe una función **jugar_mano()** que sólo imprima en pantalla el mensaje "LOGICA DE JUEGO PENDIENTE" y úsala para probar la función blackjack.
 








