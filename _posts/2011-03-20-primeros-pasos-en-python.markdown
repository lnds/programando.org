---
comments: true
date: 2011-03-20 17:00:35
layout: post
slug: primeros-pasos-en-python
title: Primeros pasos en Python
wordpress_id: 66
categories:
- Aprendiendo a programar
tags:
- acumuladores
- curso
- operadores
- principios básicos
- python
- variables
---

Vamos a empezar a usar python como nuestro entorno de programación.
Python provee un ambiente interactivo llamdo IDLE y es el que vamos a usar en nuestros primeros pasos.

Yo usaré XUbuntu (una variante de Ubuntu Linux) y Windows 7 como mis sistemas operativos para este curso. En ambos voy a instalar Python 3.

En XUbuntu (y Ubuntu también) puedes instalar Python IDLE usando el [Ubuntu Software Center](http://es.wikipedia.org/wiki/Centro_de_software_de_Ubuntu). En Windows descargas el instalador de Python 3 en [www.python.org/download](http://www.python.org/download/).

Se puede invocar IDLE directamente desde el menú del sistema operativo.

En Ubuntu:

[caption id="attachment_67" align="aligncenter" width="300" caption="Invocando IDLE en Ubuntu (click para agrandar)"][![](http://www.programando.org/blog/wp-content/uploads/2011/03/IDLE-3-Linux-300x178.png)](http://www.programando.org/blog/wp-content/uploads/2011/03/IDLE-3-Linux.png)[/caption]

En Windows 7:

[caption id="attachment_68" align="aligncenter" width="300" caption="Invocando IDLE Windows 7 (click para agrandar)"][![](http://www.programando.org/blog/wp-content/uploads/2011/03/IDLE-3-Win7-300x178.png)](http://www.programando.org/blog/wp-content/uploads/2011/03/IDLE-3-Win7.png)[/caption]

Bien, IDLE provee una **consola **en blanco, en las primera linea nos muestra información sobre la versión de python disponible.

En mi ambiente linux  sale lo siguiente:

Python 3.1.2 (release31-maint, Sep 17 2010, 20:34:23) 

    
    [GCC 4.4.5] on linux2
    Type "copyright", "credits" or "license()" for more information.
    ==== No Subprocess ====
    >>>


En mi ambiente windows sale:

    
    Python 3.2 (r32:88445, Feb 20 2011, 21:30:00) [MSC v.1500 64 bit (AMD64)] on win32
    Type "copyright", "credits" or "license()" for more information.
    >>>


El símbolo >>> es el **_prompt_,** y nos indica que está esperando que ejecutemos una instrucción.

Python como calculadora.

Ahora vamos a usar este ambiente IDLE como una calculadora.

![](http://www.programando.org/blog/wp-content/uploads/2011/03/799px-Enter-150x150.png)

Escribe 2 + 2 después del prompt y luego presiona la tecla enter (la que aparece destacada en la imagen).


>>> 2+2




Si todo sale bien tu pantalla se verá así:




>>> 2 + 2
4
>>>


IDLE ejecuta la **expresión** que viene después del prompt y entrega el resultado en la linea siguiente. Si recuerdas al principio decíamos que un programa procesa una entrada (INPUT) para producir una salida (OUTPUT), pues bien, IDLE es un programa que procesa las entradas que corresponden a los comandos que ingresamos después del prompt (>>>) y entrega la salida a continuación, que en este caso es el resultado de convertir esos comandos a **expresiones python**.

Probemos otras expresiones:


    
    
    >>> 2 * 3
    6
    >>> 2*3+4
    10
    >>> (2*3)+4
    10
    >>> 2*(3+4)
    14
    








A estas alturas ya debería haber descubierto que el signo '*' (asterisco) corresponde a la multiplicación, a diferencia de la notación matemática en que se usa una x o un punto ('.').

La razón por la que no se usa el punto para multiplicar es simple, el punto se usa para designar los decimales:


    
    
    >>> 2 * 3.1415
    6.283
    >>> 2000 * 3.1415
    6283.0
    



Fíjense 2 cosas, los números por sobre el mil no se separan con ningún caracter especial (como el punto, o la coma), es decir, "un millón quinientos mil cuatrocientos treinta y dos con veintitres centésimos" se escribe "1500432.23".

La segunda cosa es más sutil, pero más importante, cuando multiplicamos por un número con decimales el resultado aparece siempre expresado cómo un numero con decimales (es decir, lleva el punto '.').
Veamos:


    
    
    >>> 2 * 3
    6
    >>> 2 * 3.0
    6.0
    



En el primer caso tenemos dos **números enteros** y el resultado es otro número entero. En el segundo caso tenemos un número entero multiplicado por un **número real** y el resultado es un número real.

Veamos la división:


    
    
    >>> 2 / 3
    0.6666666666666666
    >>> 12 / 4
    3.0
    



Fíjense en este caso, el resultado de 2/3 es un número real y aparece como tal, lo que está bien, pero en el caso de 12 / 4, tenemos 2 números enteros y sabemos que el resultado es un número entero, pero python entrega cómo resultado un número real. La razón es que python tiene 2 tipos de divisiones, la división real que se expresa con el símbolo '/' y la división entera que se expresa con el símbolo '//'.


    
    
    >>> 2 // 3
    0
    >>> 12 // 4
    3
    



La división entera trunca el resultado "redondeando hacia abajo". Hay otros detalles con la división, pero los vamos a dejar para que los averigüen en los ejercicios.

A los símbolos +, /, // y * los llamamos **operadores**.

[![](http://www.programando.org/blog/wp-content/uploads/2011/03/calculadora.jpg)](http://www.programando.org/blog/wp-content/uploads/2011/03/calculadora.jpg)Toda calculadora decente tiene una o más teclas con una  M, se le llama  la memoria, y la usamos para almacenar resultados intermedios cuando hacemos cálculos más complicados.
Los lenguajes de programación tienen esta facilidad, pero es mucho mejor, porque tienen la capacidad de crear todas las "memorias" que necesitemos.

Para almacenar valores tenemos lo que llamamos variables.

Veamos el siguiente ejemplo.


    
    
    >>> pi = 3.1415
    >>> 2 * pi
    6.283
    >>> 3 * pi
    9.4245
    >>> pi + pi
    6.283
    >>> pi - pi
    0.0
    >>> pi
    3.1415
    




La expresión pi = 3.1415 corresponde a lo que llamamos una **asignación**. Con esto estamos creando una variable que se llama pi cuyo valor será 3.1415. Una vez establecida esta variable la podemos usar una y otra vez en nuestra sesión en IDLE. A diferencia de algunas calculadoras la variable se pierde al salir de IDLE. Fíjense que cuando se **declara una variable** python no responde nada después del prompt.

**Acumuladores**

Las calculadoras tienen unas teclas marcadas M+ ó M-. M+ suma el valor ingresado a lo que ya hay en memoria, en el caso de M- se resta de lo que hay en memoria.

Podemos usar las variables para hacer esto, podemos crear una variable donde vamos acumulando los resultados.



    
    
    >>> suma = 0
    >>> suma += 10
    >>> suma += pi
    >>> suma += pi * 2
    >>> suma
    19.424500000000002
    



Fíjense que después de declarar la variable _suma_ usamos el símbolo '+=', esto es equivalente a apretar la tecla M+ en nuestra calculadora, hay otra manera de hacer lo mismo:


    
    
    >>> suma = 0
    >>> suma = suma + 10
    >>> suma = suma + pi
    >>> suma = suma + pi * 2
    >>> suma
    19.424500000000002
    



Pero el símbolo += es más comodo ;).

Hagamos restas:


    
    
    >>> saldo = 1000
    >>> saldo = saldo - 10
    >>> saldo -= 50
    >>> saldo
    940
    



Ahora recordarás que existen los números negativos. Estos se denotan igual que en matemáticas, colocando un guión delante del número:


    
    
    >>> -4
    -4
    >>> -saldo
    -940
    



Como ves, una variable puede ser usada donde colocas un número, en este caso -saldo es lo mismo que -940 (que es el último valor que tenía la variable saldo).

Cuando usamos estas variables para sumar (o restar) varios valores de una serie las llamamos acumuladores, saldo y suma son acumuladores.

Las calculadoras tienen una tecla MC que limpia el valor de la memoria.

En python podemos dejar la variable en 0, simplemente asignando un 0, pero también podemos eliminar totalmente la variable usando la instrucción del:


    
    
    >>> saldo
    940
    >>> saldo = 0
    >>> saldo
    0
    >>> del saldo
    >>>  saldo
    
    Traceback (most recent call last):
      File "<pyshell#58>", line 1, in <module>
        saldo
    NameError: name 'saldo' is not defined
    



Lo que hace la instrucción del es eliminar totalmente una variable, por esto que al tratar de visualizar su valor genera un error en python.

Suficiente por hoy, con esto hay bastante para practicar. Has aprendido sobre las expresiones en python, como usar IDLE como una calculadora interactiva, como declarar variables y aprendimos que hay una clase especial de variables que se llaman acumuladores.

Ejercicios:

1. Averigua que pasa cuando usas el operador de división entera (//) con números reales (por ejemplo 1.0 // 3.0).
2. Calcula el promedio de 3 ramos o materias (por ejemplo, matemáticas, lenguaje e historia) en 3 acumuladores distintos, luego calcula tu promedio general.
3. Si tienes acceso a python 2 prueba los ejemplos de este capítulo e investiga por qué hay diferencias.
4. Prueba el operador ** (por ejemplo 2 ** 3) y averigua qué hace.
5. Prueba el operador % (por ejemplo, 12 % 10, o 23 % 15) y averigua para que sirve.
6. Así como existen los operadores += y -= que usamos en nuestros acumuladores existen los operadores *=, /=, **=, //=. Pruébalos.

