---
comments: true
date: 2012-10-09 23:56:44
layout: post
slug: desafio-octubre-codigo-spaghetti
title: 'Desafío Octubre: Código Spaghetti'
wordpress_id: 457
categories:
- Sin categoría
tags:
- Fortran IV
- interpretes
---

Después de una larga pausa volvemos con los desafíos, esta vez vamos a jugar con Fortran IV :).

Hay lenguages antiguos, como Fortran IV que usan sentencias goto condicionales e incondicionales, en vez de estructuras como if y while. 

Además en Fortran IV cada sentencia ocupa una linea de código. Las primeras 5 posiciones están reservadas para colocar una etiqueta numérica, que corresponde a un número entero. La posición 6 está reservada para una marca de continuación, pero no la vamos a considerar en este ejercicio, la dejaremos en blanco. Por lo tanto las sentencias propiamente tal empiezan a partir de las posiciones 7 en adelante. 

Una sentencia goto se ve así:

goto etiqueta

y una sentencia condicional se escribe así:

if (expresion)goto etiqueta


Donde "etiqueta" es un número.

Hay otras sentencias, pero sólo los goto condicionales empiezan con "if(" y finalizan con ")goto etiqueta". En Fortran IV los espacios se ignoran. Consideraremos que la sentencia "stop" sólo aparece al final de un programa, y detiene la ejecución del programa.

Si les interesan conocer las posibles operaciones de un programa Fortran IV consideren las descritas en [este enlace](http://www.math-cs.gordon.edu/courses/cps323/FORTRAN/fortran.html).

**Desafío**
El desafío es determinar si dos programas Fortran IV son equivalentes. Diremos que dos programas son equivalentes si, para todas las entradas posibles, ejecutan exactamente la misma secuencia de sentencias, ignorando los gotos incondicionales y las etiquetas. Diremos que dos secuencias de sentencias son las mismas si son textualmente identicas después de eliminar espacios y etiquetas.
Asuman que cada goto condicional se tomará en algunos casos y no en otros. Los gotos incondicionales se ejecutan siempre. 

Los siguientes programas de ejemplo son equivalentes:

**Programa 1:**


**Programa 2:**


Se debe crear un programa que reciba como entradas dos programas Fortran IV y escriba en pantalla: "los programas son equivalentes" o "los programas no son equivalentes".

El plazo para este desafío es el 30 de octubre, los programas deben ser capaces de procesar programas de hasta 1.000 lineas.

Ganará el programa  más rápido y más sencillo (menor cantidad de lineas de código) que resuelva este desafío. Si hay suficientes participantes (más de 6) habrá premio :)

"May the odds be ever in your favor"
