---
comments: true
date: 2012-05-05 16:03:13
layout: post
slug: como-conseguir-un-phd
title: Cómo conseguir un PhD
wordpress_id: 375
categories:
- Sin categoría
tags:
- C++
- lógica binaria
- optimización
- programación dinámica
---

En [Programming Pearls](http://amzn.to/IlzYgo)[1], Jon Bentley propone la manera de hacerse de un PhD:





> Dado el siguiente algoritmo

>
>> while (n > 1) do
if (n is even)
n <- n / 2
else
n <- n*3+1
end
> 
> 
Demuestre que este programa se detiene para cualquier número n entero.





Si ustedes resuelven este acertijo entonces, dice Bentley, ¡vayan a la universidad más cercana y reclamen su PhD!

Claro que en el camino se podrían quedar sin amigos, como nos recuerda [XKCD](http://xkcd.com/710/):

[![](http://www.programando.org/blog/wp-content/uploads/2012/05/collatz_conjecture.png)](http://www.programando.org/blog/wp-content/uploads/2012/05/collatz_conjecture.png)

Este es un problema planteado por Lothar Collatz en 1937, que ha generado bastante investigación. Para los interesados hay una revisión del problema en esta página: [http://www.numbertheory.org/keith/george.html](http://www.numbertheory.org/keith/george.html).
Lo que sabemos

Este problema es la base del [desafío de abril](http://www.programando.org/blog/2012/04/desafio-2012-04-el-problema-de-siracusa/), donde algunos de [ustedes participaron](http://www.programando.org/blog/2012/04/desafio-2012-04-and-the-winner-is/).

Mi respuesta al problema es la siguiente (que llamaremos [siracusa-1](siracusa/siracusa-1.c)):



No es la más breve, que era una de los [requerimientos del desafío](http://www.programando.org/blog/2012/04/desafio-2012-04-el-problema-de-siracusa/). La solución en [Ruby de Daniel Torres](https://github.com/lnds/programando.org/blob/master/siracusa/dtorres-1.rb) es la más breve presentada, se me ocurre que podríamos escribir una más breve en perl, pero lamentablemente estas soluciones tienen un mal desempeño, llegando a consumir mucho tiempo de cpu.

Pero si vamos a dedicarnos a obtener nuestro PhD debemos encontrar una solución con buen desempeño y eficiente, después de todo hay que recorrer todos los números enteros. :)

La solución de Aldrin Martoq usa un bonito [método de programación dinámica](https://github.com/aldrinmartoq/lnds-siracusa/blob/master/siracusa-performante.c), con un costo de memoria proporcional al tamaño del problema. Su código usa un arreglo de 10 millones de enteros (de 64bits). En mi mac su solución toma menos de 2 segundos para cualquier parámetro menor o igual a 10.000.000. Cuando empezamos a jugar con parámetros mayores a esa cifra el desempeño empieza a decaer. Claro está que podemos aumentar los requerimientos de memoria del programa y mantener su desempeño para números mayores.

Vamos a intentar romper el record de Aldrin...

Lo primero que vamos a hacer es operar con bits.

La expresión:



> n % 2 == 0 ? n / 2 : n * 3 + 1



Se transformará en



> n & 0x01 ? ((n << 1)|1)+n : n >> 1



Esto requiere un poco de explicación, verificar que un número es par es equivalente a verificar el bit menos  significativo y ver si es un 1. Dividir por 2 es lo mismo que hacer un shift a la derecha en 1.

La expresión n*3+1 es lo mismo que hacer: ((n*2)+1)+n = ((n<<2)|1)+n.

La verdad es que este cambio no impacta en el desempeño. Pero debemos notar que una vez que multiplicamos por 3 y sumamos 1 lo que hacemos es obtener un número par. Así que esto nos da la clave para reformular nuestro función orbita de la siguiente manera:
  


Esta solución, que llamaremos [siracusa-2](https://github.com/lnds/programando.org/blob/master/siracusa/siracusa-2.c), tiene una mejora notable en desempeño, estos son los valores de ejecutar la versión de aldrin, siracusa-1 y siracusa-2 en mi pc:

`
time ./amartoq-2 10000000
8400511

real	0m1.526s
user	0m1.518s
sys	0m0.006s

time ./siracusa-1 10000000
8400511

real	0m4.069s
user	0m4.063s
sys	0m0.004s

time ./siracusa-2 10000000
8400511

real	0m2.511s
user	0m2.507s
sys	0m0.003s
`

Probando amartoq-2 y siracusa-2 para n=100.000.000 tenemos estos tiempos:

`
time ./amartoq-2 100000000
63728127

real	0m27.943s
user	0m27.916s
sys	0m0.019s

time ./siracusa-2 100000000
63728127

real	0m27.605s
user	0m27.583s
sys	0m0.015s
`

Y para 1.000.000.000:

`
time ./amartoq-2 1000000000
670617279

real	6m37.638s
user	6m37.381s
sys	0m0.198s

time ./siracusa-2 1000000000
670617279

real	4m59.104s
user	4m58.883s
sys	0m0.160s
`

Wujuu!! Gané!! Claro que es una [victoria pírrica](http://es.wikipedia.org/wiki/Victoria_p%C3%ADrrica), dado el uso de cpu sostenido durante esos 4 minutos.

Por cierto, el programa de Aldrin siempre puede mejorar para valores mayores de n si aumentamos el tamaño del arreglo **saltos**.

Ahora les toca a ustedes, les dejo algunos desafíos interesantes, cómo saben si alguno de ustedes encuentra la solución a la [Conjetura de Collatz](http://en.wikipedia.org/wiki/Collatz_conjecture)?

**Desafíos**

1. Modifica el programa de [amartoq-2.c](https://github.com/lnds/programando.org/blob/master/siracusa/amartoq-2.c) para usar las optimizaciones aritméticas usadas en [siracusa-2.c](https://github.com/lnds/programando.org/blob/master/siracusa/siracusa-2.c) y mide el impacto en el desempeño.
2. Fíjate que nuestros programas usan un tipo de datos de 64bits, pero no han sido ejecutados con valores que ocupen todos esos bits, escribe versiones modificadas de los programas usando sólo 32bits y mide el impacto en desempeño.
3. El programa siracusa-3.c imprime los números y el largo de sus secuencias, úsalo para armar una base de datos que permita a los investigadores de este problema consultar rapidamente cual es la secuencia más larga que se genera en un rango de números dados. 
4. Para los estudiantes de ciencias de la computación: ¿Se puede calcular la complejidad de los algoritmos usados en este artículo? ¿Cuáles son?
5. ¿Por qué el hacer estos programas no es la forma correcta de ganarse un PhD, qué es lo que falta?

**Notas**
[1] Este libro es fundamental: [Programming Pearls, Jon Bentley](http://amzn.to/IlzYgo) ¿en que están que no lo han incorporado a su biblioteca?
