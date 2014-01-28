---
comments: true
date: 2011-03-21 13:53:41
layout: post
slug: comparaciones-y-expresiones-logicas
title: Comparaciones y expresiones lógicas
wordpress_id: 82
categories:
- Aprendiendo a programar
tags:
- curso
- expresiones
- expresiones booleanas
- lógica
- programación
- python
---

Bien, espero que hayan estado experimentando con IDLE, el ambiente interactivo de Python. 
Volvamos a él y hagamos algunos experimentos.


    
    
    >>> n = 10
    >>> n
    10
    >>> n > 0
    True
    >>> n < 0
    False
    



La primera expresión es familiar, corresponde a la asignación de una variable, en este caso n, con el valor 10.
La segunda expresión nos permite ver el valor de n. Luego comparamo n con 0, es decir, queremos ver si n es mayor que 0, lo que es cierto, python responde con el valor True (verdadero en inglés). Por el contrario, al escribir n < 0 obtenemos el valor False (falso en inglés).

Con esto podemos practicar expresiones lógicas, como la comparación de números. Veamos más ejemplos:


    
    
    >>> a = 10
    >>> b = 20
    >>> a > b
    False
    >>> a < b
    True
    >>> a <= 10
    True
    >>> a >= 10
    True
    >>> a+b <= 30
    True
    >>> a <= 30 - b
    True
    >>> a -b >= 30 
    False
    >>> a  ==  b
    False
    >>> a  ==  10
    True
    >>> b  ==  10
    True
    >>> a  !=  b
    True
    



Notarán que podemos tener expresiones a ambos lados del operador de comparación. En los ejercicios de arriba hemos introducido dos operadores más: '==' y '!='. El operador '==' es comparación de igualdad, 'a == b' se lee 'a es igual a b'. A diferencia de las matemática usamos el símbolo == porque ya usamos el signo = para asignar variables. El símbolo != es el de desigualdad, 'a != b' se lee 'a es distinto a b'.

Las expresiones de este tipo se conocen como expresiones lógicas, o expresiones booleanas. Las expresiones lógicas sólo tienen dos valores: verdadero (True) o falso (False). Al igual que las expresiones aritméticas las podemos almacenar en variables:


    
    
    >>> a = 10
    >>> b = 20
    >>> c = a > b
    >>> c
    False
    



Esta posibilidad de almacenar valores booleanos en variables es poderosa pues nos habilita para poder hacer cosas más complejas que iremos aprendiendo en las próximas lecciones, por ahora sigamos experimentando con nuestras variables. Prueba lo siguiente:


    
    
    >>> a = 10
    >>> b = 20
    >>> c = a > b
    >>> d = a < b
    >>> c, d
    (False, True)
    >>> not c
    True
    >>> not d
    False
    



El operador 'not' niega el valor de una variable booleana, si la variable x es True entonces 'not x' devolverá False.

Volvamos a las comparaciones:


    
    
    >>> i = 10
    >>> j = 20
    >>> k = 30
    >>> i < j < k
    True
    



En python podemos escribir una cadena de comparaciones como la de arriba sin ningún problema, en otros lenguajes esto no es posible y la expresión anterior se debe escribir de la siguiente forma:



    
    
    >>> i = 10
    >>> j = 20
    >>> k = 30
    >>> i < j and j < k
    True
    >>> (i < j) and (j < k)
    True
    



Esto es equivalente, el operador 'and' (y) nos permite unir dos expresiones lógicas. 

Fíjense en esto:

    
    
    >>> llueve = True
    >>> esta_mojado = True
    >>> llueve and esta_mojado
    True
    



Esta es la forma en que escribimos en python la frase "llueve y está mojado".




> Algo que no mencioné anteriormente es que los nombres de las variables deben seguir ciertas reglas, los nombres de las variables deben contener una combinación de letras  ('a'..'z' o 'A'..'Z'), el signo '_' y los dígitos '0' al '9', pero no deben comenzar con un dígito. 

Ejemplos de variables: suma, monto, neto, llueve, esta_mojado, ya_no_llueve, matadero5, _nombre.
Estos no son nombres de variables válidos: 60minutos, 1hora, 0_variable.

Python considera como distintas a las variables dependiendo si se escriben con mayúsculas o minúsculas. Es decir, la variable A es distinta a la variable a.




Otro operador boolean es or, veamos su uso:


    
    
    >>> esta_despejado = True
    >>> esta_lloviendo = False
    >>> esta_despejando or esta_lloviendo
    True
    



Tanto and como or cumplen ciertas reglas definidas en algo que se llama el álgebra de bool, algo que estudiaremos  más adelante (no se asusten, no es tan terrible a pesar de que se llama algebra).


Una cosa interesante es que el valor True se comporta como el valor 1, y el valor False se comporta como el valor 0.

Es decir, podemos usarlos en expresiones aritméticas.


    
    
    >>> a = 2
    >>> b = 4
    >>> c = a < b
    >>> d = a > b
    >>> (a+b) * c + (a-b) * d
    6
    



En este caso, c == True y d == False, (a+b) == 6 y 6 * True == 6 * 1 == 6.
Por otro lado, d == False y (a-b) == -2 y -2 * False == -2 * 0 == 0.


Ahora vienen los ejercicios, hazlos  y experimenta que pasa con todos ellos.

Ejercicios:

En los siguientes ejercicios coloqué las instrucciones que debes ingresar en la consola de IDLE, debajo de cada una puse el símbolo ????? para indicar que tú debes averiguar cuál es el resultado de esa operación.

1. ¿Qué pasa cuando ingresas las siguientes expresiones en IDLE?:

    
    
    >>> 2 + 3 < 2 * 3 or 6 < 10
    ?????
    >>> (2+3 < 2) * (3 or 6 < 10)
    ?????
    >>> a = 2 < 4
    ?????
    >>> b = 2 >= 4
    ?????
    >>> a * b
    ?????
    



2. Prueba todas las combinaciones que siguen y anótalas en una tabla:

    
    
    >>> True and True
    ?????
    >>> True and False
    ?????
    >>> False and True
    ?????
    >>> False and False
    ?????
    




3. Prueba todas las combinaciones que siguen y anótalas en una tabla:

    
    
    >>> True or True
    ?????
    >>> True or False
    ?????
    >>> False or True
    ??????
    >>> False or False
    ?????
    



4. ¿Qué pasa si hace False < True o True >= False?

5. ¿Qué pasa cuando comparas False con distintos números? ¿y cuando comparas True con distintos números?

6. En la lección anterior aprendimos que hay números enteros y números reales. Los números enteros en python pertenecen a una clase de números llamada **int**, los números reales pertenecen a otra clase de números llamada **float**. True y False pertenecen a la clase **bool**. Para determinar la clase de un número o variable se usa la función **type()**, úsala en  los siguientes experimentos:


    
    
    >>> type(10)
    ?????
    >>> type(10.0)
    ?????
    >>> type(False)
    ?????
    >>> type(True)
    ?????
    



El resultado de la función type(expresión) es conocida como el tipo de la expresión.

7. Prueba estas expresiones

    
    
    >>> type(10) == type(10.0)
    ?????
    >>> type(10+20) == type(10)
    ?????
    >>> type(10+20) == type(10<20)
    ?????
    



8. Una forma alternativa de probar el tipo de una expresión es usando el operador 'is'. Prueba estas expresiones:


    
    
    >>> type(10) is int
    ?????
    >>> type(10.0) is float
    ?????
    >>> type(10<20) is bool
    ?????
    >>> type(False) is bool
    ?????
    >>> type(False) is int
    ?????
    



