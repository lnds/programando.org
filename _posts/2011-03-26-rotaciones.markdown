---
comments: true
date: 2011-03-26 10:30:47
layout: post
slug: rotaciones
title: Rotaciones
wordpress_id: 47
categories:
- Sin categoría
tags:
- algoritmos
- avanzado
- C++
- medio
- rotaciones
---

Cada cierto tiempo voy a escribir un articulo más avanzado, orientado a mis amigos programadores profesionales, donde introduciremos un problema de mayor complejidad, estos quedarán almacenados bajo la categoría de **[Técnicas Avanzadas](http://www.programando.org/blog/category/tecnicas-avanzadas/)**.

Este artículo lo escribí en 2006 en una versión que no prosperó de programando.org, ahora lo reciclé, aproveché de corregir algunos errores, reclasificarlo, y además le incorporé un par de ejercicios.

Un problema simple de formular, pero no tan simple de resolver, es rotar un arreglo A de N elementos en i posiciones hacia la izquierda, en un tiempo proporcional a N, y usando pocos bytes extra. Este problema aparece en muchas aplicaciones, por ejemplo, es usado para mover lineas de texto en muchos editores.

En otras palabras, si tenemos el vector "abcdefgh" (N=8) y queremos rotarlo en 3 posiciones a la izquierda (i=3), entonces la idea es crear una función rotar tal que rotar("abcdefgh", 8, 3) = "defghabc".


## Una primera solución


Una manera es copiar los primeros i elementos en un arreglo temporal, desplazar los elementos del arreglo A hacia la izquierda, y luego copiar los arreglos desde el arreglo temporal. Puedes intentar programarlo. El problema es que tenemos que usar un arreglo de i elementos adicionales. Pero hay una solución muy elegante, que no requiere espacio adicional, y cuyo tiempo de ejecución es proporcional a N.


## El poder de las primitivas


Este problema aparece en el clásico libro [Programming Pearls (2nd Edition)](http://www.amazon.com/gp/product/0201657880?ie=UTF8&tag=lanaturaledel-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0201657880)![](http://www.assoc-amazon.com/e/ir?t=lanaturaledel-20&l=as2&o=1&a=0201657880), de Jon Bentley, y cuando lo ví lo encontré asombroso.

Primero, vamos a definir una primitiva **reverse**, esta función toma un arreglo y lo invierte, por ejemplo, el arreglo {a,b,c,d}, puede ser invertido con el operador reverse (r) de la siguiente manera {a,b,c,d}r = {d,c,b,a}. Supongamos que tenemos un arreglo A=ab, donde a corresponde a la parte izquierda del arreglo, y que contiene los primero i elementos, y b es el resto del arreglo. Entonces comenzando con ab, primero invertimos a obtieniendo arb, luego invertimos b, obteniendo arbr, y el paso final es invertir todo (arbr)r.

En una notación más adecuada para un programador, definimos la función reverse para un arreglo de la siguiente manera:


**reverse**(A, i, j): invierte el segmento desde el indice i al j del arreglo A


Entonces el algoritmo para rotar un arreglo A, de tamaño N, en i posiciones se puede escribir así:


**rotar**(A, n, i) : **reverse**(A, 0, i-1); **reverse**(A, i, n-1); **reverse**(A, 0, n-1);


Vamos a escribir el codigo en C++, para que puedan probarlo:




    
    template <class T>
    rotate(T A[], int n, int i)
    {
       reverse(A, 0, i-1);
       reverse(A, i, n-1);
       reverse(A, 0, n-1);
    }
    
    
    /// La funcion reverse es la siguiente:
    template <class T>
    void reverse(T A[], int i, int j)
    {
    	if (i == j)
    		return;
    	while (i < j) {
    		T temp = A[i];
    		A[i] = A[j];
    		A[j] = temp;
    		i++;
    		j--;
    	}
    }


Ese es el poder de las primitivas. Como pueden ver el algoritmo no consume memoria adicional, y toma un tiempo proporcional al tamaño del arreglo.

El código fuente completo lo pueden bajar desde mi repositorio en GitHub: [https://github.com/lnds/programando.org](https://github.com/lnds/programando.org).

Ejercicios:

1. ¿Cuantos accesos al arreglo se ejecutan con este algoritmo? (en función de N e i).

2. Hay otra forma más eficiente de hacer rotaciones, ¿puedes escribir ese algoritmo?

Nota: Este post fue escrito originalmente en 2006 en una versión fallida de este blog. Al volver a publicar programando.org la transcripción tenía varios errores (principalmente porque los signos <class> era interpretados como etiquetas html), además tenía un error en la función reverse que producía un loop infinito (gracias a Ubaldo Taladriz @utaladriz) por notarlos)  yo ya había detectado  algunos problemas y por eso fue retirado por algunos días del blog, mis disculpas a los lectores por ese inconveniente.
