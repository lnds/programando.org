---
comments: true
date: 2011-03-22 15:54:27
layout: post
slug: cadenas-de-caracteres
title: Cadenas de caracteres
wordpress_id: 96
categories:
- Aprendiendo a programar
tags:
- cadenas
- python
- strings
- texto
---

Los 140 caracteres que usas para escribir un tweet, el texto que escribes en tu estado en facebook, un mensaje de texto enviado desde tu teléfono móvil, un correo elestrónico, el texto de este post, una novela, una entrada en wikipedia, este mismo párrafo, todos esos son cadenas de caracteres. A una cadena de texto los programadores las llamamos **string**. Cada uno de los elementos de la cadena es un carácter.

Considera la cadena "PYTHON", contiene 6 caracteres. El primer carácter es la P, el último carácter es la N. En python los caracteres se escriben entre comillas, para diferenciarlos de las variables y los números.
Vamos a IDLE:


    
    
    >>> 'hola'
    'hola'
    >>> "mundo"
    'mundo'
    >>> 'hola' "mundo"
    'holamundo'
    



Cuando colocamos dos strings uno junto a otros python los **concatena**, es decir, junta ambos textos para formar un único string. Fíjense que aunque hay un espacio entre medio de 'hola' y "mundo", python sólo considera lo que está entre comillas.

Notarán que se puede usar indistintamente las comillas dobles ("") o las comillas simples ('').
Esta posibilidad sirve mucho cuando uno es irlandés ;), veamos:


    
    
    >>> 'hello Dolores O'Riordan'
    SyntaxError: invalid syntax (<interactive input>, line 1)
    >>> "hello Dolores O'Riordan"
     "hello Dolores O'Riordan"
    >>> 'La princesa dijo "¡No!"'
     'La princesa dijo "¡No!"'
    



Pero también puedes escribir las comillas dentro de un string  de otra forma:


    
    
    >>> "hello Dolores O\'Riordan"
     "hello Dolores O'Riordan"
    >>> "La princesa dijo \"¡No!\""
    'La princesa dijo "¡No!"'
    



El símbolo '\' (backslash) se conoce como carácter de escape, y nos permite escribir algunos caracteres no visibles.  Ya volveremos a esto más adelante.

Los strings pueden ser asignados a variables, y tienen sus propios tipos de expresiones:


    
    
    >>> cantante = "Dolores O'Riordan"
    >>> grupo  = "Cranberries"
    >>> pais   = "Irlanda"
    >>> cantante + '  es la vocalista del grupo ' +  grupo + ' y vienen de '+pais
    "Dolores O'Riordan  es la vocalista del grupo Cranberries y vienen de Irlanda"
    



Cuando aplicamos el operador '+' a los strings hablamos de la operación de concatenación.

Otra operación posible con los strings es la repetición:


    
    
    >>> 'zombie ' + 'eh '*3
    'zombie eh eh eh '
    



Al partir hablamos de que 'P' era el primer carácter del string 'PYTHON'. Como es una cadena de caracteres podemos acceder a cada uno de sus 'eslabones' usando el operador de indexación [], del siguiente modo:


    
    
    >>> 'PYTHON'[0]
    'P'
    >>> cantante[0]
    'D'
    



Del mismo modo podemos acceder a segmentos del string (**substrings**) usando el operador [] del siguiente modo:


    
    
    >>> 'PYTHON'[0:3]
    'PYT'
    >>> cantante[2:4]
    'lo'
    



Hay que entender que el operador indice nos permite acceder al elemento cuya posición es la que indicamos entre paréntesis, el índice parte desde 0, así que [0] accede al primer elemento del string, [1] al segundo, y así.
Cuando entregamos un rango [a:b], solicitamos que se acceda al substring que parte en la posición a hasta antes de la posición b, por eso al hacer cantante[2:4] obtenemos el tercer y cuarto caracteres del string cantante (para que se entienda, he encerrado entre [] los caracteres obtenidos: "Do**[lo]**res O'Riordan").


Existe un string especial, es el **string vacío**, que no tienen caracteres, se designa colocando dos comillas juntas: "" o ''. Veamos si podemos "acumular strings":


    
    
    >>> cancion = ""
    >>> cancion += "When the violence "
    >>> cancion += "causes silence,  "
    >>> cancion += "we must be mistaken  "
    >>> cancion
    



Bien, todo esto es muy interesante, pero  es tu turno de explorar. La mejor forma de aprender a programar es practicando, así que haz los siguientes ejercicios:

1. Escribe distintos strings y asígnalos a variables, luego concaténalos entre sí, prueba acumulando strings. Puedes partir con estos ejemplos:

    
    
    >>> estrofa = ""When the violence causes silence "
    >>> estribillo = ""What's in your head, in your head "
    >>> estribillo += "zombie "*4
    >>> cancion = estrofa + estribillo
    



2. Prueba expresiones de comparación entre strings, por ejemplo:

    
    
    >>> a = 'PYTHON'
    >>> b = 'python'
    >>> a == b
    ?????
    >>> a != b
    ?????
    >>> a != b
    ?????
    >>> a <= b
    ???
    



3. ¿Qué pasa si concatenas strings con números?


    
    
    >>> 'PYTHON' + 3
    ?????
    >>> 'PYTHON' + 3.1415
    ?????
    



Luego prueba con lo siguiente:


    
    
    >>> 'PYTHON' + str(3)
    ?????
    >>> 'PYTHON' + str(3.1415)
    ?????
    



¿Qué puedes concluir que hace la función str()?

4. ¿Que ocurre al ejecutar estas instrucciones?


    
    
    >>> "3" + 3
    ?????
    >>>int("3")+3
    ?????
    >>>"3"+str(3)
    ?????
    



5. ¿Qué pasa cuando usas indices negativos? Ejemplo: 'PYTHON'[-1]. Prueba omitiendo parte del rango, por ejemplo, 'PYTHON'[3:] o 'PYTHON'[:3]


