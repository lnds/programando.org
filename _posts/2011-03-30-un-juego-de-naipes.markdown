---
comments: true
date: 2011-03-30 10:25:26
layout: post
slug: un-juego-de-naipes
title: Un juego de naipes
wordpress_id: 176
categories:
- Aprendiendo a programar
tags:
- azar
- curso
- duplas
- juegos
- naipes
- secuencias
- tuplas
---

Ya estamos en posición de dar un paso más interesante en [nuestro cursillo de programación](http://www.programando.org/blog/aprende-a-programar/), creo que es momento de emprender un proyecto de mayor envergadura. Para que sea entretenido vamos a desarrollar un juego de cartas clásico: [Black Jack](http://es.wikipedia.org/wiki/Black_jack).

Durante los próximos capítulos vamos a aprender a trabajar con el azar y modelaremos un programa que permita jugar naipes con el computador.

La Baraja

Partamos por lo básico, los naipes, ¿cómo representaremos los naipes en nuestro programa?

Bueno, para eso aprendimos algo sobre secuencias en nuestra [lección anterior](http://www.programando.org/blog/2011/03/listas/).

[![](http://www.programando.org/blog/wp-content/uploads/2011/03/palos.png)](http://www.programando.org/blog/wp-content/uploads/2011/03/palos.png)El Black Jack se juega con la baraja francesa (o inglesa) de 52 cartas, dividida en 4 palos: corazones, diamantes, tréboles y picas.

Cada carta entonces se representa por su valor y su palo. La mejor manera de representar esto es mediante una dupla: (valor, palo).

Por ejemplo, el As de Diamantes se puede representar por la dupla: (A, D), el 8 de tréboles por (8, T), y así.

El siguiente código permite generar las 52 duplas que componen una baraja:


    
    
    palos = ['C', 'D', 'T', 'P']
    
    valores = ['A'] + [v for v in range(2,11)] + ['J', 'Q', 'K']
    
    baraja = [(valor, palo) for palo in palos for valor in valores]
    
    



Analicemos el código con más calma.

La linea 01. declara la variable **palos** como una lista por extensión, eso es bastante simple.

La linea 03. declara la variable **valores**, en este caso los valores irán desde As (1) seguidos por el 2 al 10, para terminar en la K. Esta declaración es por comprensión. Fíjense que usamos range(2, 11) para indicar que queremos que el rango vaya desde el número 2 hasta el 10 (**range()** termina antes del argumento que recibe como tope).

La linea 05. es la más interesante y compleja, esta declara una lista de duplas por comprensión. La variable **baraja** es una lista de duplas, cada dupla tiene la forma que acordamos al principio (valor, palo). Pero fíjense en el orden en que declaramos las clausulas **for**

Si imprimes baraja (**print(baraja)**) obtendrás esta lista:


    
    
    [('A', 'C'), (2, 'C'), (3, 'C'), (4, 'C'), (5, 'C'), (6, 'C'), (7, 'C'), 
    (8, 'C'), (9, 'C'), (10, 'C'), ('J', 'C'), ('Q', 'C'), ('K', 'C'), ('A', 'D'), 
    (2, 'D'), (3, 'D'), (4, 'D'), (5, 'D'), (6, 'D'), (7, 'D'), (8, 'D'), 
    (9, 'D'), (10, 'D'), ('J', 'D'), ('Q', 'D'), ('K', 'D'), ('A', 'T'), (2, 'T'), 
    (3, 'T'), (4, 'T'), (5, 'T'), (6, 'T'), (7, 'T'), (8, 'T'), (9, 'T'), 
    (10, 'T'), ('J', 'T'), ('Q', 'T'), ('K', 'T'), ('A', 'P'), (2, 'P'), (3, 'P'), 
    (4, 'P'), (5, 'P'), (6, 'P'), (7, 'P'), (8, 'P'), (9, 'P'), (10, 'P'),
     ('J', 'P'), ('Q', 'P'), ('K', 'P')]
    



Pero si cambias la expresión de baraja por lo siguiente:

    
    
    baraja = [(valor, palo)  for valor in valores for palo in palos]
    



entonces al imprimir baraja obtendrás lo siguiente:


    
    
    [('A', 'C'), ('A', 'D'), ('A', 'T'), ('A', 'P'), (2, 'C'), (2, 'D'), (2, 'T'), (2, 'P'), (3, 'C'), (3, 'D'), (3, 'T'), (3, 'P'), (4, 'C'), (4, 'D'), (4, 'T'), (4, 'P'), (5, 'C'), (5, 'D'), (5, 'T'), (5, 'P'), (6, 'C'), (6, 'D'), (6, 'T'), (6, 'P'), (7, 'C'), (7, 'D'), (7, 'T'), (7, 'P'), (8, 'C'), (8, 'D'), (8, 'T'), (8, 'P'), (9, 'C'), (9, 'D'), (9, 'T'), (9, 'P'), (10, 'C'), (10, 'D'), (10, 'T'), (10, 'P'), ('J', 'C'), ('J', 'D'), ('J', 'T'), ('J', 'P'), ('Q', 'C'), ('Q', 'D'), ('Q', 'T'), ('Q', 'P'), ('K', 'C'), ('K', 'D'), ('K', 'T'), ('K', 'P')]
    



Lo que queremos es generar las cartas de modo que se genere primero el palo completo (desde la A a la K), para seguir con el próximo, por eso que la expresión **for palo in palos** va primero.

Con todo esto podemos generar una función que nos permita obtener una baraja nueva cada vez que la invoquemos.


    
    
    def generar_baraja():
       palos = ['C', 'D', 'T', 'P']
    
       valores = ['A'] + [v for v in range(2,11)] + ['J', 'Q', 'K']
    
       return [(valor, palo) for palo in palos for valor in valores]
    



Bien, eso es todo por hoy, mañana aprenderemos a mezclar las cartas, es decir, a barajar. Recuerden hacer los ejercicios.

Ejercicios:




	
  1. Una tupla es una secuencia de varios elementos que se representa encerrándola entre paréntesis. Por ejemplo: (1, 'C', 'azul'), ('Python', 12, pi, 2.7), ('a', 'b', 1, 2). Una dupla también se le llama 2-tupla. Una tupla de n elementos es una n-tupla. Supon que tenemos 2 barajas, una cuyo color al reverso es rojo y otra de color azul. Escribe el código para generar las 108 3-tuplas que contengan (valor, palo, color), donde color es el color del reverso del naipe ('rojo' o 'azul'). 


  2. Escribe una función que reciba como argumento el palo ('C', 'D', 'T' o 'P') y retorne sólo las cartas que pertenecen a ese palo.


  3. Escribe una función que reciba como argumento el palo ('C', 'D', 'T' o 'P') y retorne sólo las cartas que tienen número (2 al 10).


  4. El sitio [www.random.org](http://www.random.org/) permite generar números aleatorios (al azar). En particular si vas a [esta dirección](http://www.random.org/sequences/?min=1&max=52&col=1&format=html&rnd=new) obtendrás una lista de números aleatorios entre 0 y 51, escribelos en una lista por extensión y luego genera una función que reciba esta lista de números y retorne la baraja ordenada de acuerdo a la secuencia. (por ejemplo, si la lista fuera [4,5,6] entonces al llamar a la función con esta lista como argumento obtendríamos: [(5, 'C'), (6, 'C'), (7, 'C')]).





