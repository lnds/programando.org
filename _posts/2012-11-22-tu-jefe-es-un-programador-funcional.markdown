---
comments: true
date: 2012-11-22 00:58:30
layout: post
slug: tu-jefe-es-un-programador-funcional
title: Tu jefe es un programador funcional
wordpress_id: 548
categories:
- Destacados
- Programación Funcional
tags:
- Excel
- lenguajes de programación
---

Probablemente tu jefe, y mi jefe, sin ser informáticos, ni programadores sean mejores programadores funcionales que tu mismo, claro, porque es probable que ellos utilicen uno de los lenguajes funcionales más populares que existen: Excel.

Sí, Excel, ese que usan muchos de tus colegas no informáticos, soporta perfectamente el paradigma funcional.

{% img center http://www.programando.org/blog/wp-content/uploads/2012/11/excel.jpg %}

<!-- more -->

Primero en Excel tienes **valores**, números, o a veces textos, que colocas en celdas. Por ejemplo, puedes colocar en la celda A1 el valor 2, y en la celda A2 el valor 3.

Después tienes **funciones**, u operaciones que trabajan sobre valores que se encuentran en una celda, por ejemplo, puedes definir que el valor de la celda A3 se calcula como A3 = A1 * A2. Excel te mostrará el valor de aplicar esta operación a los valores disponibles en ese momento en las celdas A1 y A2, en nuestro caso se verá en A3 el número 6.

{% img  center http://www.lnds.net/blog/wp-content/uploads/2012/11/Captura-de-pantalla-2012-11-21-a-las-20.54.00.png 141 'Definiendo el valor de una celda en función de otras dos' %}

Lo "_interesante"_ es que esta operación  no cambia el valor de las celdas que son usadas como **argumentos. **Esto quiere decir que en Excel no hay **efectos laterales**, el resultado de la función sólo afecta a aquellos que usen el resultado, pero no a los argumentos de entrada.


Veamos que pasa si agregamos otras ecuaciones a nuestra planilla, haciendo que unos valores dependan de resultados previos.




Por ejemplo: 

> A4=A1+2, B3=A2*A2, B4=A1-A2, C3 = B3-B4, C4 = B3*B4.



Excel nos permte ver las dependencias de esta secuencia de cálculos:


{% img center http://www.lnds.net/blog/wp-content/uploads/2012/11/Captura-de-pantalla-2012-11-21-a-las-21.03.11.png 303 'Dependencias entre las celdas' 'Dependencias entre las celdas' %}

Decimos que el orden de evaluación está dado por las dependencias de los datos.

Otra cosa interesante es que dados los mismos valores de entrada el resultado final no cambia, en nuestro caso, si A1 contiene el valor 1, y A2 contiene el valor 2, entonces la celda C4 siempre tendrá el valor -4, _no hay sorpresas_, el valor de la celda C4 depende sólo de los argumentos de entrada y la secuencia de cálculos intermedios.

Consideren la siguiente función en C:

{% codeblock lang:c %}
int calc(int x, int y)
{
	static int z = 0;
	z = z + x * y;
	return z;
}
{% endcodeblock %}



Si invocamos esta función la primera vez con los valores 1 y 2, el resultado será 2, pero si lo invocamos por segunda vez, con los argumentos 2 y 3, el resultado será 8, si la invocamos por tercera vez, con los valores 1 y 2, ¡el resultado será 10!

Esto pasa porque C permite efectos laterales, en particular al declarar la variable z como static hace que ese valor se mantenga a lo largo de cada invocación a la función.

Los lenguajes de programación funcional prohiben esta opción, no pueden haber efectos laterales como estos, el resultado de la función solo debe ser el mismo para los mismos argumentos de entrada.

Ahora bien, excel, usada a este nivel, junto con algunas funciones pre definidas, opera como lenguaje funcional, pero no todo excel es funcional, por ejemplo, cuando se usan macros, o se crean funciones con lenguajes de extensión en VBA u otros lenguajes (como C#), podemos violar el paradigma funcional, que exige que no hayan "efectos laterales", y todo se obtenga mediante el proceso de reducción y combinación.

Pero la mayor parte de los usuarios la usan a este nivel, y sin darse cuenta, programan usando el paradigma funcional.

Las propiedades más importantes de la programación funcional están disponibles en Excel a nivel básico. Lo demás, todo lo complicado, que asusta a tantos programadores, como los combinadores, la monadas, el currying,  las reducciones, el lambda cálculus, etc, son temas más avanzados, que a pesar de sus nombres intimidantes, y de la costumbre de la comunidad funcional de "hablar en difícil", son temas perfectamente abordables por cualquier programador.

Pero si nunca te has animado a aprender la programación funcional, quizás es hora de que abras una planilla de cálculo y empieces a jugar con ella, verás que es muy iluminador.

Ejercicios:
-----------
	
> * Calcula la [sucesión de Fibonacci](http://es.wikipedia.org/wiki/Sucesi%C3%B3n_de_Fibonacci) en Excel
> * ¿Es posible crear funciones recursivas en Excel? (sin usar VB  o algún lenguaje de programación para "extender" excel).





