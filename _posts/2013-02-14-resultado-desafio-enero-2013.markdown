---
layout: post
title: "Resultado desafío Enero 2013"
date: 2013-02-14 17:25
comments: true
categories: 
- Coding Dojo
- Desafíos
---

**RESULTADO FINAL:** (NOTA del 21 de febrero)
Se cumplió el plazo final ofrecido el 15 de febrero.
Gracias a Cristóbal Leiva, Israel Leiva y Tomás Hermosilla, por seguir participando.
Los programas mejoraron bastantes, y la verdad es que no me gusta dejar este desafío sin ganador. 

Por un lado el programa de Cristobal mejoró bastante, y pasa la segunda prueba. Los programas de Israel y Tomás también, aunque aún tienen problemas con condiciones de borde en el manejo de strings.

Debo admitir que el manejo de strings complica más de lo necesario el desafío, así que para revertir esta situación he decidido entregar igual el premio a Cristobal, que escribió el mejor programa de acuerdo a los requisitos, es decir, es el que tiene el menor valor para E de acuerdo al ranking que aparece más abajo.

Así que felicitaciones a Cristóbal, y a los demás gracias por participar. Los espero en nuevos desafíos.

* * *

**ATENCIÓN:** (NOTA del 15 de febrero) 
Debido [al comentario de Cristóbal Leiva](http://www.programando.org/blog/2013/02/resultado-desafio-enero-2013/#comment-799889923) se hizo una corrección en la gramática de mi reconocedor ANTLR, pueden revisar el cambio [acá](https://github.com/lnds/programando.org/blob/master/halstead/Halstead.g4). Esto implica un ajuste en el valor de E para algunos participantes, pero no alteró el ranking, ver los ajustes más abajo).

* * *

Bien, se cumplió el plazo para responder al desafío de enero: ["Las Métricas de Halstead"](http://www.programando.org/blog/2013/01/desafio-enero-las-metricas-de-halstead/). Al parecer estuvo más complicado de lo que esperaba. Finalmente sólo se presentaron 7 participantes, por lo que, lamentablemente, no tendremos premio :( …

Pero…  con el fin de estimularlos, y animarlos a que participen en el desafío que viene (en marzo), voy a hacer una excepción, y dado que sólo falto un participante, vamos a tener premio de Gift Card Amazon por 30 dólares en esta oportunidad!!

Los participantes son:

* Manuel Ortega (mannungo) con [una solución en php](https://github.com/mannungo/halstead).
* Aldrin Martoq (aldrinmartoq) con [una solución en ruby](https://github.com/aldrinmartoq/lnds-halstead).
* Tomás Hermosilla (thermosilla) con [su solución en python 3](https://github.com/thermosilla/desafio-halstead).
* Cristóbal Leiva (cleiva) con [su participación en PHP](https://github.com/cleiva/programando-org/tree/master/halstead).
* Daniel Martinez (edmt) con [una solución en python](https://github.com/edmt/m-tricas-de-halstead).
* Israel Leiva (ileiva) con [su solución en perl](https://github.com/ileiva/Problems/tree/master/programando.org/halstead).
* Rodrigore Campos (rodrigore) con la [última participación en ruby](https://github.com/rodrigore/lnds-halstead).

Para medir el esfuerzo de implementación (E) usé [este programa en ANTLR](https://github.com/lnds/programando.org/blob/master/halstead/Halstead.g4). Para los que no lo conocen, ANTLR es una herramienta para generar compiladores (o parsers). Por razones de tiempo no voy a explicar como funciona mi programa, pero ahí está disponible para que lo analicen y me manden sus observaciones.

A continuación va el ranking en función del valor E, recuerden que las reglas decían que ganaría aquel programa con el menor valor para E. Sin embargo, el programa debe funcionar correctamente, así que primero vamos a ordenar a los participantes por el valor E, y luego iremos ejecutando sus programas para verificar que estén correctos. Sólo voy a ejecutar el programa con menor valor E, si este funciona adecuadamente para los archivos de prueba, entonces ganará inmediatamente, sino continuaré con el siguiente de la lista.

Ranking
-------
(Se hizo un ajuste en el ranking de algunos participantes debido a la observación de Cristóbal Leiva, ver [este comentario])


1. cleiva:  E=5.101,61 

2. mannungo: E=8.437,93

3. thermosilla: E=9.729,20 // E=8.716,17

4. aldrinmartoq: 10.990,32 // anterior E=10.963,06

5. rodrigore: E=13.036,08 // anterior E=13.278,09

6. ileiva: E=32.833,86 // anterior E=33.844,43

7. edmt: E=34.034,31

8. lnds: E=83.483,11 // anterior E=83.285,76

Evaluación
----------

Los archivos de prueba son: 
	
* [fuente1.test](https://github.com/lnds/programando.org/blob/master/halstead/fuente1.test): este archivo es el ejemplo mencionado en el desafío. Hay que notar que la lista de operadores es distinta, así que los valores esperados no son los mismos.

* [Halstead.g4](https://github.com/lnds/programando.org/blob/master/halstead/Halstead.g4): esta es mi solución en Antlr 4.

* [ileiva.pl](https://github.com/lnds/programando.org/blob/master/halstead/ileiva.pl): Perl tiene algunas particularidades bien especiales con respecto a las expresiones regulares, la idea es ver que tal se manejan con este lenguaje.

* [edmt.py](https://github.com/lnds/programando.org/blob/master/halstead/edmt.py): Este programa en python tiene strings con triple comillas ("""), es interesante observar cómo maneja esa condición cada programa.

El archivo de operadores definitivo es el siguiente: 

* [operadores.txt](https://github.com/lnds/programando.org/blob/master/halstead/operadores.txt)


Resultados
----------

Probé primero el programa de Cristobal, que es el que tiene el menor valor para E.

Este es el resultado de las pruebas:

**Programa: cleiva.php**
		
1. fuente1.test: Calcula perfecto el valor de E: 115,64.
2. Halstead.g4: calcula correctamente n1 y N1, pero falla al evaluar n2, y N2, con lo que el valor de E difiere de lo esperado. n2 debería ser 199, y N2 debería ser 443, sin embargo el programa de Cristóbal calcula n2 como 197 y N2 como 441. La diferencia se debe a que mi programa considera esta secuencia \r\n\t como 3 tokens distintos, en cambio el programa cleiva.php lo considera como una sóla secuencia de 6 caracteres. Lo que está incorrecto, ¡prueba no superada!

Así que pasamos al siguiente participante.

**Programa: mannungo.php**

1. fuente1.test: Acá nos fue mal :(, por alguna razón obtengo una división por cero en la linea 18 y un mensaje "unknown modifier" en las lineas 8 y 12. Así que mannungo, espero que me expliques en los comentarios que pasó. ¡prueba no superada! 

Pasamos al siguiente participante en el ranking.

**Programa: thermosilla.py**

1. fuente1.test: Calcula perfecto E y los otros valores.
2. Halstead.g4: Los valores para n1 y N1 no coinciden, claramente hay un problema con las expresiones regulares. n1 debería ser 14, pero arroja 8, y N1 debería ser 248 pero calcula 108. No reconoce los símbolos >, <, @, $, ~, *. ¡Prueba no superada!

Vamos al cuarto participante.

**Programa: aldrinmartoq.rb**

1. fuente1.test: sin problemas.
2. Halstead.g4: prueba no superada. Problemas con n1 y N1, calcula 9 y 102 respectivamente, tampoco reconoce >, <,  @, $ y ~. ¡Prueba no superada!

Veamos cómo le va al quinto partecipante:

**Programa: rodrigore.rb**

1. fuente1.test: prueba superada.
2. Halstead.g4: falla al no reconocer el operador ~.

Esto salió bastante difícil para nuestros concursantes, vamos al sexto participante:

**Programa: ileiva.pl**

1. fuente1.test: en este caso el programa lleva el consumo de la cpu al tope, y después de varios minutos sin avanzar decidí detenerlo. Así que Israel, espero en los comentarios tus indicaciones para ver como lo puedo probar.

El último participante:

**Programa: edmt.py**

1. fuente1.test: sin complicaciones
2. Halstead.g4: falla al calcular n1, lamentablemente este programa no entrega la lista de operadores, así que no puedo indicar donde está el error.

¡Y el ganador es!
=================

--Bueno, ¡hasta el momento no hay ganador! :( --
Cristóbal Leiva (ver nota del 21 de febrero al inicio de este post).

¡Felicitaciones Cristóbal! Me contactaré contigo en los próximos días.

--A menos que antes de 5 días alguno de los participantes entregue un programa que supere las pruebas. ¡Ah! y si no has participado, y crees que puedes superar a los finalistas puedes intentarlo también, de todas maneras tendrá preferencia cualquiera de los otros 7 finalistas, pero puedes intentarlo…--
