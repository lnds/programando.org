---
comments: true
date: 2012-04-29 19:17:21
layout: post
slug: desafio-2012-04-and-the-winner-is
title: Desafío 2012-04, and the winner is...
wordpress_id: 369
categories:
- Sin categoría
---

Vaya, pasó volando abril, la verdad es que pasaron los días de este ajetreado mes y yo apenas pude dejarles el desafío, y esperar sus respuestas.

Vamos a revisar los resultados del desafío 2012-04: El problema de Siracusa, si no sabe de que hablamos le sugiero leer [este post](http://www.programando.org/blog/2012/04/desafio-2012-04-el-problema-de-siracusa/).


## **Participantes**:





	
  * **damowe**: Daniel Molina en Haskell, con 2 respuestas, aunque la segunda es la que implementa el requerimiento, Daniel incluso [escribió un post en su blog](http://coder.cl/2012/04/collatz-problem-and-haskell/) e investigó un poco más sobre este problema. A la solución correcta de Daniel la llamaremos damowe-2.hs.

	
  * **dtorres**: Daniel Torres participó con dos soluciones, una  en ruby dtorres-1.rb (elegí la más corta), y otra en c: dtorres-2.c.

	
  * **amartoq: **Aldrin Martoq aportó varias soluciones, de hecho varias están en un [proyecto en github ](https://github.com/aldrinmartoq/lnds-siracusa)en que estuvo explorando el tema. Tomaremos dos de sus soluciones para participar, una en ruby: amartoq-1.rb y otra en C: amartoq-2.c.

	
  * **chancesman: **Michael Chances participó tambien con una solución en C: chancesman-1.c

	
  * **umolina**: Uriel Molina particpa con una solución en PHP, umolina1.php.




## **Desempeño**:


Para evaluar el ganador vamos a descartar los programas que no cumplen el requerimiento [descrito anteriormente](http://www.programando.org/blog/2012/04/desafio-2012-04-el-problema-de-siracusa/):


> El desafío de este mes es escribir el programa más breve posible, en el lenguaje que quieran, que encuentre el número base de la secuencia de números más larga, este número debe estar entre 1 y un parámetro de entrada al programa.

Por ejemplo, si le paso como parámetro el número 5 al programa este debería imprimir 3, pues 3 es el número entre 1 y 5 que genera la secuencia más larga:

1: 4, 2, 1.
2: 1.
3: 10, 5, 16, 8, 4, 2, 1 <-- esta es la secuencia más larga, por tanto el resultado es 3.
4: 2, 1.
5: 16, 8, 4, 2, 1.


Por lo tanto si ejecuto Siracusa(2) el resultado debe ser 1.


## **Ronda Número 1:**







Veamos como le va a los participantes con n = 2:








	
  * damowe-2.hs: FAIL, retorna 2.

	
  * dtorres-1.rb: OK, retorna 1.

	
  * dtorres-2.c: FAIL, retorna 0.

	
  * amartoq-1.rb: OK, retorna 1.

	
  * amartoq-2.c: OK, retorna 1

	
  * chancesman-1.c: OK, retorna 1

	
  * umolina-1.php: FAIL, retorna 2 (además el parámetro está "en duro")




## **Ronda Número 2:**


El otro requerimiento es que el programa sea lo más breve posible. Vamos a ignorar comentarios y vamos a considerar la cantidad de líneas de código para los programas que pasan la ronda número 1:



	
  * dtorres-1.rb: **4**

	
  * amartoq-1.rb: **7**

	
  * amartoq-2.c:** 28**

	
  * chancesman-1.c: **30**

	
  * umolina-1.php: **20**




**
**







## **Ganador**







Así que el ganador es **dtores Daniel Torres, **con el programa más breve.













### **Mención Honrosa**







Aldrin Martoq escribió el programa más eficiente, amartoq.c, con 28 lineas.










## **Código Fuente**










El código de los concursantes está disponible en [este repositorio github](https://github.com/lnds/programando.org/tree/master/siracusa).







Proximamente mi solución a este problema y un nuevo desafío.







Felicitaciones a Daniel y a todos los que participaron.




Gracias a todos por participar!!
