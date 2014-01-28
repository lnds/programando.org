---
comments: true
date: 2012-03-11 16:42:44
layout: post
slug: como-probar
title: ¿Cómo probar?
wordpress_id: 360
categories:
- Coding Dojo
tags:
- bugs
- calidad
- pruebas
- tests
---

En el [post anterior](http://www.programando.org/blog/2012/03/el-bug-del-bisiesto/) les contaba sobre un bug con el manejo de la fecha.

El bug esencialmente era este:


> "Se debe implementar una función que dada una fecha calcule la fecha correspondiente a 10 años antes. Por ejemplo, si la fecha es 3 de marzo de 2012 la fecha de 10 años antes se define como 3 de marzo de 2002. El problema ocurre en los años bisiestos. Cuando llega el 29 de febrero de 2012 la implementación calcula como resultado 29 de febrero de 2002, una fecha que no existe."


El origen del problema está en la definición del requerimiento y en las condiciones de borde del mismo.

La definición del problema implica que para calcular un desplazamiento de 10 años hacia atrás en el tiempo simplemente se deben restar 10 a la fecha dada. Esa definición es discutible, pero sólo cuando empezamos a considerar los desplazamientos debidos a los años bisiestos. Después de todo un año bisiesto introduce un error de 1 día cada cuatro años, ¿no es verdad?

Pues no. Por que la regla del año bisiesto es:


> Un año es bisiesto si es [divisible](http://es.wikipedia.org/wiki/Divisibilidad) entre 4, a menos que sea divisible entre 100. Sin embargo, si un año es divisible entre 100 y además es divisible entre 400, también resulta bisiesto. Obviamente, esto elimina los años [finiseculares](http://es.wikipedia.org/wiki/Siglo) (últimos de cada siglo, que **ha de terminar en 00**) divisibles sólo entre 4 y entre 100.


En código, podemos definir una función bisiesto de esta manera (en C):



Esta función es fundamental para poder implementar la solución correcta de nuestro problema, así que considerenla, todavía quedan días para resolver este desafío.

Pero sigamos analizando el bug. Una técnica que es muy util para desarrollar código de calidad es crear pruebas unitarias, o test unitarios como se les conoce. La idea es definir un conjunto de pruebas que permitan validar el funcionamiento de nuestra implementación.

Supongamos que nuestra función que calcula una fecha previa se define de este modo:

prev_year(cur_day, cur_mon, cur_year,  delta_year);

cur_day, cur_mon y cur_year son la fecha que le pasamos como argumento, delta_year es la cantidad de años que queremos que se "retroceda en el tiempo" para calcular la fecha deseada. Esta funcion nos devuelve una estructura que expresa la fecha deseada e en sus tres parámetros día, mes y año.

Ahora usemos seudo código para expresar nuestras pruebas unitarias (lo que sigue parece python, pero no lo es, es un lenguaje inventado para efectos de expresar la idea):





> prueba_1: assert prev_year(2012, 3, 1, 10) == (2002, 3, 1);
prueba_2: assert prev_year(2012, 2, 29, 10) == (2002, 3, 1);





assert es una primitiva que intenta ejecutar una expresión booleana, si la expresión se cumple entonces assert indica que todo está bien, si no se cumple assert nos informa de un error. El modo específico de como funciona esto depende de cada lenguaje de programación.

La idea importante que quiero expresarles es que cuando nos enfrentamos a un problema de este tipo, sobretodo cuando hay que depurar algún error, el uso de pruebas unitarias es de gran ayuda. Así que si quieren responder el desafío que les he planteado en el post anterior les sugiero implementar esto tests unitarios, y de esta forma estarán validando si cumplen con el requerimiento.
