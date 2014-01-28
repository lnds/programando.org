---
layout: post
title: "Desafío enero 2014 - Los cuatro cuatro"
date: 2014-01-26 11:41
comments: true
categories: 
---

Este ejercicio lo aprendí cuando tenía unos quince o dieciséis años, en un taller de computación al que asistí. Uno de nuestros guías, un ingeniero matemático, alto, de lentes y pelo enmarañado, estaba jugando con expresiones matemáticas en la pizarra. Lo peculiar es que cada expresión contenía cuatro números cuatro.

Estos son ejemplos de algunas de las expresiones que dibujaba:

0 = 4/4 - 4/4

1 = 44/44

2 = 4/4 + 4/4

5 = r(4) + r(4) + 4/4

12 = 4! -4 - 4 - 4

19 = 4! - 4/4 - 4

32 = 4! + (4*4)/r(4)


Acá r(4) es la raíz cuadrada de cuatro, y 4! es el factorial de 4. 
En realidad el 32 se representa en una pizarra de este modo:

{% img center /blog/images/2014/01/n32.png %}

El desafío de los cuatro cuatros aparece en un libro llamado “El Hombre que Calculaba”, de Malba Tahan, seudónimo del profesor brasileño Julio César de Mello y Souza. Es una novela que contiene una serie de problemas y curiosidades matemáticas bastante entretenidas. 

El problema consiste en encontrar la forma matemática para representar cualquier número usando para ello sólo cuatro cuatros, y a lo sumo algunos símbolos no literales para operaciones básicas. 

En nuestro desafío los símbolos adicionales serán: 

> +,-,/,* : para las cuatro operaciones aritméticas básicas

> r(4): para la raíz cuadrada de 4 (es decir 2)

> 4 ^ 4: para representar 4 elevado a cuatro (256).

> 4!: para representar a 4 factorial ó 24.

> .4: para representar a 0.4, o 4/10.

El desafío consiste en escribir un programa que sea capaz de  generar los números del 1 al 100 como combinación de cuatro cuatros y los símbolos mencionados.

Hay números que tienen más de una representación, basta con entregar la primera que se encuentre.

La salida debe ser similar a la escrita arriba, es decir:

0 = 4/4 - 4/4

1 = 44/44

2 = 4/4 + 4/4

3 = r(4) + r(4) - 4/4

…

Reglas:

Ganará el que entregue el algoritmo más compacto, y eficiente.
El programa no debe tomar más de 1 minuto de cpu para ejecutar.

Los criterios para definir el ganador son: menor tiempo de ejecución, luego  el tamaño del programa (en lineas de código) y por último las [métricas de Halmstead](http://www.programando.org/blog/2013/01/desafio-enero-las-metricas-de-halstead/).

Se trata de "generar", no de "imprimir" o "emitir" el resultado. El desafío busca encontrar el algoritmo más astuto que genere estas combinaciones de números 4, no sirve tomar una tabla de resultados previos e imprimirla, ni nada por el estilo.

Tienen un mes para entregar sus respuestas. 

El premio al ganador será una giftcard Amazon de 30 dólares. 

Si alguien generaliza el programa para generar números más allá del 100 tendrá un premio especial adicional.

Se debe usar alguno de los siguientes lenguajes de programación:  C, C++, Java, Javascript, Python y Haskell. No se aceptan entregas en otros lenguajes.

Los programas deben estar disponibles en un repositorio GitHub o Bitbucket.

 
