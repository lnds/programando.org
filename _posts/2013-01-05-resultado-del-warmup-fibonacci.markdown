---
layout: post
title: "Resultado del Warmup Fibonacci"
date: 2013-01-05 14:56
comments: true
categories: 
- Coding Dojo
- Desafíos
---
Mis disculpas por la demora en publicar el resultado del desafío de diciembre, se suponía que serían dos semanas, pero el fin de año estuvo intenso. Pero ya retomamos, y con un cambio de look. 

Este blog ahora está siendo generado usando [octopress](http://octopress.org/), y todo su contenido quedará disponible en [este repositorio github](https://github.com/lnds/blog-programando-content)

<!-- more -->

# Warmup

Este desafío tuvo varios participantes, y a todo agradezco su participación. Por temas de tiempo y espacio sólo voy a destacar algunas de las soluciones antes de anunciar al ganador, pero todas son interesantes.

Tomás Hermosilla usó la [fórmula de Binet](http://mathworld.wolfram.com/BinetsFibonacciNumberFormula.html) para calcular el "fibonacci inverso" y con esto obtener una solución muy eficiente en python. El código de Tomás está en su [repositorio github](https://github.com/thermosilla/desafio-fibonacci). Leonardo Jofré [entrega una solución en la misma linea](https://github.com/ljofre/randomcodes-/blob/master/lnds.py), también en python. Y Jano González hace lo propio pero esta vez usando JavaScript:

{% gist 4260212 %}

Camilo Ramirez nos entrega [una solución en C#](https://dl.dropbox.com/u/29356804/ComprobacionFibonacci.rar) donde utiliza esta función para saber si un número es de Fibonacci:

{% codeblock lang:csharp %}
static bool IsFibonacci(int n)
        {
            //Aplicamos el enunciado de:
            //"Un numero pertenece a la serie de Fibonacci SI Y SOLO SI (5n^2 + 4) ó (5n^2 - 4) son cuadrados perfectos"
            int posibleCuadradoPerfecto1 = 5 * (n * n) + 4;
            int posibleCuadradoPerfecto2 = 5 * (n * n) - 4;
            return (IsCuadradoPerfecto(posibleCuadradoPerfecto1) || IsCuadradoPerfecto(posibleCuadradoPerfecto2));
        }
{% endcodeblock %}

Con esto "acelera" el loop para buscar el siguiente número de Fibonacci en la serie. Esta solución no es tan eficiente pero es un mix con la solución iterativa más clásica como la de Javier.

Javier (JaAViEr ó 0x5d), nos sorprendió con esta elegante solución en Python:

{% codeblock lang:python %}
estado, n, a, b, i = True, [1,1], input("A:"), input("B:"), 0
while estado:
	if n[-1] >= a:
		if n[-1] <= b:
			i = i+1
		else:
			break
	n.append(n[-1]+n[-2])
print i
{% endcodeblock %}

Me gusta esta solución porque sólo asume lo que se plantea en el problema, sin recurrir a mayores conocimientos matemáticos. La solución es eficiente, y uno podría pensar que eventualmente puede consumir mucha memoria, pero la verdad es que la serie de fibonacci crece de tal manera que si representamos todo con enteros de 128 bits sólo necesitaríamos almacenar 186 números!.

Mi solución está en C, y también se basa en el enunciado del problema, sin tratar de usar ningún conocimiento matemático adicional.

{% codeblock lang:c %}
int fibo(NUM a, NUM b) {
	NUM fa = 0;
	NUM fb = 1;
	int cont = 0;
	while (fb <= b) {
		NUM ft = fa;
		fa = fb;
		fb = ft + fb;
		if (fa >= a)
			cont++;
	}
	return cont;
}
{% endcodeblock %}

Esta función no guarda en un arreglo en memoria los números de Fibonacci calculados, pues mantiene siempre los dós últimos números de Fibonacci de la secuencia (fa y fb). El código completo está en [mi repositorio gtihub](https://github.com/lnds/programando.org/blob/master/fibonacci/warmup-fibo.c).

# El Ganador

Pero hay que elegir un ganador para el desafío. En esta ocasión se trata de Javier (0x5d) con su solución en Python que destacamos anteriormente, con quien me contactaré para enviarle su Giftcard Amazon de regalo :-).

Los invito a estar atentos para el próximos desafío.
