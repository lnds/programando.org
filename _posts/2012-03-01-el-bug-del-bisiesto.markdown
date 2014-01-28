---
comments: true
date: 2012-03-01 02:42:40
layout: post
slug: el-bug-del-bisiesto
title: El Bug del Bisiesto
wordpress_id: 357
categories:
- Sin categoría
---

29 de febrero, de 2012. Hoy nos topamos en mi trabajo con un bug de año bisiesto. Se debía validar fechas anteriores a 10 años atrás. La solución que el programador implementó consiste simplemente en restar 10 al año.

Así, si la fecha es 28 de febrero de 2012, entonces 10 años antes se calcula restando 10 a 2012, es decir, la fecha buscada es 28 de febrero de 2002. Por supuesto aplicando ese criterio para el día de hoy genera la imaginaria fecha del 29 de febrero de 2002.

Esa no es la manera correcta de calcular la fecha para 10 años atrás, así que este es el desafío de esta oportunidad ¿cuál es la mejor manera de calcular la fecha correspondiente a 10 años atrás en el tiempo?

Más sobre bugs del bisiesto en la[ naturaleza del software.](http://www.lnds.net/blog/2012/02/bisiesto.html)
