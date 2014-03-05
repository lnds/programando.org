---
layout: post
title: "Desafío Junio - Código de Máquina"
date: 2013-06-01 16:07
comments: true
categories: 
---

Cuando programamos en bajo nivel, directamente con el código de máquina solemos usar lo que llamamos lenguaje ensamblador. El siguiente es un ejemplo típico de código ensamblador:

{% codeblock %}
shl eax, 1
shr ebx, cl
and eax, ebx
jnz done
mov eax, cl
{% endcodeblock %}

Sin embargo, estas instrucciones se traducen en números binarios que son interpretados por la CPU.

Los códigos de máquina se basan en una serie de instrucciones básicas las que se construyen combinando "puertas lógicas", circuitos digitales que reciben 2 señales que representan los ceros y unos de la lógica binaria. Estas operaciones lógicas pueden ser usadas para construir todas las instrucciones del código assembler. Las operaciones de lógica binaria más comunes son las operaciones NOT, AND, OR, y XOR. 

Lo interesante es que es posible construir todas las demás instrucciones a partir de una sola operación básica, siempre que esta operación sea NOR o NAND.

<!-- more -->

NOR, corresponde a la negación de la operación OR. Es decir, NOR = NOT(OR(a,b)). Y NAND es la negación de la operación NAND, es decir, NAND = NOT(AND(a,b))

Esta es la tabla de verdad de las funciones NOR y NAND

{% codeblock %}
======= ==================== 
ENTRADA        SALIDAS  
======= ========= ==========
 A  B    A NOR B   A NAND B
------- --------- -----------
 0  0       1          1
 0  1       0          1
 1  0       0          1 
 1  1       0          0
======  ========= ==========

{% endcodeblock %}

Si quisiéramos usar sólo el operador NOR, podemos empezar a generar las demás operaciones a partir de esta:

	NOT(a) = NOR(a, a)
	AND(a, b) = NOT(OR(NOT(a), NOT(b)))
	OR(a, b) = NOT(NOR(a, b))
	XOR(a,b) = OR(AND(a, NOT(b)), AND(NOT(a), b)))

Aprovechando esta propiedad podemos crear una arquitectura basada en una sólo instrucción (por ejemplo, NOR). 

A esta arquitectura la llamaremos la NOR MAchine o cariñosamente NORMA.

Supondremos que NORMA tiene una  memoria consistente de  un arreglo de palabras de 16 bits cada una. El tamaño de este arreglo de memoria será de 64K. Además supondremos que todas las posiciones de memoria son iniciadas en 0.

En NORMA un registro IP (Instruction Pointer) que nos indica donde leer la siguiente instrucción, este registro estará alojado en la misma memoria. Por simplicidad, dejaremos que IP ocupe la dirección 0XFFFF de nuestro arreglo (es la última palabra en el arreglo de memoria).

Normalmente, en assembler cada instrucción tiene el código de operación y sus argumentos.

Por ejemplo:
	AND a, 10    ; hace un and del registro a con el numero 10
	XOR a, b     ; hace un xor entre los registros a y b
	ADD a, b, c  ; suma registros a y b  dejan resultado en registro c

En nuestro caso, tenemos sólo una instrucción (NOR), y por lo tanto no es necesario colocar el código de operación, pues siempre será el mismo.

Para poder hacer algo útil, nuestra máquina funcionará de la siguiente manera:

1. Cada instrucción consistirá de 3 argumentos
2. Cada argumento corresponde a una dirección de memoria
3. Los dos primeros argumentos corresponden a las direcciones de memoria de los operandos
4. El tercer argumento es la dirección de memoria donde dejaremos el resultado.

Por ejemplo,  la instrucción:

	105, 106, 110

Indica que se depositará en la dirección 110 de memoria el resultado de hacer NOR de los contenidos de las direcciones 105 y 106.

Escrito de otra manera, si mem[] es la memoria, entonces la instrucción anterior es equivalente a:

	mem[110] = nor(mem[105], mem[106])

Si mem[105] = 0x00AA y mem[106] = 0x00BB, después de ejecutar la  instrucción el resultado es mem[110] = 0xFF44

