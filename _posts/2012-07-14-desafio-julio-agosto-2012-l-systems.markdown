---
comments: true
date: 2012-07-14 20:30:31
layout: post
slug: desafio-julio-agosto-2012-l-systems
title: 'Desafío Julio - Agosto 2012: L-Systems'
wordpress_id: 424
categories:
- Sin categoría
tags:
- fractales
- juego
- L-System
---

**IMPORTANTE: Dado algunas solicitudes en privado y puesto que este post fue publicado el día 14 de julio, he decidido ampliar el plazo hasta el 15 de septiembre. Aún hay tiempo para que puedan participar.**


Un L-System es un tipo de gramática formal que es usada para modelar el desarrollo de las plantas. Este tipo de sistemas permite generar una clase de fractales conocidos como sistemas iterativos de funciones.

Este video muestra varios L-Systems generados mediante un programa en C++ y Open GL



Los L-Systems fueron creados por el biólogo y botánico húngaro Aristid Lindenmayer, uno de los primero L-System creados por Lindenmayer fue este modelo de crecimiento de un alga:

variables: A B
estado inicial o axioma: A
reglas: (A-> AB), (B->A)

si n cuenta las iteraciones de estas reglas a partir del estado inicial produce las siguientes secuencias:

n = 0: A
n = 1: AB // aplicando la primera regla
n = 2: AB A // A-> AB y B -> A
n = 3: AB A AB // A-> AB, B->A, A -> AB
n = 4: AB A AB AB A // A-> AB, B->A, A-> AB, A->AB, B-> A
n = 5: AB A AB AB A AB A AB // A-> AB, B->A, A->AB, A-> AB, B->A, A->AB, B->A, A->AB
...

Si contamos la longitud de cada string generado obtenemos la secuencia de Fibonacci sin el primer 1 (1,2,3,5,8,13...).

Lo interesante es cuando asociamos los strings resultantes a instrucciones para dibujar.

Por ejemplo, supongamos que tenemos el siguiente L-System:

variables: 0 1
constantes: [ ]
axioma: 0
reglas: (1 -> 11), (0->1[0]0)

Entonces aplicamos el axioma recusivamente a través de las reglas y tenemos:

axioma: 0
primera recursión: 1[0]0
segunda recursión: 11[1[0]0]1[0]0
tercera recursión: 1111[11[1[0]0]1[0]0]11[1[0]0]1[0]0

Si definimos las siguientes reglas de dibujo:

0: dibujar un segmento que representa una hoja
1: dibujar un segmento de linea representando una rama
[: guardar la posición y el ángulo, girar 45 grados a la izquierda
]: recuperar la posición y el ángulo, girar 45 grados a la derecha

Usando un stack LIFO y usando una tortuga para dibujar (como la de Logo, o Python), tenemos: la siguiente secuencia de imágenes:


[![](http://www.programando.org/blog/wp-content/uploads/2012/07/l-systems-01.png)](http://www.programando.org/blog/wp-content/uploads/2012/07/l-systems-01.png)




Pueden leer más detalles sobre los L-Systems en [esta entrada](http://en.wikipedia.org/wiki/L-system) en Wikipedia.




Bien, ahora el desafío.





# Desafío Julio - Agosto 2012, L-Systems




Asuman que existe un programa que recibe las especificaciones para dibujar un L-System y genera un dibujo, usando [turtle graphics](http://en.wikipedia.org/wiki/Turtle_graphics).

Las especificaciones se describen en un archivo ascii con la siguiente estructura:

La primera linea debe contener la instrucción **lar** que especifica el largo de un segmento de linea a dibujar (en pixels), por ejemplo:

    
    lar 50




La segunda línea contiene el ángulo inicial especificado mediante la instrucción **ang **expresada en grados, por ejemplo:




    
    ang 60


luego se especifica el axioma mediante la instrucción **axi, **por ejemplo:

    
    axi A


luego vienen las reglas, una por linea. Los símbolos de las reglas pueden ser:

!ATENCION, he editado las reglas de generación por favor revisenlas:



	
  * **+ :** gira la tortuga a la izquierda de acuerdo a la cantidad de grados definida con la instrucción **ang**

	
  * **-** :   gira la tortuga a la derecha de acuerdo a la cantidad de grados definida con la instrucción **ang**

	
  * **B: **mueve la tortuga hacia atrás   la cantidad de pixeles definidos con la instrucción **lar** dejando un trazo

	
  * **b: ** mueve la tortuga hacia atrás  la cantidad de pixeles definidos con la instrucción **lar **sin dejar trazo

	
  * **F: **mueve la tortuga hacia adelante  la cantidad de pixeles definidos con la instrucción **lar** dejando un trazo

	
  * **f**: mueve la tortuga hacia adelante  la cantidad de pixeles definidos con la instrucción **lar**

	
  * Letras mayúsculas (excepto B y F) que indican las variables de las reglas.




Finalmente viene la instrucción **iter** que indica cuantas veces se itera las reglas para obtener el dibujo.


ejemplo: así luciría un archivo de entrada


> lar 20
ang 60
axi A
A:A+ZF++ZF-FA--FAFA-ZF+
Z:-FA+ZFZF++ZF+FA--FA-A
iter 2


Al interpretar este archivo el programa dibuja una figura  similar a esta:

[![](http://www.programando.org/blog/wp-content/uploads/2012/07/ejemplo-lsystem-2.png)](http://www.programando.org/blog/wp-content/uploads/2012/07/ejemplo-lsystem-2.png)

El desafío consiste en escribir un programa que reciba un archivo con el formato definido, y luego usarlo para esta imagen:


 [![](http://www.programando.org/blog/wp-content/uploads/2012/07/desafio-julio-agosto.png)](http://www.programando.org/blog/wp-content/uploads/2012/07/desafio-julio-agosto.png)




Además, aquel que entregue un L-System que genere la imagen más cercana a una planta o una flor tiene más posibilidades de ganar.




Los criterios para elegir ganador serán:






	
  * la calidad del código del programa

	
  * el que genere el L-System más simple para dibujar las figuras

	
  * el que genere la flor o planta más hermosa (en el jurado estará mi esposa ;))


El premio es una giftcard de amazon de US$ 25 y el plazo de entrega es el 15 de septiembre <del>25 de agosto </del>.
