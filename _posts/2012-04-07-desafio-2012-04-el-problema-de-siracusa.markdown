---
comments: true
date: 2012-04-07 17:24:27
layout: post
slug: desafio-2012-04-el-problema-de-siracusa
title: 'Desafio 2012-04: El problema de Siracusa'
wordpress_id: 364
categories:
- Sin categoría
tags:
- el problema de Siracusa
- secuencia de Hailstone
- secuencias
---

Parece que no me he dado el tiempo para escribir en este blog como esperaba, así que mis disculpas. Pero vamos a mantener la idea de tener al menos un desafío mensual. Cada desafío será identificado por el mes y año así que este es el desafío 2012-04. 

Vamos por él.

**El problema de Siracusa**

Piensa en un número positivo cualquiera, si es par divídelo por 2, si es impar multiplícalo por 3 y súmale 1. Repite el proceso con el resultado. Llegará un momento en que obtendrás el número 1, no importa el número que elijas.

A la secuencia de números que genera este algoritmo la llamamos la secuencia de Hailstone.

Veamos algunos ejemplos:





> Supongamos que partimos con el 4, la secuencia que obtendremos será: 4, 2, 1.

Partamos con el 11: 11, 34 (=11*3+1), 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1.




A 4 y 11 los llamaremos los números bases. Podrán apreciar que este algoritmo puede generar secuencias muy largas. 

El desafío de este mes es escribir el programa más breve posible, en el lenguaje que quieran, que encuentre el número base de la secuencia de números más larga, este número debe estar entre 1 y un parámetro de entrada al programa.

Por ejemplo, si le paso como parámetro el número 5 al programa este debería imprimir 3, pues 3 es el número entre 1 y 5 que genera la secuencia más larga:





> 1: 4, 2, 1.
2: 1.
3: 10, 5, 16, 8, 4, 2, 1 <-- esta es la secuencia más larga, por tanto el resultado es 3.
4: 2, 1.
5: 16, 8, 4, 2, 1.



Tienen un mes para contestar, el programa más breve gana (es decir, que tenga menos caracteres, no consideraremos los saltos de linea, tabuladores y espacios en blanco porque igual queremos que sea un programa legible).