De este modo, podemos crear un simulador de nuestra máquina que consiste en el siguiente loop en python:
{% codeblock lang:python %}
  IP = 0xFFFF
  mem[IP] = 0
	while True:
		i = mem[IP]
		a = mem[i+0]
		b = mem[i+1]
		r = mem[i+2]
		mem[IP] = i+3
		f = nor(mem[a], mem[b])
	  mem[r] = f
	  if mem[IP] >= 0xFFFD:
			break
{% endcodeblock %}

Fíjense que hemos agregado un if al código, esto es una manera de poder detener un programa, como IP es 0xFFFF saltar a cualquier dirección mayor a 0xFFFD provocaría un fallo en nuestro simulador, así que asumiremos que cuando alguien escribe    un valor mayor igual a 0xFFFD en la dirección IP está indicando que quiere detener el programa.

La función nor() se define en python de la siguiente manera:

{% codeblock lang:python %}
def nor(a, b):
	return ~(a | b) & 0xFFFF
{% endcodeblock %}

Dado lo anterior un programa muy simple, uno que se detiene inmediatamente sería el siguiente:

		0,0,IP ; IP es la dirección de la última posición en memoria

Un ejemplo programa en el código assembler de nuestra máquina sería así:

{% codeblock %}
1000, 1000, 1001
1001, 1001, 1002
1002, 1002, 1002
1003, 1003, IP
{% endcodeblock %}

Este programa deja el valor 0xFFFF en las direcciones 1001 y 1002.

Analicemos estas instrucciones, traduciéndolas a lo que haría el emulador:

1. mem[1001] = nor(mem[1000], mem[1000]) ==> mem[1001] = 0xFFFF
2. mem[1002] = nor(mem[1001], mem[1001]) ==> mem[1002] = 0x0000
3. mem[1002] = nor(mem[1002], mem[1002]) ==> mem[1002] = 0xFFFF
4. mem[IP] = nor(mem[1003], mem[1003]) ==> mem[IP] = 0xFFFF

La instrucción 1 es equivalente a mem[1001] = NOT(mem[1000])
Las instrucciones 1 y 2 combinadas corresponden a hacer mem[1002] = OR(mem[1001],mem[1001]).  Si se fijan bien, las instrucciones 1 y 2 combinadas son equivalentes a copiar el dato de la posición 1001 a la 1002, esto en assembler se escribiría como:
	
	MOV 1001, 1002

**Programando en assembler NORMA**

Como escribir instrucciones mediante números se puede volver bastante engorroso, permitiremos la creación de "macros".

Estas son dos macros simple para definir los operadores NOT y OR:

	macro NOT a, r
		a, a, r
	endm


	macro OR a, b, r
		local t
		a, b, t
		NOT t, r
	endm

Con estas dos macros nuestro programa se puede reescribir así:

	NOT 1000, 1001
	OR  1001, 1001, 1002
	NOT 1003, IP

Podemos crear otras macro útil:

	macro MOV from, to
		OR from, from, to
	end

Así que podemos reescribir el programa así:

	NOT 1000, 1001
	MOV 1001, 1002
	NOT 1003, IP

Basándonos en MOV podemos crear la macro JMP, que es el salto incondicional:

	macro JMP to
		OR to, to, IP
	end

Si queremos saltos condicionales necesitamos definir los operador AND primero:

	macro AND a, b, r
		local t1, t2
		NOT a, t1
		NOT b, t2
		OR  t1, t2, t1
		NOT t1, r
	endm

Con AND, OR y NOT podemos definir la macro BRANCH:

	macro BRANCH true_dest, false_dest, cond
		local t1, t2
		AND true_dest, cond, t1
		NOT cond, t2
		AND false_dest, t2, t2
		OR t1, t2, IP
	endm

El valor en cond debe ser 0xFFFF si la condición es verdadera, o debe tener el valor 0x0000 si la condición es falsa

Por ejemplo:

	AND 1001, 1002, 1003
	BRANCH 2000, 3000, 1003

Este código indica que salte a la dirección 2000 si los valores de mem[1001] es igual al valor de mem[1002]. De lo contrario debe saltar a la dirección 3000.

**Desafío Junio Julio**

OK, ahora viene el desafío.

Con las macros definidas arriba podemos empezar a programar, pero si queremos realizar cálculos aritméticos necesitamos implementar al menos la suma (las demás operaciones se pueden derivar de esta). Para esto necesitamos poder realizar operaciones como shift. Vamos a agregar un registro adicional a nuestro simulador, al que llamaremos SR (Shift Register) de la siguiente manera:

