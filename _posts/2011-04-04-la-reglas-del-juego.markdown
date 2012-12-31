---
comments: true
date: 2011-04-04 11:28:03
layout: post
slug: la-reglas-del-juego
title: La reglas del juego
wordpress_id: 194
categories:
- Aprendiendo a programar
tags:
- blackjack
- curso
- decisiones
- if
- poker
---

[![](http://www.programando.org/blog/wp-content/uploads/2011/04/Blackjack_game_example-199x300.jpg)](http://www.programando.org/blog/wp-content/uploads/2011/04/Blackjack_game_example.jpg)Hasta ahora en las lecciones previas hemos aprendido como generar cartas y barajarlas. A continuación vamos a realizar una **especificación de requerimientos** para el juego de Black Jack.

**El juego de Black Jack**

En nuestro  juego participará 1 sólo jugador, y el computador actuará como croupier. Este será un juego de apuestas.
El juego consiste en obtener 21 puntos con las cartas que se tienen en la mano. Las cartas del 2 al 10 conservan su valor, las cartas de la J a la K tienen el valor 10, y el As puede valer 1 ú 11. Si se tiene en la mano más de 21 se pierde inmediatamente.

Vamos a usar las siguientes reglas sacadas de Wikipedia:



> La banca reparte 2 cartas a cada jugador, (valores: as = 1 u 11, figuras = 10, numéricas su valor natural) el jugador tiene la posibilidad de **plantarse** (quedarse con las cartas que tiene) o **pedir carta**, sin pasarse del 21 ya que pierde automáticamente; gana finalmente el que tenga el número más alto, cercano al 21, o saque un blackjack. Por su parte el croupier tiene reglas rígidas a las que atenerse: si su puntación inicial será 16 o menor esta obligado a tomar otra carta, y se plantará siempre que su puntuación alcance 17. Estas reglas las aplicará independientemente de las jugadas que tengan cada uno de los jugadores.

Un Black Jack es la combinación de un As con una figura o un diez, es decir, obtener 21 sólo con las 2 primeras cartas.




La banca tendrá una sola carta descubierta inicialmente.

**Apuestas**

El jugador podrá apostar una cantidad de dinero virtual ($). El jugador dispondrá de un pozo inicial de $500.
El juego parte con la apuesta inicial del jugador antes de recibir sus dos primeras cartas. La apuesta mínima será de $10. El jugador puede **doblar** su apuesta y a cambio sólo recibe una carta adicional a las 2 iniciales, si gana recibe el doble de lo apostado. 
El jugador puede **retirarse**, solo al inicio de la partida, en este caso se le cobrará la mitad de lo apostado inicialmente. Y por cierto puede pedir una carta adicional, y detenerse.


**Elementos del juego**

Veamos las componentes del juego. Por un lado tenemos las barajas, que ya hemos estudiadio anteriormente. Por otro los jugadores, dos en nuestro caso, el usuario del programa, que llamaremos simplemente jugador. Por otro tendremos el computador que actúa como croupier.

**El croupier**
[![](http://www.programando.org/blog/wp-content/uploads/2011/04/Croupier-150x150.jpg)](http://www.programando.org/blog/wp-content/uploads/2011/04/Croupier.jpg)

El croupier está obligado a tener sobre 16  puntos en su mano, y si saca 17 puntos en su mano se planta de inmediato.

Calcular el valor de una mano entonces es un elemento que va a ser muy necesario en nuestro juego, vamos a resolver este problema.

**¿Cómo calcular el valor de una mano?**

Primero, una mano es una lista de cartas. Cada carta está representada por una dupla (valor, palo). Obtener el valor de una dupla es fácil, basta con acceder al primer elemento de la tupla (el que tiene el índice 0, siempre empezamos a contar desde cero).


    
    
    >>> dupla = ('A', 'T')
    >>> dupla[0]
    



Considerando eso la siguiente definición nos proporciona una función que nos permite calcular el mejor valor posible de una mano:


    
    
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
    



Este es la función más compleja que hemos escrito hasta ahora. 
Primero define una variable valor que es la que usaremos para acumular el valor de las cartas en la mano. La variable booleana ases será usada para indicarnos si hay al menos un as en la mano. Si hay más de un as en la mano sólo nos conviene convertir en 11 uno de los ases (¿por qué?).

Luego recorremos la lista de cartas, usando la instrucción for, esta es otra forma de usar for fuera de una lista por comprensión. Esta es otro tipo de ciclo, tal como  el loop **while**.

Este ciclo permite obtener una a una las cartas de la lista, la que vamos almacenando en la variable **carta** en cada ciclo.

Con cada carta obtenemos su valor, recuerda que cada carta es una dupla, por eso asignamos a la variable **valor_carta** el elemento 0 de la dupla **carta**.

Si el valor de la carta es 'J', 'Q', o 'K', entonces debemos sumar 10 al acumulador **valor**, si es un As ('A') vamos a sumar 1 al acumulador, pero marcaremos la presencia de un as colocando la variable ases en True. Esto será importante al finalizar el ciclo. Por último, si el valor de la carta está entre 2 y 10 se suma ese valor al acumulador.




> **Decisiones**

Cuando queremos tomar decisiones usamos la instrucción **if**. La forma general de la instrucción if es:


>     
>     
>     if expressión-1:
>        bloque de instrucciones que se ejecuta si expressión-1 es True
>     elif expresión-2:
>        bloque de instrucciones que se ejecuta si expressión-2 es True 
>         (y expresión-1 es False, por supuesto)
>     elif ....:
>         otros bloques elif
>     else:
>         bloque de instruccion que se ejecuta si ninguna de las expresiones
>         condicionales son True
>     
>     
> 
> 




Finalmente, después de que ha terminado el loop for en la variable acumulador valor tenemos el valor preliminar de la mano. Pero, si tenemos un As, podemos mejorar el valor de la mano sumándole 10 (ya hemos sumado 1 al acumulador, y el As puede tener el valor 1 ú 11), por supuesto sólo sumaremos 10 si nos conviene, por eso que tenemos la expresión **(valor + 10) <= 21**.


Veamos algunos ejemplos de uso de nuestra función **valor_mano()**:

    
    
    >>> valor_mano([('A','D'),('K','P')])
    21
    >>> valor_mano([(2,'T'), (6,'D'), ('A','P')])
    19
    >>> valor_mano([(1,'T'), ('A','D'),('K','P')])
    12
    



Bien, ya hemos hecho una descripción de las reglas de nuestro juego, con esto tenemos todos los elementos para trabajar en la interfaz de nuestro juego de Black Jack, lo que será el objetivo de nuestro próximo capítulo.

Vamos a los ejercicios:



	
  1. Escribe una función que reciba dos manos de cartas y entregue el valor True si ambas manos sin iguales (mismas cartas, la comparación debe ser palo y valor).

	
  2. Escribe una función que que indique si dos manos tienen el mismo valor.


	
  3. En el Poker tenemos una mano de 5 cartas. Un par son dos cartas del mismo valor, un trío son 3 cartas del mismo valor, un poker ocurre cuando tenemos 4 cartas del mismo valor (por ejemplo, cuatro ases). Un Full corresponde a un par y un trio. Escribe una función valor_mano_poker() que entregue los valores, 2 para un par, 3, para un trio, 4 para un poker, 5 para un full, y 0 para cualquier otro caso.


	
  4. Escribe una función que reciba 2 manos de poker y determine cual de las dos es la mejor






