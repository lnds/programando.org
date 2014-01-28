---
comments: true
date: 2011-04-23 10:43:59
layout: post
slug: codigo-de-maquina
title: Código de Máquina
wordpress_id: 270
categories:
- Aprendiendo a programar
tags:
- assembly
- código de máquina
- fundamentos
- lenguaje ensamblador
- programación de bajo nivel
---

En el  [capítulo anterior](http://www.programando.org/blog/2011/04/la-maquina-universal/) de nuestro [curso de programación](http://www.programando.org/blog/aprende-a-programar/) vimos algo de la historia del desarrollo del computador digital. Pero, ¿cómo funciona un computador? Para responder esta pregunta vamos a **simular** el funcionamiento de un computador usando Python. Lo que vamos a construir es un **modelo de máquina**, un híbrido entre máquina de Turing y de Von Neumann.

Si recuerdan bien, la idea de Turing era construir una máquina que opera leyendo símbolos desde una larga cinta de papel, y escribiendo en esta misma cinta los resultados de las operaciones, las que dependen obviamente de la interpretación de estos símbolos. En el caso de la arquitectura de Von Neumann tenemos una memoria principal, esta memoria contiene las instrucciones a ejecutar. Lo que hace una computadora es ir interpretando las instrucciones que están almacenadas en la memoria una por una.

**¿Cómo son estas instrucciones?**

Bueno, depende del tipo de computador. Hay computadores más sofisticados que otros, y esto define el tipo de instrucciones. De todas maneras, estas instrucciones son bastantes primitivas.

Por ejemplo, imaginemos un conjunto de instrucciones para sumar 20 y 45 en una máquina hipotética:


> 

> 
> 
	
>   1. 

>     
>     LIMPIAR
> 
> 

> 
	
>   2. 

>     
>     ACUMULAR
> 
> 

> 
	
>   3. 

>     
>     20
> 
> 

> 
	
>   4. 

>     
>     ACUMULAR
> 
> 

> 
	
>   5. 

>     
>     45
> 
> 

> 
	
>   6. 

>     
>     IMPRIMIR
> 
> 

> 
	
>   7. 

>     
>     ALTO
> 
> 

> 




La instrucción LIMPIA en la linea 1 coloca en cero algún área interna usada para guardar resultados intermedios, como la memoria de una calculadora, por ejemplo. La instrucción ACUMULA de la linea 2 indica al computador que deberá sumar el dato que sigue en la memoria de trabajo. La linea 3 contiene el primer dato, en este caso 20. La instrucción ACUMULA de la linea 4 indica al computador que deberá sumar el dato que sigue a la memoria de trabajo. La linea 5 contiene el segundo dato: 45. La instrucción IMPRIME de la linea 6 le pide a la máquina que muestre por algún dispositivo de salida (la pantalla, por ejemplo), el resultado guardado en el area intermedia. La instrucción ALTO en la linea 7 le indica a la máquina que debe detenerse.

Este es un ejemplo de lo que llamamos **código de máquina**. Este es el código que entienden directamente las computadoras. Aunque en realidad lo escrito arriba es una representación para que podamos entender, a esta representación la llamamos **código ensamblador**, o **assembly**,  el verdadero código de máquina está representado por números, porque la computadora sólo procesa números, los que se escriben en binario. Supongamos que en nuestra máquina cada instrucción esta codficada de acuerdo a la siguiente tabla:


> 

>     
>     INSTRUCCION VALOR   EN BINARIO (*)
>     ALTO: <strong>          0   0000 00000</strong>
>     LIMPIAR:        <strong>1   0000 0000</strong>1
>     ACUMULAR:   <strong>    2   0000 00010</strong>
>     IMPRIMIR:       <strong>3   0000 00011</strong>
> 
> 





Entonces nuestra lista de instrucciones para sumar 20 y 45 se **codificaría** como la lista de números siguiente:** 1,2,20,2,45,3,0**, la que se expresaría en código de máquina en binario de la siguiente forma:





> 

>     
>     <strong>0000 0001</strong>
>     <strong>0000 0010</strong>
>     <strong>0001 0100</strong>
>     <strong>0000 0010</strong>
>     <strong>0010 1101</strong>
>     <strong>0000 0011</strong>
>     <strong>0000 0000</strong>
> 
> 



(*) Hablamos de los números binarios en  [este capítulo](http://www.programando.org/blog/2011/03/partir-desde-cero/).**
**

**Nuestra propia máquina virtual**


Nuestro objetivo es construir un programa en Python que simule una máquina que interprete este tipode de código de máquina. Para simplificar vamos a definir una máquina imaginaria, esquemáticamente nuestra máquina tendrá la siguiente **arquitectura:**


** **

** **

** **

[caption id="attachment_271" align="aligncenter" width="564" caption="Diagrama de Bloques de nuestra máquina virtual"]**[](http://www.programando.org/blog/wp-content/uploads/2011/04/programando-cpu.png)[![](http://www.programando.org/blog/wp-content/uploads/2011/04/programando-cpu1.png)](http://www.programando.org/blog/wp-content/uploads/2011/04/programando-cpu1.png)
**[/caption]



** **

** **La figura corresponde a un **diagrama de bloques, **un tipo de dibujo muy usado en el modelamiento de sistemas informáticos. La posición de cada bloque, o caja, nos indica el grado de dependencia de cada parte del sistema.

[![](http://www.programando.org/blog/wp-content/uploads/2011/04/cajonera1-169x300.gif)](http://www.programando.org/blog/wp-content/uploads/2011/04/cajonera1.gif)El primer bloque, o componente, de nuestra máquina es la **memoria**. Imaginen que la memoria es como una gran _cajonera_. Dentro de cada cajón de nuestra memoria se almacenan  **palabras **(word en inglés), que corresponden a instrucciones o datos. Además imaginaremos que cada cajón ha sido numerado partiendo, como siempre, desde cero. (Estos cajones son llamados también celdas de memoria).

La **unidad de control** (**CU **por Control Unit, en inglés) es como un sirviente que va abriendo los cajones, uno por uno, y lee las palabras que se encuentra en cada cajón. ¿Cómo sabe la **CU** cuál cajón abrir? Para eso nuestra máquina tiene una variable especial que llamaremos el puntero de instrucciones (instruction pointer, **IP**). Si el IP es cer0, entonces la siguiente palabra a leer está en la cajonera cero.

La CU va interpretando estas palabras, si la palabra es una instrucción se ejecuta, si la palabra es un dato este dato puede ser el argumento de una instrucción. Cuando se ejecuta una instrucción el IP cambia su valor, este nuevo valor va a depender del tipo de instrucción, hay instrucciones que simplemente incrementan el IP en 1, hay otras que permiten cambiar el valor del IP con un valor arbitrario, estas son conocidas como instrucciones de salto.  Otras instrucciones requieren argumentos, los que se encuentran en celdas de memoria contigua. Por ejemplo, si una función necesita un dato adicional entonces esta instrucción lee el dato desde la posición IP+1 e incrementa el valor IP en 2. Todo esto va a quedar más claro cuando construyamos nuestro simulador.

Hay instrucciones que representan operaciones aritméticas o lógicas, estas son ejecutadas por la **Unidad Aritmético Lógica**, o **ALU** por sus siglas en inglés: Aritmetic Logic Unit. Nuestra ALU cuenta con **varios cajones especiales, **hay uno que llamaremos el **acumulador**. El acumulador sólo guarda valores enteros. Inicialmente, al _encenderse nuestra máquina_, el acumulador tiene el valor cero (0). Hay dos cajones adicionales: R0 y R1, son los **registros auxiliares**, muy útiles en otras instrucciones.

Con esto tenemos todos los elementos básicos de nuestra máquina. Por cierto, esta máquina tiene mecanismos para recibir datos, y para leer datos. Estas instrucciones son manejadas con los módulos **input** y **output**.

Lo que vamos a construir se conoce como una **máquina virtual**,  una simulación de una máquina o computadora real, implementada mediante  software. Lo que aprenderemos en este y el próximo capítulo es la base  conceptual de cosas tan avanzadas como la [Java Virtual Machine](http://es.wikipedia.org/wiki/M%C3%A1quina_virtual_Java), o el ambiente [CLR de Microsoft.Net](http://es.wikipedia.org/wiki/Common_Language_Runtime). Como veremos más adelante el mismo Python utiliza este tipo de mecanismos.

En los párrafos anteriores describimos brevemente las componentes de nuestra máquina. Lo que falta es describir el tipo de instrucciones específicas que soporta nuestra máquina.

** **

**Nuestro código de máquina**

Vamos a ver que para poder realizar cálculos relativamente complejos se requiere un conjunto bastante pequeño de instrucciones. Por ahora, y para simplificar nuestro diseño, nuestra máquina sólo operarará con números enteros**, **por lo tanto nuestro set de instrucciones se remite  a este tipo de datos y opera sobre los elementos de la arquitectura descrita anteriormente.**
**

Nuestra computadora tendrá las siguientes instrucciones (las abreviaturas van entre paréntesis):



	
  * **ALTO**: Detiene la máquina.
** **

	
  * **LIMPIAR (LIM): **coloca el acumulador en cero. Se abrevia **LIM**

	
  * **ACUMULAR (ACUM): **suma la palabra que sigue al acumulador. Se abrevia **ACUM**

	
  * **MULTIPLICAR  (MUL)**: multiplica el valor del acumulador por la palabra que sigue.

	
  * **RESTAR (RES)**: resta el valor de la siguiente palabra de memoria del acumulador.

	
  * **DIVIDIR (DIV):** divide el valor del acumulador por el valor de la próxima palabra.

	
  * **IMPRIMIR (IMPR)**: imprime el valor del acumulador en pantalla.

	
  * **LEER:** lee un valor desde el teclado y lo guarda en el acumulador

	
  * **ALMACENAR (ALM): **almacena el valor del acumulador en la posición de memoria indicada por la siguiente palabra.

	
  * **RECUPERAR R0 (RR0)**: almacena el valor en la posición de memoria indicada por la siguiente palabra en el registro R0

	
  * **RECUPERAR R1 (RR1)**: almacena el valor en la posición de memoria indicada por la siguiente palabra en el registro R1.


Hay versiones de las operaciones matemáticas que operan con los registros R0 y R1 y dejan el resultado en el acumulador

	
  * **RSUM****:** suma los valores en los registros R0 y R1 y deja el resultado en el acumulador

	
  * **RMUL**: multiplica los valores en registros R0 y R1 y deja el resultado en el acumulador

	
  * **RRES**: resta al valor del registro R0 el valor del registro R1 y deja el resultado en el acumulador

	
  * **RDIV**: divide el valor del registro R0 por el valor del registro R1 y deja el resultado en el acumulador


Hay 2 instrucciones especiales que sirven para guardar valores en R0 y R1:

	
  * **AR0:** almacena el valor que sigue en el registro R0

	
  * **AR1: **almacena el valor que sigue en el registro R0


Y hay instrucciones especiales con los registros:

	
  * **INC**: incrementa en 1 el acumulador

	
  * **DEC**: decrementa en 1 el acumulador

	
  * **INCR0**: incerementa en 1 el registro R0

	
  * **DECR0**: decrementa en 1 el registro R0

	
  * **INCR1**: incrementa en 1 el registro R1

	
  * **DECR1**: decrementa en 1 el registro R1


Hay instrucciones de salto, estas permiten cambiar el valor del IP, es decir, cambiar desde que posición en memoria se leerá la siguiente instrucción:

	
  * **SALTA:** Salta a la posición definida por la palabra siguiente. Es decir, cambia el valor del IP.

	
  * **SALTA SI CERO (SSC): **Salta a la posición definida por la palabra siguiente si el valor del acumulador es cero.

	
  * **SALTA SI NEGATIVO (SSN): **Salta a la posición definida por la palabra siguiente si el valor del acumulador es negativo.

	
  * **SALTA SI POSITIVO (SSN): **Salta a la posición definida por la palabra siguiente si el valor del acumulador es positivo (mayor que 0).

	
  * **SRMA: **Salta a la posición definida por la palabra siguiente si el registro R0 es mayor que el registro R1**
**

	
  * **SRME:** Salta a la posición definida por la palabra siguiente si el registro R0 es menor que el registro R1

	
  * **SRIG**: Salta a la posición definida por la palabra siguiente si el registro R0 es igual al registro R1




**Ejemplos**

Los siguientes son   "programas" escritos en el código de máquina de nuestra máquina:

**Ejemplo 1:** este programa suma  2+3:


> 

> 
> 
	
>   1. 

>     
>     ACUM
> 
> 

> 
	
>   2. 

>     
>     2
> 
> 

> 
	
>   3. 

>     
>     ACUM
> 
> 

> 
	
>   4. 

>     
>     3
> 
> 

> 
	
>   5. 

>     
>     IMPR
> 
> 

> 
	
>   6. 

>     
>     ALTO
> 
> 

> 




La instrucción de la linea 1 ACUM hace que la CU lea la siguiente palabra, en este caso 2, y la almacene en el acumulador. La instrucción de la linea 3 ACUM hace que se sume el valor de la siguiente palabra, en este caso el número 3, al acumulador. La instrucción de la linea 5 imprime el valor del acumulador (5), y la instrucción de la linea 6 detiene la máquina.

**Ejemplo 2:** Multiplica un número ingresado por el usuario por 2:


> 

> 
> 
	
>   1. 

>     
>     LEER
> 
> 

> 
	
>   2. 

>     
>     MUL
> 
> 

> 
	
>   3. 

>     
>     2
> 
> 

> 
	
>   4. 

>     
>     IMPR
> 
> 

> 
	
>   5. 

>     
>     ALTO
> 
> 

> 




La instrucción en la linea 1 permite ingresar un número y guardarlo en el acumulador. Luego la instrucción MUL seguida de la palabra "2", permiten multiplicar el valor ingresado por 2. La instrucción en la linea 4 imprime el valor del acumulador. Y la instrucción 5 detiene la máquina.

Ejemplo 3: Multiplicar 2 números ingresados por el usuario


> 

> 
> 
	
>   1. 

>     
>     LEER
> 
> 

> 
	
>   2. 

>     
>     ALMACENAR
> 
> 

> 
	
>   3. 

>     
>     20
> 
> 

> 
	
>   4. 

>     
>     LEER
> 
> 

> 
	
>   5. 

>     
>     ALM
> 
> 

> 
	
>   6. 

>     
>     21
> 
> 

> 
	
>   7. 

>     
>     RECUPERAR R0
> 
> 

> 
	
>   8. 

>     
>     20
> 
> 

> 
	
>   9. 

>     
>     RR1
> 
> 

> 
	
>   10. 

>     
>     21
> 
> 

> 
	
>   11. 

>     
>     RMUL
> 
> 

> 
	
>   12. 

>     
>     IMPRIMIR
> 
> 

> 
	
>   13. 

>     
>     ALTO
> 
> 

> 




Este ejemplo es más complejo. La linea 1 solicita al usuario que ingrese un número. La instruccion ALMACENAR en la linea 2 lleva el valor del acumulador a la celda de memoria número 20. La instrucción en la linea 4 solicita al usuario que ingrese otro número, el que es almacenado en la celda de memoria número 21. La instrucción 7 recupera el valor en la celda de memoria 20 en el registro R0 (este es el primer número ingresado por el usuario).  La instrucción en la linea 9 recupera el valor de la celda de memoria 21 y lo deja en el registro R1 (este es el segundo número ingresado por el usuario). En la lina 11 multiplicamos ambos registros, y el resultado queda en el acumulador.  La instrucción de la linea 12 imprime el resultado, y la instrucción de la linea 13 detiene la máquina.

**Ejemplo 5:** imprime la tabla del 5 por pantalla.




> 

> 
> 
	
>   1. 

>     
>     AR0
> 
> 

> 
	
>   2. 

>     
>     5
> 
> 

> 
	
>   3. 

>     
>     AR1
> 
> 

> 
	
>   4. 

>     
>     0
> 
> 

> 
	
>   5. 

>     
>     INCR1
> 
> 

> 
	
>   6. 

>     
>     RMUL
> 
> 

> 
	
>   7. 

>     
>     PRINT
> 
> 

> 
	
>   8. 

>     
>     RES
> 
> 

> 
	
>   9. 

>     
>     50
> 
> 

> 
	
>   10. 

>     
>     SSC
> 
> 

> 
	
>   11. 

>     
>     14
> 
> 

> 
	
>   12. 

>     
>     SALTA
> 
> 

> 
	
>   13. 

>     
>     5
> 
> 

> 
	
>   14. 

>     
>     ALTO
> 
> 

> 






Este es otro ejemplo complejo que usa instrucciones de salto. La instrucción de la linea 1 almacena en el registro 0 el número 5. La instrucción de la linea 3 almacena en el registro 1 el valor 0. Luego, en la linea 5 incrementamos el valor del registro 1. En la linea 6 multiplicamos los registros R0 y R1 entre sí, el valor queda en el acumulador. La instrucción 7 imprime el resultado. En la linea 8 restamos 50 al valor del acumulador. Esta resta valdrá cero sólo cuando el acumulador llegue a valer 50, eso se produce cuando multipliquemos 5 * 10, es decir, esta es la condición que nos permite terminar el programa (la tabla va desde el 5 al 50). La linea 10 chequea si el valor del acumulador es 0, si eso se da entonces salta a la instrucción 14. Si no la linea 12 instruye que se salte a la linea 5. Esto es una manera de implementar un loop usando código de máquina.

Vamos a realizar una **traza**, es decir, vamos a simular el comportamiento del programa del ejemplo 5. Vamos es escribir en una tabla los valores del registro en la medida que se ejecuta el programa:


> 

> 
> 
	
>   * 

>     
>     Al inicio: ACUM = 0; R0 = ?; R1 = ?.
> 
> 

> 
	
>   * 

>     
>     Después de ejecutamos linea 1, ACUM = 0; R0 = 5; R1 = ?.
> 
> 

> 
	
>   * 

>     
>     Ejecutamos linea 3: ACUM= 0; R0 = 5; R1 = 0.
> 
> 

> 
	
>   * 

>     
>     Ejecutamos linea 5: ACUM = 0; R0 = 5; R1 = 1.
> 
> 

> 
	
>   * 

>     
>     Ejecutamos linea 6: ACUM = 5; R0 = 5; R1 = 1.
> 
> 

> 
	
>   * 

>     
>     Linea 7 imprime 5 en pantalla.
> 
> 

> 
	
>   * 

>     
>     Ejecutamos linea 8: ACUM = -45; R0 = 5; R1 =1.
> 
> 

> 
	
>   * 

>     
>     Linea 10  compara acumulador con 0, como ACUM=-45, 
>     la condición no se cumple entonces pasa a la linea 12.
> 
> 

> 
	
>   * 

>     
>     Linea 12, salta a la linea 5.
> 
> 

> 


	
>   * 

>     
>     Ejecutamos linea 5: ACUM = -45; R0 = 5; R1 = 2.
> 
> 

> 
	
>   * 

>     
>     Ejecutamos linea 6: ACUM = 10; R0 = 5; R1 = 2.
> 
> 

> 
	
>   * 

>     
>     Linea 7 imprime 10 en pantalla.
> 
> 

> 
	
>   * 

>     
>     Ejecutamos linea 8: ACUM = -40; R0 = 5; R1 =2.
> 
> 

> 


	
>   * 

>     
>     Linea 10  compara acumulador con 0, como ACUM=-45, 
>     la condición no se cumple entonces pasa a la linea 12.
> 
> 

> 
	
>   * 

>     
>     Linea 12, salta a la linea 5.
> 
> 

> 


	
>   * 

>     
>     Ejecutamos linea 5: ACUM = -40; R0 = 5; R1 = 3.
> 
> 

> 
	
>   * 

>     
>     Ejecutamos linea 6: ACUM = 15; R0 = 5; R1 = 3.
> 
> 

> 
	
>   * 

>     
>     Linea 7 imprime 15 en pantalla.
> 
> 

> 
	
>   * 

>     
>     Ejecutamos linea 8: ACUM = -35; R0 = 5; R1 =3.
> 
> 

> 


	
>   * 

>     
>     ...... continua así hasta que en algun momento R1 = 9
> 
> 

> 


	
>   * 

>     
>     Ejecutamos linea 5: ACUM = -5; R0 = 5; R1 = 10.
> 
> 

> 


	
>   * 

>     
>     Ejecutamos linea 6: ACUM = 50; R0 = 5; R1 = 10.
> 
> 

> 
	
>   * 

>     
>     Linea 7 imprime 50 en pantalla.
> 
> 

> 
	
>   * 

>     
>     Ejecutamos linea 8: ACUM =0; R0 = 5; R1 =10.
> 
> 

> 
	
>   * 

>     
>     Linea 10  compara acumulador con 0, como ACUM=0, 
>     la condición esta vez se cumple entonces pasa a la linea 14
> 
> 

> 
	
>   * 

>     
>     Linea 14: <strong>ALTO</strong>, la máquina se detiene, ACUM = 0; R0 = 5, R1 = 10.
> 
> 

> 




**Programación de bajo nivel**

Como pueden ver programar en lenguaje de máquina es una tarea bastante ardua. Afortunadamente no tenemos que hacerlo, por eso contamos con lenguajes como Python, los llamados lenguajes de alto nivel. Cuando programamos instrucciones de máquina directamente decimos que estamos programando a** bajo nivel.**

Creo que hemos visto muchas cosas en este capítulo, y asimilarlas puede ser complejo, eso lo reconozco, pero es así como funcionan realmente los computadores, y es bastante dificil simplificar aún más los conceptos. Si quieres aprender más de esto te recomiendo leer:



	
  * La [página en wikipedia sobre lenguaje ensamblador](http://es.wikipedia.org/wiki/Lenguaje_ensamblador), es un buen punto de partida.

	
  * El [ASM Book](http://www.asmcommunity.net/book/) es un esfuerzo para escribir un libro comunitario donde se explica el lenguaje ensamblador.

	
  * El libro [Code: The Hidden Language of Computer Hardware and Software](http://www.amazon.com/gp/product/0735611319/ref=as_li_qf_sp_asin_tl?ie=UTF8&tag=lanaturaledel-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0735611319)![](http://www.assoc-amazon.com/e/ir?t=lanaturaledel-20&l=as2&o=1&a=0735611319) (Código: El Lenguaje Oculto del Hardware y Software del Computador), es una excelente introducción sobre como funcionan las cosas. En ese libro se profundiza aún a más bajo nivel lo expuesto en este capítulo, pero de una manera gradual y bastante didáctica.


**Ejercicios**



	
  1. Asigna un código numérico a cada una de las instrucciones que definimos y transcribe los ejemplos como listas de números. Luego expresa esos números en binario.

	
  2. Escribe un programa en nuestro código de máquina que le pida al usuario 2 números y los divida. Asegurate de no dividir por cero.

	
  3. Escribe un programa, en nuestro código de máquina, que solicite al usuario primero un número indicando el tipo de operación que desea realizar: 1 para sumar, 2 para restar, 3 para multiplicar y 4 para dividir. Si el usuario ingresa 0 (cero) entonces el programa se detiene. Una vez elegida la operación el programa debe solicitar los dós números y ejecutar la operación deseada, finalmente debe mostrar el resultado y volver a empezar.