{% codeblock lang:python %}
	IP = 0xFFFF
	SR = 0xFFFE
	OUT = 0xFFFD
  mem[IP] = 0
	while True:
		i = mem[IP]
		a = mem[i+0]
		b = mem[i+1]
		r = mem[i+2]
		mem[IP] = i+3
		f = nor(mem[a], mem[b])
	  mem[r] = f
		mem[SR] = ((f >> 15) & 1) | ((f & 0x7FFF) << 1)
	  if mem[IP] >= OUT:
			break

	print "OUT: ", mem[OUT]
{%endcodeblock%}
Lo que hacemos con esto es guardar el último resultado de la operación nor rotado a la izquierda en 1 bit.
Esto es muy útil para definir la suma, tarea que deberán ustedes implementar.
Además fíjense que definimos el registro OUT, que es impreso al salir del programa.

El desafío de este mes es el siguiente:

1. Escribir un intérprete del assembler que hemos definido,  que permita cargar desde un archivo un programa en assembler en la memoria de nuestra Máquina NORMA y lo ejecute. Pueden usar como base el interprete de este artículo cuya versión completa está en mi [repositorio GitHub](https://github.com/lnds/programando.org/tree/master/nor-machine).
2. Implementar la macro ADC (add with carry) que permita sumar dos valores en memoria. (Implementar además todas las otras macros que sean necesarias).
3. Escribir un programa en NORMA que calcule el producto de dos números y ejecutarlo con el interprete.
4. Proponer otro algoritmo y escribirlo en assembler NORMA, el que proponga el algoritmo más complejo tendrá un 1 punto extra.

Cada parte otorga un punto, y el que proponga la opción 4 más completa tiene un punto extra, así que el máximo puntaje es 5.

Veremos la posibilidad de conseguir un premio interesante para el ganador. En caso de empate  les propondremos una tarea adicional con tiempo límite a los finalistas, la que se deberá implementar en Assembler NORMA.

**Resumen del lenguaje assembler norma:**

1. Los comentarios empiezan con punto y coma ; y siguen hasta el final de la linea
2. Las instrucciones son de la forma 
{% codeblock %}
	a, b, r
{% endcodeblock %}

Donde a, b, y r pueden ser valores literales o variables.
3. Se pueden usar los registros especiales IP, SR y OUT en los programas.
4. las macros deben estar en mayúsculas y se definen así:

{% codeblock %}
	macro NOMBRE arg1, arg2….
  endm
{% endcodeblock %}

Es decir, empiezan con macro y terminan con ende
5. Se pueden definir labels de este modo:
{% codeblock %}
	label a0:
		NOT 1000, 1001
		MOV 1001, 1002
		JMP a0
		NOT 1003, IP
{% endcodeblock %}
6. Se pueden definir variables locales de este modo:

{% codeblock %}
	local t1, t2
		NOT t1, t2
{% endcodeblock %}

7. También se puede asignar un valor a una dirección de memoria, esto es útil para inicializar variables, usando el operador set:

{% codeblock %}
  set valor, dirección
  ; ejemplo
	local pi
  set 31415, pi ; asigna el valor 31415 a la variable pi
	set 1, 1000  ; guarda un 1 en la dirección 1000
{% endcodeblock %}

set valor, dirección es equivalente a mem[direccion] = valor

8. La manera de asignar los labels y las variables debe ser manejada por el interprete que implementen ustedes.
9. El programa termina con el fin de archivo. Las macros deben definirse antes del resto del programa, y no se permite referencias circulares entre macros, cada macro debe estar definida antes de ser usada.
Es decir, lo siguiente no se permite:
{% codeblock %}
macro UNO a, b
	DOS a, b ; error, DOS no ha sido definida
endm

macro DOS a, b
	UNO a, b ; error hay una referencia circular
endm
{% endcodeblock %}

Como ayuda adicional sugiero estos capítulos de mi curso de programación python:
[Código de Máquina](http://www.programando.org/aprende-a-programar/segunda-parte/arquitectura-de-computadores/codigo-de-maquina.html),
[Cargando el código de máquina](http://www.programando.org/aprende-a-programar/segunda-parte/arquitectura-de-computadores/cargando-el-codigo-de-maquina.html) y por último [interpretando el código de máquina](http://www.programando.org/aprende-a-programar/segunda-parte/arquitectura-de-computadores/interpretando-el-codigo-de-maquina.html)