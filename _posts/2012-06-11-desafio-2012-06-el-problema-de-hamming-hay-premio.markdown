---
comments: true
date: 2012-06-11 15:21:07
layout: post
slug: desafio-2012-06-el-problema-de-hamming-hay-premio
title: Desafío 2012-06 El problema de Hamming (hay premio)
wordpress_id: 404
categories:
- Sin categoría
tags:
- premio
---

Esta es una variante del problema de Haming, que el mismo Dijkstra aborda en uno de sus escritos.

La secuencia de Hamming

Tomemos 3 números primos p1, p2 y p3. Definiremos la secuencia de Haming H(p1,p2,p3) como un conjunto que contiene, en orden incremental, todos los números naturales cuyos únicos divisores primos son p1,p2 y p3.

Por ejemplo H(2, 3, 5) = 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20, 24, 25, 27, ...


Definiremos el número Hi(p1,p2,p3), o número de Hamming sub i, con i = 1,2,... al i-ésimo número de la secuencia de Haming H(p1,p2,p3).







Así que H5(2, 3, 5)=6 y H9(2,3,5)=12


El problema consiste en escribir un programa que reciba 4 números: p1 p2 p3 i, y retorne un único entero correspondiente a Hi(p1,p2,p3). Todos los números serán menores que 10ˆ18.

Ejemplo de entrada:

# hamming 7 13 19 100

Salida esperada:

    
    # 26590291


El programa debe correr en menos de 1.000 milisegundos y consumir la menor cantidad de memoria posible.

Ganará el programa más rápido. Da lo mismo el lenguaje de programación. Lo ideal es que envíen instrucciones de compilación.

El premio:** 1 Gift Card de Amazon de us$ 25**. Sólo habrá premio para el primer lugar.

Nota: La respuesta y premación del desafío de mayo viene en el próximo post.

Nota 2: no todos los desafíos tendrán premio.
