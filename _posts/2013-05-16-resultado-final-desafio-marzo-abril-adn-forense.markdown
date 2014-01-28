---
layout: post
title: "Resultado Final Desafío Marzo Abril - ADN Forense"
date: 2013-05-16 00:38
comments: true
categories: 
---
Ha terminado la fase de apelación al resultado del desafío Marzo Abril, les pido las disculpas del caso pues había prometido informar esto el domingo pasado.

Hay un cambio importantísimo, puesto que Rodrigo Chappa, acertadamente ha cuestionado la validez de mis pruebas, y como efectivamente tiene razón, corresponde reparar mi error.

El set original de datos sólo consideraba el caso en que las muestras tenían el mismo largo que la evidencia, esto genera que  la solución de Sebastián resuelva el problema en tiempo más rápido y resultara ganadora en esas condiciones.

Sin embargo, la solución usando programación dinámica de Rodrigo Chappa es mejor, desde el punto de vista algorítmico, y eso se nota cuando cambiamos ligeramente las muestras.

La solución de Sebastían tiene una complejidad aproximada a O(n!), mientras que la de Rodrigo tiene siempre la complejidad O(n*m), donde n es el largo de la muestra y m el largo del ADN del sospechoso.

Las nuevas muestras están en mi [repositorio GitHub](https://github.com/lnds/programando.org/tree/master/adn-forense) corresponden a las muestras set4.adn y set5.adn, en que los largos de las muestras son diferentes. Pueden validar los resultado ustedes mismos.

Al ejecutar el programa de Rodrigo Chappa reconoce adecuadamente al culpable. Lamentablemente la solución de Sebastián empieza a consumir cpu y memoria, al punto que genera una excepción por consumo del heap. 

Así que con estos antecedentes tengo que cambiar el veredicto, y otorgar el primer lugar a Rodrigo Chappa, felicitaciones por el algoritmo y por defender su solución.

En virtud de esto, el premio de 40 dólares originales(*), se dividirá en $30 dólares para Rodrigo y $10 para Sebastián como segundo lugar. Me contactaré con ellos para enviarles su giftcard en los próximos días.

Gracias a todos por participar, y gracias a Rodrigo y Sebastián por el espíritu deportivo mostrado.


Los invito a estar atentos pues se viene un nuevo desafío en los próximos días.

(*) recordemos que el premio total era para el ganador sólo si habían al menos 8 participantes, condición que no se cumplió, pero dado el esfuerzo he decidido premiarlos igual de esta forma.
