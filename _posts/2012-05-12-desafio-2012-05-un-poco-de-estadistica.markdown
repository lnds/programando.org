---
comments: true
date: 2012-05-12 13:03:05
layout: post
slug: desafio-2012-05-un-poco-de-estadistica
title: 'Desafío 2012-05: un poco de estadística'
wordpress_id: 388
categories:
- Desarrollo Humano
---

El desafío de este mes es fácil, pero vamos a ver que tan buenos son para calcular. Si tenemos una participación interesante (de 10 o más) el próximo mes este desafío tendrá premio, por ahora sólo el honor.

Voy a tratar de ser lo más preciso posible en el requerimiento.

**Cálculo de la desviación estándar**

La desviación estándar se define como la raiz cuadrada de la varianza, una   fórmula para la varianza es esta:

[![](http://www.programando.org/blog/wp-content/uploads/2012/05/varianza.png)](http://www.programando.org/blog/wp-content/uploads/2012/05/varianza.png)

La X con la barrita encima es la media.

El algoritmo típico para calcular la varianza de una lista L de números es el siguiente:




`
def Varianza(X[], N):`




let M = media(X, N)
let S = 0
for x in X:
S = S + (x-M)^2
return S/N




def media(X[], N):




let S = 0
for x in X:
S = S + x
return S/N


Este algoritmo requiere "pasar" dos veces por los datos, una para calcular la media y otra para calcular la varianza.

El desafío de este mes es el siguiente:


> Calcular la varianza de una manera más rápida y eficiente.


Desafio extra


> El resultado debe ser el más preciso posible.


Con el fin de probar este ejercicio usaré una lista de un millón de números con cuatro dígitos decimales, el resultado se deberá entregar como un número con 8 dígitos decimales. Ganará el programa más rápido y más preciso (proximamente publicaré la lista de números en GitHub y el resultado esperado, así que visiten este post nuevamente para ver estos datos).


