---
layout: post
title: "Probando Frameworks Web"
date: 2013-05-21 11:51
comments: true
categories: 
---

Hay muchos benchmarks de frameworks en la web, uno de los más recientes es [este de techempower](http://www.techempower.com/benchmarks/#section=data-r5) que mide más de 70 frameworks diferentes.

Como estoy investigando Play Framework, y ya llevo usando Grails  hace un par de años hice un pequeño test entre ambos ambientes, usando parte de un proyecto interno de mi trabajo. Publiqué en twitter que Play-Scala era varias veces más rápido que Grails, y mis colegas me pidieron que les "mostrara el código".

Como no podía revelar el código del proyecto de mi trabajo, durante el fin de semana implementé un mini benchmark, y publiqué el código en [este repositorio GitHub](https://github.com/lnds/lacosita/).

<!-- more -->

El test es muy similar a los tests de tech empower. Mis pruebas son contra una base de datos [MongoDB](http://www.mongodb.org/).

Pruebo tres escenario:

* create: que inserta 10 registros a la base de datos
* jsonList: busca 10 registros en la base de datos y los devuelve en formato JSON
* list: busca 10 registros a la base de datos, pero los despliega como una tabla. Este escenario también prueba la "template engine" de cada framework, generando una página web que usa Twitter Bootstrap para su estilo.

Para probarlos simplemente usé el utilitario wrk [https://github.com/wg/wrk](https://github.com/wg/wrk), el que ejecuta requerimientos durante 10 segundos, manteniendo 10 conexiones activas con 2 threads.

Los resultados están actualizados en el sitio github, y este es el resultado hasta ahora:

Create:

	Grails: 	    91,37 request/sec generando   9.240 inserts
	Scala-Play:   1285,51 request/sec generando 128.640 inserts
	NodeJs:		   898,73 request/sec generando  90.070 inserts
	Rails:			51,48 request/sec generando   5.240 inserts

List:

	Grails:		    88,85 request/sec
	Scala-Play:    836,16 request/sec
	NodeJs:        231,35 request/sec
	Rails:			19,39 request/sec


JsonList:

	Grails:	        740,52 request/sec
	Scala-Play:     984,82 request/sec
    NodeJs:        1092,56 request/sec
    Rails:			133,16 request/sec


El código en Rails es una contribución de [Aldrin Martoq](https://twitter.com/aldrinmartoq).

En términos de líneas de código estos son los resultados usando la herramienta cloc [http://cloc.sourceforge.net/](http://cloc.sourceforge.net/)

Grails:


	-------------------------------------------------------------------------------
	Language                     files          blank        comment           code
	-------------------------------------------------------------------------------
	XML                             15             14              0           1000
	CSS                              3            135             23            629
	Groovy                          11             64             52            233
	HTML/GSP                         3             16              0             80
	Javascript                       1              0              0              9
	-------------------------------------------------------------------------------
	SUM:                            33            229             75           1951
	-------------------------------------------------------------------------------


Scala-Play:

	-------------------------------------------------------------------------------
	Language                     files          blank        comment           code
	-------------------------------------------------------------------------------
	CSS                              4            976             42           6276
	Javascript                       2            549            331           1406
	HTML                             3             16              0             74
	Scala                            2             24              2             67
	XML                              1              0              0              6
	-------------------------------------------------------------------------------
	SUM:                            12           1565            375           7829
	-------------------------------------------------------------------------------

NodeJs:

	-------------------------------------------------------------------------------
	Language                     files          blank        comment           code
	-------------------------------------------------------------------------------
	CSS                              5            977             42           6283
	Javascript                       5            570            339           1508
	HTML (Jade)                      4              8              0             61	
	-------------------------------------------------------------------------------
	SUM:                            14           1555            381           7852
	-------------------------------------------------------------------------------

Rails:

	-------------------------------------------------------------------------------
	Language                     files          blank        comment           code
	-------------------------------------------------------------------------------
	Ruby                            29            119            217            244
	HTML                            10             21              3            169
	YAML                             4             19             60             49
	CoffeeScript                     1              0              3              0
	CSS                              1              0             13              0
	Javascript                       1              0             15              0
	-------------------------------------------------------------------------------
	SUM:                            46            159            311            462
	-------------------------------------------------------------------------------

Hay un aspecto que tengo que agregar que es calcular las métricas de Halstead, que exploramos en un desafío anterior, con el fin de medir en cierta manera la complejidad del desarrollo.


Ahora viene la invitación a ustedes, agregar otros frameworks a este mini benchmark. Para esto deben mandarme sus colaboraciones como un request pull. Veremos cual es la más eficiente y más simple desde el punto de vista de la complejidad de codificación.

