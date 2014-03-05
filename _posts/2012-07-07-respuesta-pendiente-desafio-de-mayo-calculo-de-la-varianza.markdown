---
comments: true
date: 2012-07-07 18:06:08
layout: post
slug: respuesta-pendiente-desafio-de-mayo-calculo-de-la-varianza
title: Respuesta pendiente, desafío de Mayo, cálculo de la varianza
wordpress_id: 408
categories:
- Sin categoría
tags:
- cálculo de desviación estándar
- cálculo numérico
- varianza
---

Estaba por publicar la respuesta al desafío de junio y noté que no les respondí la solución al [desafío de mayo](http://www.programando.org/blog/2012/05/desafio-2012-05-un-poco-de-estadistica/), así que hay que cumplir con los compromisos, así que aquí va. Para los que están esperando la respuesta y los ganadores del [desafío de Junio](http://www.programando.org/blog/2012/06/desafio-2012-06-el-problema-de-hamming-hay-premio/) tendrán que esperar un día más, así que los que aún no se animan, tienen unas horas más para intentar ganar la giftcard de Amazón.

Tengo que mencionar que participaron sólo 2 lectores, Daniel Molina y Javier Rovegno, que hicieron la investigación respectiva.

El desafío consistía en calcular la Varianza de la forma más rápida posible, y con la mayor precisión.

En el desafío les mostré una implementación simple basada en la transcripción de la fórmula:

![](http://www.programando.org/blog/wp-content/uploads/2012/05/varianza.png)

Hay que recordar un par de  resultados fundamentales de la operación con  números en punto flotante. Primero, no son capaces de representar números de precisión infinita, segundo la suma de números en punto flotante no es asociativa, es decir (a+b)+c no es siempre igual que a+(b+c). Cuando tenemos series largas de sumas el error de aproximación puede llevar a un resultado catastrófico, de hecho, el algoritmo mostrado puede llevar a un resultado negativo con ciertos conjuntos de datos, y por ende la desviación estándar, que es la raiz cuadradada de la varianza, puede resultar en un número imaginario, lo que en términos de programación puede generar una excepción en el cálculo.

Ahora, un poco de álgebra nos convencerá de que la expresión: ![](http://www.programando.org/blog/wp-content/uploads/2012/07/m2n.png)   =   ![](http://www.programando.org/blog/wp-content/uploads/2012/07/sxn2.png) se puede escribir de la siguiente forma:

[![](http://www.programando.org/blog/wp-content/uploads/2012/07/m2nrec.png)](http://www.programando.org/blog/wp-content/uploads/2012/07/m2nrec.png)

(sí se que su álgebra está oxidada, pero créanme que es verdad).

Teniendo esto, la varianza se puede calcular como:

[![](http://www.programando.org/blog/wp-content/uploads/2012/07/s2n.png)](http://www.programando.org/blog/wp-content/uploads/2012/07/s2n.png)

Lo que nos lleva a este algoritmo:

    
    def varianza(X[]):
        let n = 0
        let media = 0
        let M2 = 0
        let delta = 0



    
     
        for x in X:
            n = n + 1
            delta = x - media
            media = media + delta/n
            M2 = M2 + delta*(x - media)
    
        return M2/(n - 1)


Y esta es la solución que estaba pendiente, gracias a Daniel y Javier por participar. Mañana veremos la solución al desafío de Julio y entregaremos el premio.

Gracias por participar.
