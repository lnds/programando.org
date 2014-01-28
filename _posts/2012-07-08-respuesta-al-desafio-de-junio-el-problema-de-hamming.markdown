---
comments: true
date: 2012-07-08 20:18:17
layout: post
slug: respuesta-al-desafio-de-junio-el-problema-de-hamming
title: Respuesta al desafío de Junio, el problema de Hamming
wordpress_id: 416
categories:
- Sin categoría
tags:
- desafío junio
- hamming
- solución hamming
---

[caption id="attachment_417" align="alignright" width="222"][![](http://www.programando.org/blog/wp-content/uploads/2012/07/Hamming-222x300.jpg)](http://www.programando.org/blog/wp-content/uploads/2012/07/Hamming.jpg) Richard Hamming[/caption]

[Richard Hamming](http://www-history.mcs.st-andrews.ac.uk/Biographies/Hamming.html) fue un notable matemático norteamericano, en 1945 trabajó en el proyecto Manhattan programando uno de los primeros computadores, desarrolló un programa que debía determinar si la explosión de la bomba atómica era capaz de incendiar la atmósfera, uno de los mayores temores de los científicos de esa época y que determinó la viabilidad de los lamentables bombardeos posteriores a Hiroshima y Nagasaki.

Después de este periodo trabajó con Claude Shannon en los laboratorios Bell, y fue uno de los fundadores la Asssociation for Computing Machinery (ACM). Recibió el premio Turing en 1968. La IEEE estableció en 1988 una medalla que lleva su nombre, y que se entrega anualmente a personas que logren avances notables en ciencias o tecnologías de la información.

Aparte del problema que nos convoca, Hamming es famoso por haber desarrollado el [código de detección y corrección de errores que lleva su nombre](http://es.wikipedia.org/wiki/C%C3%B3digo_Hamming), que permite que las comunicaciones y el almacenamiento de información sea una cosa segura y eficiente.

El resumía su filosofía sobre la computación numérica en la frase: **"The purpose of computing is insight, not numbers"**.

Dijkstra en su libro [A Discipline of Programming](http://amzn.to/PvySVM) plantea y populariza una versión del problema de Hamming.

La versión original de Dijkstra es imprimir en orden los números de la forma 2i*3j*5k, para enteros no negativos i,j, k.

Estos números se conocen como números regulares, o números de Hamming, en teoría músical se conoces como [temperamento justo](http://es.wikipedia.org/wiki/Temperamento_justo), o mesotónico, a la entonación que sigue una secuencia de números regulares (si no me equivoco, Andy Summer, el guitarrista de Polices aplica este tipo de afinamiento).

Para resolver el problema Dijsktra considera los siguientes pasos:



	
  * La secuencia de Hamming comienza con el número 1

	
  * Si el número h está en la secuencia, entonces deben estar los número 2h, 3h y 5h.

	
  * Por lo tanto, la secuencia H puede ser generada escribiendo el valor 1 y luego se debe mezclar con la secuencia 2H, 3H y 5H.


Nuestro problema es una generalización, en así que reemplazamos 2, 3 y 5 por p1, p2, y p3.

Con esto podemos tener nuestra primera solución, que voy a escribir en Python:



Por supuesto falta el detalle, de las funciones times y merge, esto lo pueden encontrar en [mi repositorio en GitHub](https://github.com/lnds/programando.org/blob/master/hamming/hamming0_ediaz.py).

Esta solución muestra la elegancia de las lazy evaluation de los lenguajes funcionales.

Hay varios problemas con esta solución, ¿pueden identificarlos?

Lo más notable es el uso de memoria, ejecutar este programa con los parámetro 7 13 19 500 consume rápidamente sobre los 4 gb!!

Una discusión interesante sobre como resolver este problema se encuentra en Lambda The Ultimate en [este artículo](http://lambda-the-ultimate.org/node/608), de ahí adapté esta solución, que es bastante eficiente, aunque es difícil de entender, así que acá hay otros dos desafíos, explicar cómo funciona esta solución y extenderla para que funcione con números más grandes:



Esta solución fue planteada por Jed Davis.
En el próximo post voy a entregar los premios, así que estén atentos. :)
