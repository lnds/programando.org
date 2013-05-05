---
layout: post
title: "Resultados Desafío Marzo/Abril - ADN Forense"
date: 2013-05-05 12:56
comments: true
categories: 
- Coding Dojo
- Desafíos
---

Llegó el final del plazo para el desafío Marzo/Abril. A pesar de que hubo varios comentarios y consulta sólo llegaron a la fecha del 30 de abril 6 participantes, por lo que el premio prometido no podrá ser entregado (la giftcard de 40 dólares), puesto que no se cumple el mínimo de 8 participantes :-(

Sin embargo, vamos a revisar la participación de los otros seis y elegiremos al mejor. A continuación voy a publicar los resultados de las pruebas y tendrán una semana para apelar, al final de ese periodo entregaré un premio definitivo (distinto al ofrecido originalmente).

<!-- more -->

 El set de pruebas está publicado en mi [repositorio github](https://github.com/lnds/programando.org/tree/master/adn-forense),  se generaron 3 sets de pruebas usando [este generador aleatorio de ADN](http://www.faculty.ucr.edu/~mmaduro/random.htm) (que es en realidad una rutina en javascript). 

Cada set consiste del adn muestra y 5 secuencias "sospechosas". El culpable se genera alterando levemente el ADN muestra. Se seleccionaron las muestras de modo de evitar falsos positivos, el sospechoso ocupa la posición i+1 del set i, es decir, para el set 1 el sospechoso es el número 2, para el set 2 el sospechoso es el número 3 y así.

El primer set es de 100 bases, el segundo de 500 y el tercero de 1000 bases.

Se probó cada solución con los 3 pares, si una solución tomó más de 30 segundos se descartó. El tiempo se mide con el comando time de unix. Las pruebas se hicieron en un MacBook Pro con un procesador Intel I5 con 4 núcleos y 8 Gb RAM.

**Los participantes**

Manuel Ortega (mannungo) con una [solución en PHP](https://github.com/mannungo/secuencias)

Sebastián Rajo (elecay) con una [solución en Java](https://github.com/elecay/Adn)

Juan Pablo Huerta (JPabloix) con una [solución en php](https://github.com/JPabloix/sequenceAlignment)

Victor Ramiro (vramiro) con una [solución en python](https://github.com/vramiro/secuencias)

Rodrigo Chappa (chapa) con una [solución en python](https://github.com/rchappa/sequences)

Rodrigo Campos (rodrigore) con [otra solución en Java](https://github.com/rodrigore/Desafio-ADN-Forense)

**Resultados**

Las dos soluciones en PHP fallan con las secuencias de 500 y 1.000 bases de ADN. Por lo tanto no serán consideradas en los resultados.

La solución de vramiro toma mucho tiempo con la secuencia de 500  bases y fue descartada por esto (es una solución de fuerza bruta, así que no es de extrañar).

La solución de rodrigore está basada en la propuesta de jpabloix, y produce una excepción con el Set 3, fallando encontrar la respuesta correcta.

La solución de rchapa se toma 5,64 segundos en encontrar al sospechoso con el set 3.

La solución de elecay se toma 0,16 segundos en encontrar al sospechos del set 3.

Así que el ganador del desafío Abril Mayo es Sebastian Rajo (elecay). 

Un par de observaciones. El código de Sebastian asume cierta estructura rígida del archivo, pero lo vamos a perdonar por esta vez. A mi me gusta mucho la solución de Rodrigo Chappa, pues es bastante eficiente y sospecho que implementada en otro lenguaje puede ser más rápida (hipótesis que si tuviera tiempo me gustaría probar, pero si hay algún lector interesado, que nos envíe el resultado).

Dado esto, y como no se cumplió la meta de los 8 participantes, daré un premio de 20 dólares en giftcard a Sebastian Rajo, y una giftcard de 10 dólares a Rodrigo Chappa por ofrecer una solución  bastante interesante.

Saludos a todos y nos vemos en el próximo desafío.

