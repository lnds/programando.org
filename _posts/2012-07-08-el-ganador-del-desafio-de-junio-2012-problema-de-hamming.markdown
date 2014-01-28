---
comments: true
date: 2012-07-08 21:02:14
layout: post
slug: el-ganador-del-desafio-de-junio-2012-problema-de-hamming
title: El ganador del desafío de Junio 2012, problema de Hamming
wordpress_id: 420
categories:
- Sin categoría
tags:
- desafío junio 2012
- ganador
---

Es hora de entregar el premio al ganador del desafío de Junio.

Participaron:



	
  * **Javier Rovegno**: con dos soluciones, la segunda es correcta, esencialmente calcula todos los números posibles dentro del rango, y luego ordena la secuencia. Su solución está [aquí](https://gist.github.com/2932107).

	
  * **Felipe Bañados:** con una elegante solución en Haskell, que basicamente implementa la misma solución que expuse en el [post anterior](http://www.programando.org/blog/2012/07/respuesta-al-desafio-de-junio-el-problema-de-hamming/), es decir, calcular las secuencias H(p1), H(p2) y H(p3) y luego el merge. Su solución está [acá](http://personales.dcc.uchile.cl/~fbanados/hamming.hs).

	
  * **Carlos Rodriguez:** que colaboró con una versión en Pascal! y otra en Python. Al igual que Javier implementa el mecanismo de calcular las secuencias y luego ordenarlas. La versión en pascal está [acá](http://www.racss.com.ar/racss/descargas/junio2012Integer.zip) y la versión en python [acá](http://www.racss.com.ar/racss/descargas/ham3.py).

	
  * **Mauricio Quezada:** con el mismo tipo de solución en python que propuse inicialmente, generación de los iteradores y luego un merge. Esa versión está [acá](https://gist.github.com/2964088).

	
  * **Daniel Molina**, con una muy eficiente solución en Haskell, tengo la impresión que trata de usar el mínimo de memoria posible, pero supongo que un experto haskell debería opinar. Su solución está [acá](https://github.com/dmw/prjeuler/blob/master/src/hamming.hs).

	
  * **Aldrin Martoq**, con dos soluciones en C, la segunda versión opera con enteros de 128bits, es la solución más rápida de todas (excepto por la de Jed Davis), claro que tiene un alto uso de memoria.  Su solución en 128 bits está [acá](https://github.com/aldrinmartoq/lnds-hamming/blob/master/hamming-128.c).


Les agradezco a todos su tiempo y participación.

Los dos finalistas son Aldrin Martoq y Daniel Molina, pues tienen las soluciones más eficientes de todas las presentadas.

La verdad es que es muy dificil decidir el ganador entre los dos, la razón es que la solución de Aldrin es la más rápida y ocupa menos memoria, pero no es capaz de calcular la secuencia H(7,13,19,10000), el programa de Daniel sí lo hace  y en menos de 1 segundo. Por otro lado, la solución de Aldrin puede calcular en menos tiempo la secuencia H(2,3,5,100000).  Pero la versión de Daniel supera el limite H(2,3,5,100525) de la solución de Aldrin. Por esto último decido que el ganador es Daniel Molina, con quien me pondré en contacto para enviarle su Gift Card.

Gracias nuevamente por participar, estén atentos al próximo desafío.


