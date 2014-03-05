---
layout: post
title: "Resultados Desafío StartchConf 2013 - JSON Drawing"
date: 2013-10-06 22:11
comments: true
categories: 
---
Ya tenemos ganadora en el desafío CSS StartechConf 2013 Yin Yang, ahora corresponde determinar el ganador en la categoría JavaScript. 

Los concursantes son:

* Manuel Ortega, mannungo, https://github.com/mannungo/jsondrawing
* Jaime Guaman, jaimeguaman, https://github.com/jaimeguaman/jsondrawing
* Juan Pablo Huerta, jphuerta, 2 soluciones, http://jsfiddle.net/45j2v/9/ y http://jsfiddle.net/GTY7Z/
* Aldrin Martoq, aldrinmartoq, https://github.com/aldrinmartoq/lnds-jsondrawing/
* Hans Roman, shanor: https://github.com/aldrinmartoq/lnds-jsondrawing/

**Proceso de Clasificación**

Etapa 1: que todos sean capaces de dibujar la figura propuesta en el enunciado del ejercicio. Dibujar además de esta figura:

		[
	{   "background": "#BADA55",
		"pen": "orange",
		"fill": "white"
	
	},
	{   "fill": "red",
		"pen":"blue",
		"width":3,
		"box": [400, 300, 150, 100] 
	},
	
	{
		"width": 25,
		"fill": "#FAECA1",
		"box": [200, 200, 250, 250]
	},
	{
		"width": 7,
		"line": [300, 30, 400, 250]
	}
	]

Visualmente se ve así:

{% img center /blog/images/2013/10/dibujo2.png %}

Etapa 2: Complejidad Halstead, se calcula la complejidad de cada función con esta herramienta, se suman, y se divide por 18 para tener T. 
En esta etapa usé la siguiente instrucción

{% codeblock %}
 # cr archivo | grep 'Halstead effort' | perl -ne 'END { print $t/18.0 . "\n"} @he = /(\d+\.\d+)/g; $t += $_ foreach @he; '
{% endcodeblock %}

Esto se aplicó solamente sobre el código javascript, no se consideraron fuentes html ni css, ni tampoco llamadas a javascript desde html.

Ganará el que pase la etapa 1 y tenga un menor valor de T.

**Resultados Etapa 1**

Todas las entradas son capaces de dibujar la figura definida en el desafío.
Sin embargo, en el caso de la segunda figura Shanor no pudo manejar el cambio de fondo expresado en hexadecimal. La solución de Mannungo tampoco dibuja bien el cuadrado azul interno.

**Resultados Etapa 2**

Los valores de T para los que pasaron la etapa 1 son los siguientes (ordenados de menor a mayor):


1. Aldrin Martoq: 105.22
2. Jaime Guaman: 170.99
3. Juan Pablo Huerta: 272.30

Como dato adicional, el valor de T de la solución de Shanor es de 68.42, pero está incompleta, y la de Mannungo es de 1393.56.

**And The Winner Is**

Con estos resultados, el ganador de este desafío es Aldrin Martoq, quien además hizo este dibujo:

{% img center /blog/images/2013/10/dibujoamartoq.png %}

{% codeblock %}
[ { width : 10,
     line : [250, 80, 430, 80] },
  {  line : [280, 80, 280, 160] },
  {  line : [330, 80, 330, 160] },
  {  line : [330, 155, 370, 155] },
  {  line : [330, 115, 370, 115] },
  {  line : [390, 80, 390, 160] },
  {  line : [390, 155, 430, 155] },
  {  line : [440, 75, 440, 160] },
  {  line : [480, 75, 480, 160] },
  {  line : [440, 115, 480, 115] },
  { width : 10,
      pen : 'yellow' },
  {  line : [100,  50,  90, 100] },  
  {  line : [ 90, 100,  40, 100] },
  {  line : [ 40, 100,  84, 130] },
  {  line : [ 84, 130,  74, 180] },
  {  line : [120, 100,  170, 100],
      pen : 'lightgray' },
  {  line : [128, 130,  140, 180] },
  {  fill : 'lightblue',
      pen : 'green',
    width : 2,
   circle : [400, 250, 40] }, 
  {   pen : 'red',
      box : [300, 220, 350, 280] },
  {  fill : 0xcafece,
   circle : [200, 250, 40] },
  {  fill : 'black',
     pen  : 'black',
   circle : [220, 250, 35] },
  {   box : [390, 230, 440, 240] },
  {   box : [310, 230, 320, 280] },
  {   box : [340, 220, 330, 270] },
  {   box : [390, 250, 440, 290] },
  {  fill : 'green',
    width : 5,
     pen  : 'yellow',
   circle : [250, 250, 30] },  
]
{% endcodeblock %}

Así que felicitaciones a Aldrin, y gracias a todos los que participaron. Nos comunicaremos con él para entregarle su premio.
