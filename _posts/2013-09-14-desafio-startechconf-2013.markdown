---
layout: post
title: "Desafío StarTechConf 2013"
date: 2013-09-14 12:48
comments: true
categories: 
---

En esta oportunidad les presento dos desafíos que hemos preparado en conjunto con nuestros amigos de StartechConf 2013. 

Esta vez queremos desafiar los conocimientos profundos que tengan de css y javascript. Pero, lo mejor es que estos desafíos tienen como premio una entrada a la StarTechConf 2013 cada uno. Esta conferencia se realizará en Santiago de Chile entre el 25 y 26 de octubre de este año.

{% img center /blog/images/2013/09/logo_startechconf_2013.png %}

<!-- more -->

Así que entremos en materia.

**Desafío Uno (CSS): Yin Yang**

El taijitu, o símbolo tradicional del Tao es la representación tradicional del Taiji, o la dualidad del Yin y el Yang, que representan los dos principios opuestos, pero complementarios de esta filosofía oriental, por ejemplo, la luz y la oscuridad, lo femenino y lo masculino, el frio y calor, el dolor y la felicidad, el frontend y backend, el dev y el ops, etc. ;-)

{% img center http://www.akarru.org/blog/wp-content/uploads/2011/09/yin-yang.png 320 %}

El objetivo de este desafío es **¡dibujar el diagrama del Yin Yang usando solamente CSS!** 

Ganará aquel que presente el código más breve que dibuje este famoso símbolo.

Deben colocar su solución en algún repositorio público, com o GitHub, Bitbucket, JSFIddle, o Pastebin. Lo importante es que dejen la url con su solución como un comentario a este post.

El premio de este desafío es una entrada a la StartechConf 2013.

**Desafío 2: JSONDrawing**

Este desafío debe ser resuelto usando JavaScript. El objetivo es construir un lenguaje para dibujar, en el espíritu de  PostScript, XFig y o SVG.

En este caso las instrucciones de dibujo se expresan como un objeto JSON, y deben ser interpretadas por vuestro código javascript, reflejándolo en un dibujo en el canvas de una página html. Las instrucciones deben ser ejecutadas en el orden en que vienen expresada en el objeto json.

Por ejemplo, un dibujo en JSONDrawing se expresaría así:

[
    {
        "background": "white"
		},
    {
	      "pen": "red",
        "fill": "red",
        "circle": [100, 100, 25]
    },
    {
        "fill": "none",
        "line": [100, 100, 200, 200],
        "pen": "blue"
    },
    {
        "fill": "yellow",
        "box": [100, 100, 150, 180]
    }
]

En este caso se dibuja un círculo relleno rojo, una linea y un rectángulo relleno de amarillo con el borde azul.

La interfaz de usuario JSONDrawing debe ser una página html, con un área de texto donde escribiremos las instrucciones de JSONDrawing (explicadas más abajo) y en la otra mitad de la página colocaremos un rectángulo (un objeto canvas de html5) de  640x480 con el fondo inicialmente en negro, donde dibujaremos la figura que se instruya con el objeto JSON.


Las instrucciones admitidas en  JSONDrawing serán:
background: para cambiar el color de fondo. Inicialmente el background es negro.
pen: para definir el color del "lápiz". Inicialmente el lapiz es de color blanco.
width: permite cambiar el ancho del lápiz
fill: para cambiar el color con que se rellenarán las figuras que se dibujen a continuación. "fill":"none" es el default, e indica que la figura se dibuja sin rellenar.
circle: recibe un arreglo de tamaño 3 donde las dos primeras posiciones son el centro del circulo (x,y) y la tercera es el radio.
line: recibe un arreglo de tamaño 4, donde los dos primeros números son las coordenadas del punto inicial, y los dos últimos numeros son las coordenadas del fin de la linea.
box: dibuja un rectángulo  recibe un arreglo con las coordenadas de las esquinas superior izquierda y la esquina inferior derecha.

Los colores posibles son: "white", "black", "red", "green", "blue", "yellow" y "gray", o un numero en hexadecimal que represente la combinación rgb del color, por ejemplo 0xffffff para el blanco.

Un dibujo se expresa como un objeto JSON que contiene estas instrucciones.

En este caso ganará la solución que tenga el menor valor de T ("Tiempo de Entendimiento") de acuerdo a las [Métricas de Halstead](http://www.programando.org/blog/2013/01/desafio-enero-las-metricas-de-halstead/) (ver este post: [http://www.programando.org/blog/2013/01/desafio-enero-las-metricas-de-halstead/](http://www.programando.org/blog/2013/01/desafio-enero-las-metricas-de-halstead/)), el 30 de septiembre  publicaré el programa que calculará este parámetro para javascript, con lo que podrán evaluar su código.

Deben colocar su solución en algún repositorio público, como GitHub, Bitbucket, JSFIddle, o Pastebin. Lo importante es que dejen la url con su solución como un comentario a este post.

El premio de este desafío es una entrada a la StartechConf 2013.

El plazo para entregar vuestras soluciones es el 5 de octubre, y no hay posibilidad de aplazarlo, puesto que el evento se realizará el 25. Contactaremos a los ganadores, y si hubiera una dificultad para que puedan hacer uso de la entrada el evento el premio irá al segundo lugar y así. Como referencia, el valor de la entrada por los dos días es de 150 dólares.

Así que esperamos vuestras contribuciones, como siempre las dudas las pueden expresar a través de comentarios a este post. No responderemos dudas por otro medio (como twitter o email).

Que gane el "más mejol", y nos vemos en [StarTechConf 2013](http://www.startechconf.com/).