---
comments: true
date: 2011-03-06 19:19:10
layout: post
slug: partir-desde-cero
title: Partir desde cero
wordpress_id: 36
categories:
- Aprendiendo a programar
tags:
- bit
- bits
- byte
- bytes
- curso
- fundamentos
- HTML
- notación
- números
---

Cuando nos enseñan a contar en la escuela lo hacen a partir del uno: 1, 2, 3... Si hay una hilera de personas empezamos a contarlas desde 1. Por eso que los matemáticos tienen el conjunto de los números naturales que empieza desde 0: N = {1, 2, 3, 4.....}. Pero en computación las cosas empiezan desde cero.

Según [Wikipedia](http://es.wikipedia.org/wiki/Cero): "La palabra «cero» proviene de la traducción de su nombre en [sánscrito](http://es.wikipedia.org/wiki/S%C3%A1nscrito) _shunya_ ([vacío](http://es.wikipedia.org/wiki/Vac%C3%ADo)) al árabe _sifr_ (صفر), a través del italiano. La voz española «cifra» también tiene su origen en _sifr_."

El cero, el valor nulo, la ausencia de algo, el origen, el primero de los números binarios, esa será nuestra primera cifra. La segunda cifra será el 1. Y no necesitamos más.

0 y 1 son suficientes.

El gran matemático Leibnitz lo [explicó así](http://www.leibniz-translations.com/binary.htm) en 1703:


> 

[caption id="attachment_37" align="alignright" width="75" caption="La tabla de los números binarios de Leibniz (año 1703)"][![](http://www.programando.org/blog/wp-content/uploads/2011/03/TablaBinariosLeibniz-75x300.jpg)](http://www.programando.org/blog/wp-content/uploads/2011/03/TablaBinariosLeibniz.jpg)[/caption]

El ajuste de cuentas común de la aritmética está hecho de acuerdo a la progresión de las decenas. Diez caracteres son usados, los que son 0, 1, 2, 3,  4, 5, 6, 7, 8, 9, los que denotan al cero, uno y los números sucesivos hasta el nueve inclusive. Y luego, cuando alcanzamos diez, el uno empieza de nuevo, escribiendo diez como "10", diez veces diez, o cien, como "100", diez veces cien, o mil, como "1000", diez veces mil como "10000", y así.

Pero en vez de la progresión de diez, he usado por muchos años la más simple progresión de todas, la que se incrementa por dos, habiendo encontrado que es útil para la perfección de la ciencia de los números. Así que no uso otros caracteres que el 0 y el 1, y cuando llego al dos, empiezo de nuevo. Esto es porque el dos es expresado por "10", y dos veces dos, o cuatro, por "100", dos veces cuatro, u ocho, por "1000", dos veces ocho, o dieciseis, por "10000", y así. Aquí está la tabla de los números de esta manera, la cual puede ser extendida tan lejos como se desee.

Aquí, de un vistazo se hace evidente la razón para una celebrada propiedad de la progresión geométrica de los dos en todos los números, la que establece que si uno tiene sólo uno de essos número por cada gradao, se pueden componer todos los números por debajo del grado más alto. De aquí, si uno ha dicho, por ejemplo, que 111, ó 7, es la suma de cuatro, dos y uno, y que 1101, ó 13, es la suma de ocho, cuatro y uno. Esta propiedad permite a los ensayadore pesar todo tipo de masas con pocos pesos y podría servir para acuñar de modo de obtener muchos valores con pocas monedas.
Estableciendo estas expresiones de número nos permiten hacer todo tipo de operaciones mu fácilmente.


Y estas fascinantes propiedades aritméticas tienen la ventaja de que se pueden implementar muy bien en un dispositivo electrónico, siendo el 0 y el 1 los estados de un interruptor (o es apagado, y 1 es encendido).

En 1937 Claude Shannon escribió su tesis doctoral donde implementó el álgebra de Boole usando relés y conmutadores por primera vez en la historia. Esta tesis es la base de los circuitos digitales.

Dominar y manejar los números binarios es esencial para un programador profesional. Hay varios métodos para transformar números desde la base 10 (que es la que usamos) a la base binaria o 2. La [entrada de wikipedia](http://es.wikipedia.org/wiki/Sistema_binario) sobre base binaria es bastante buena para aprender lo básico sobre esta notación. Acá sólo vamos a agregar algunos comentarios.

Primero, un dígito binario se conoce como **bit**, por la contracción de las palabras en inglés **b**inary dig**it**. Por lo tanto un bit sólo puede tener el valor 0 ó 1. En inglés bit significa, entre otras cosas, bocado.

Cuatro digitos binarios son un **nibble **(mascada en inglés), sólo hay 16 nibbles que mostramos en la siguiente tabla.











Los 16 nibbles






Base 2


Base 10


Base 16






0000


0


0






0001


1


1






0010


2


2






0011


3


3






0100


4


4






0101


5


5






0110


6


6






0111


7


7






1000


8


8






1001


9


9






1010


10


A






1011


11


B






1100


12


C






1101


13


D






1110


14


E






1111


15


F











En la tabla he colocado los valores expresados en otra base, en este caso la base 16, o [hexadecimal](http://es.wikipedia.org/wiki/Sistema_hexadecimal), es decir, en esa base se usan 16 caracteres, los dígitos del 0 al 9 y las letras desde la A a la F.

La ventaja de usar estos nibbles es que facilita la transformación, y la visualización de números binarios, es por esto que esta notación es usada en muchos lenguajes de programación (cómo C, Java, JavaScript, C#).

[caption id="attachment_39" align="alignright" width="116" caption="Matriz de 8 x 8 bits representando una L"][![](http://www.programando.org/blog/wp-content/uploads/2011/03/matriz_de_bits.png)](http://www.programando.org/blog/wp-content/uploads/2011/03/matriz_de_bits.png)[/caption]

Veamos, FF sería 15*16 + 15 = 255. Pero sabemos que F son cuatro unos seguidos, así que FF en binario es 11111111. Otro ejemplo, A5A5, sería 1010 0101 1010 0101.


Esto es usado como un modo de crear máscaras, o señales de ceros y unos. Imaginen que quieren construir en pantalla una L dentro de un rectángulo de 8 x 8, eso se representaría como la matriz de la figura en la derecha.


Entonces esa matriz la representariamos por 8 grupos de 8 bits. A un grupo de 8 bits se le conoce como byte (que suena similar a mordida en inglés). Como un byte son dos nibbles concatenados es relativamente fácil expresar los  8 bytes que representan la L en hexadecimal: 00, 40, 40, 40, 40, 40, 7E, 00.






Esta notación también es usada actualmente para designar [los colores en el diseño de páginas web](http://es.wikipedia.org/wiki/Colores_HTML). En este caso los colores se expresan como 3 bytes, el primer byte representa al color rojo (Red), el segundo al verde (Green) y el tercero al azul (Blue), por esto se conoce como código RGB. Cada byte representa la intensidad de cada color, donde 0 significa que no tiene ese color, y FF que el color tendrá la intensidad máxima (255). Por ejemplo, el color rojo se expresa: #FF0000, el verde: #00FF00, el azul #0000FF, todos los demás colores son combinaciones de estos tres, por ejemplo, el amarillo es rojo + verde al máximo, es decir, amarillo: #FFFF00, el naranja es #FF8000.

Dominar la notación binaria y hexadecimal es uno de los conocimientos básicos fundamentales del programador profesional, los invito a profundizar resolviendo los ejercicios.

Ejercicios:

1. ¿A cuál número decimal corresponde el siguiente número binario: 101010101010?

2. Investiga cómo se suma, multiplica, resta y divide en base decimal y ejercita esas operaciones, ¿qué ventajas le ves a este método desde el punto de los primeros creadores del computador?

3. Averigua que es el sistema octal y que ventajas podría tener para un programador.


