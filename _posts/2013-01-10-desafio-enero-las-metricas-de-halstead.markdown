---
layout: post
title: "desafío enero - las métricas de Halstead"
date: 2013-01-10 21:19
comments: true
categories:
- Coding Dojo
- Desafíos
tags:
- Halstead
- Complejidad
- Métricas
---

Ha llegado la hora de empezar los desafíos de este año. La meta es prepararse para el gran desafío de octubre, que tendrá un premio especial y que llamaremos el Premio DMW ([como homenaje póstumo a nuestro colega Daniel Molina Wegener](http://www.programando.org/blog/2012/11/adios-daniel/)).

Este primer desafío es bien especial, porque nos servirá para construir la herramienta que nos permitirá medir a los futuros participantes.

Se trata de las métricas de Halstead.

<!-- more -->

{% img right /blog/images/2013/01/halstead.jpg %}
Las métricas de Complejidad de Halstead fueron desarrolladas por Maurice Halstead como un medio de determinar la complejidad cuantitativa  directamente de los operadores y operandos usados en el código fuente de un módulo.

Para esto, Halstead definió los siguientes números:

* el número de operadores (únicos) distintos (n1) en el programa fuente
* el número de operandos (únicos) distintos (n2) en el código fuente
* el número total de operadores en un archivo de código fuente (N1)
* el número total de operandos en un archivo de código fuente (N2)

Para calcular estos números tomamos todos los tokens distintos de un programa fuente, calculando la frecuencia de cada uno.

Para esto clasificaremos los tokens de un programa en:

* Operandos:  Pueden ser los identificadores que no sean palabras reservadas, las constantes numéricas, los identificadores de tipos (bool, string, char, int, long, etc), los caracteres y strings constantes.
* Operadores: Que pueden ser todas las palabras reservadas (if, do, while, class, etc), los calificadores (como const, static) las palabras reservadas, y los operadores en expresiones (+, -, <>, ==, !=, <=, >>, etc).

Dados los operadores, y los operandos, se definen las siguientes métricas:

1. Largo del Programa: N = N1 + N2
2. Tamaño del Vocabulario del programa: n = n1 + n2
3. Volumen del Programa: V = N * log2(n)
4. Nivel de Dificultad: D = (n1/2) * (N2/n2)
5. Nivel de Programa: L = 1/D
6. Esfuerzo de Implementación: E = V*D
7. Tiempo de Entendimiento: T = E/18 (18 es el numero que Halstead encontró experimentalmente para expresar esta magnitud en segundos)

## Desafío Enero 2013
El desafío es el siguiente:

Dado un archivo con una lista de operadores (uno por linea), y un programa fuente (en cualquier lenguaje de programación), se debe crear un programa que entregue los valores N, n, V, D, L, E y T. Si un token no está en la lista de operadores se considera un operando. Los strings y números se deben considerar operandos. Ignoraremos todo tipo de parentesis, y signos de puntuación (coma, punto y coma, dos puntos, punto, signo de interrogación,etc), a menos que aparezcan en la lista de operadores.

Ejemplo:

Dado el archivo siguiente con la lista de operadores:

{% blockquote %}
 input
 print
 if
 else
 then
 while
 <=
{% endblockquote %}

Y dado el siguiente programa fuente:

{% codeblock %}
 input ("ingrese un valor:", a)
 if a <= 100 then
    print ("ganaste")
 else
     print ("perdiste")
{% endcodeblock %}

El resultado será:

{% blockquote %}
n1 = 6 (input, if, <=, then print, else)
N1 = 7 (input, if, <=, then, print, else, print)
n2 = 5 ("ingrese un valor:", a, 100, "ganaste", "perdiste")
N2 = 6 ("ingrese un valor:", a, a, 100, "ganaste", "perdiste")

N = 13
n = 11
V = 44,97
L = 0,28
D = 3,6
E = 161,89
T = 8,9
{% endblockquote %}

## Reglas del concurso

Ganará el programa que tenga el menor valor de la métrica E (menor esfuerzo de implementación) o equivalentemente el que tenga el valor T menor (menor tiempo de entendimiento). Si el programa tiene más de un archivo fuente se calculará a partir de la concatenación de todos los archivos. 

Para determinar E, publicaré alrededor del 31 de enero una lista de operadores que tratarán de abarcar una gran cantidad de lenguajes de programación comunes. Además publicaré el programa que usaré para medir E el mismo día de los resultados, de modo que podrán alegar el resultado (en caso que mi programa  tenga un bug, por ejempo) antes de entregar el premio (5 días después). 

En principio, pueden participar hasta el 4 de febrero, pero puede que de unos días más, después de todo es probable que estén de vacaciones, veremos de acuerdo al interés en participar.

Los programas que participen _deben estar en un repositorio en [GitHub](https://github.com/) o [BitBucket](https://bitbucket.org/)_, para participar deben dejar su respuesta como un comentario a este post apuntando a la url del repositorio en uno de estos dos sitios (no se aceptarán respuestas en otros tipo de servicio como pastebin, u otros).

Pueden escribir el desafío en el lenguaje que quieran, siempre que el fuente quede disponible en [GitHub](https://github.com/) o [BitBucket](https://bitbucket.org/).

El premio será una Giftcard de Amazon de 30 dólares, y sólo se premiará si hay al menos 8 participantes, así que inviten a colegas, amigos, a participar.






