---
comments: true
date: 2011-03-05 14:51:19
layout: post
slug: mi-primer-programa
title: Mi primer programa
wordpress_id: 10
categories:
- Aprendiendo a programar
tags:
- BASIC
- curso
- HTML
- JavaScript
---

[caption id="attachment_13" align="alignright" width="300" caption="Sinclar ZX81"][![](http://www.programando.org/blog/wp-content/uploads/2011/03/zx81-300x243.gif)](http://www.programando.org/blog/wp-content/uploads/2011/03/zx81.gif)[/caption]

Empecé a programar a los 15 años. Era un programa escrito en Basic para una Sinclair ZX-81, una computadora personal, la más barata de ese tiempo, costaba unos 100 dólares.

El programa era muy sencillo, debía transformar desde grados  Farenheit a Celsius.

Este es el programa más simple y útil que, se me ocurre, uno puede escribir como ejemplo para aprender a programar, y con este programa vamos a partir nuestras **clases de programación**.

Cuando uno va a escribir un programa debe partir por declarar qué es lo que se espera del programa, a esto lo llamamos **especificación de requerimientos**. En este caso es bastante simple:


> "Escriba un programa que le solicite al usuario un número que representa la temperatura en grados farenheit y muestre en pantalla la temperatura expresada en grados celsius".


Esa era la primera tarea que tuve que cumplir como programador.  Asumiré que ustedes no saben nada de programación, tal como yo a los quince años, pero que si saben usar adecuadamente su computador al nivel de ser capaces de operar con algún procesador de texto.

Vamos a solucionar este problema usando un lenguaje de programación moderno, vamos a escribir una página web (en HTML) y un programa en JavaScript para resolverlo. Yo lo tuve que hacer en [BASIC](http://es.wikipedia.org/wiki/BASIC), que es un lenguaje bastante antiguo, más adelante hablaremos de los lenguajes de programación y por qué hay tantos, por ahora me gustaría que sigan los pasos que les voy a mostrar. No se asusten, probablemente no entiendan mucho de lo que van a hacer, pero ya les voy a explicar  lo mejor que pueda,  qué estamos haciendo.

**Preparación**

Nuestro programa será construido en  JavaScript, que es un lenguaje que se encuentra habilitado en todos los navegadores de internet. Ahora bien, para poder ejecutar un programa javascript debemos colocarlo dentro de una página HTML. Vamos a hacer esto porque nos permite usar un lenguaje que está disponible en la mayoría de los computadores personales del mundo conectados a internet.

Lo primero que vamos a hacer es construir una página web de soporte de nuestros programas, para esto deben abrir un [editor de texto](http://es.wikipedia.org/wiki/Editor_de_texto) (si usan windows está Notepad, o mejor aún les sugiero descargar [Notepad++](http://notepad-plus-plus.org/), si usan Ubuntu les recomiendo [GEdit](http://projects.gnome.org/gedit/), o lo que tengan a mano en tu sistema operativo).

Vamos a abrir un archivo que llamaremos "_js_tester.html_", que es un archivo de plantilla que usaremos para probar los programas en javascript que vamos a empezar a escribir en este curso.

En el editor de texto escriban este código y guárdenlo en su disco duro como _js-tester.html._

    
    <head>
    
    <script type="text/javascript">
    <!--
    // ACA COLOCAREMOS NUESTROS PROGRAMAS
    //-->
    </script>
    </head>
    <body>
    <input type="button" onclick="programa()" value="probar programa" />
    </body>


Acá está la imagen tomada en mi PC usando Notepad++ (click para agrandar)

[caption id="attachment_22" align="aligncenter" width="300" caption="js-tester.html editado en Notepad++ (click para agrandar)"][![](http://www.programando.org/blog/wp-content/uploads/2011/03/js-tester-300x236.png)](http://www.programando.org/blog/wp-content/uploads/2011/03/js-tester.png)[/caption]

Ustedes pueden visualizar esta página web desde su browser, en mi caso con Chrome:

[caption id="attachment_24" align="aligncenter" width="300" caption="Visualizando js-tester.html en un navegador web (click para agrandar)"][![](http://www.programando.org/blog/wp-content/uploads/2011/03/js-tester-en-browser-300x166.png)](http://www.programando.org/blog/wp-content/uploads/2011/03/js-tester-en-browser.png)[/caption]

Por supuesto si presionan el botón no sucederá nada pues no hemos escrito nuestro programa aún, creamos esta página para poder probar el programa que escribiremos a continuación.

**Programando**

Según el diccionario un programa corresponde a "cada una de las operaciones que, en un orden determinado, ejecutan ciertas máquinas¨. Bueno, eso es lo que vamos a hacer ahora, escribir una secuencia de operaciones para que el computador las ejecute. El programa resultante nos permitirá convertir números de grados farenheit a celsius.

Escribamos la secuencia de acciones que se precisan para poder cumplir con el requerimiento original en nuestro lenguaje natural, el castellano:


> 1. Solicitar que se ingrese el valor en grados farenheit.

2. Convertir el valor de grados farenheit a grados celsius.

3. Mostrar el valor obtenido en la conversión en el paso 2.




Resulta que esta secuencia de acciones tiene la estructura de casi todos los programas:


[![](http://www.programando.org/blog/wp-content/uploads/2011/03/EstructuraPrograma.png)](http://www.programando.org/blog/wp-content/uploads/2011/03/EstructuraPrograma.png)


Un programa típico toma un conjunto de datos de entrada, los procesa ejecutando una secuencia de instrucciones y emite un conjunto de datos de salida. El paso 1 procesa la entrada, el paso 2 realiza el cálculo de conversión y el paso 3 genera la salida del programa.

Ahora vamos a traducir todo esto en un programa en JavaScript:

    
    function programa() { 
    
        // 1. Solicitar que se ingrese el valor en grados farenheit.
        var F = prompt("Ingrese la temperatura en grados farenheit", "77");
    
        // 2. Convertir el valor de grados farenheit a grados celsius.
         var C = (F - 32) * 5 / 9;
    
         // 3. Mostrar el valor obtenido en la conversión en el paso 2.
         alert("La temperatura " + F + " expresada en grados celsius es: "+ C);
    }


Lo que hicimos fue traducir los 3 pasos que expresamos en castellano al lenguaje de programación javascript. El resultado es un programa con 11 lineas de código.

La primera linea declara lo que en JavaScript se conoce como función, una función en este lenguaje agrupa una serie de instrucciones, el nombre de nuestra función es **programa**. Si recuerdan nuestra página html tiene un botón (vean la linea 10 de js-tester.html), ese botón tiene una instrucción que dice _onclick="programa()"_, bueno cuando presionas el botón el browser busca una función en javascript que se llame programa, que es precisamente  la que acabamos de escribir arriba.

Después de declarar nuestra función colocamos las instrucciones entre dos paréntesis de llaves { y }. Esa es la forma que tiene este lenguaje para agrupar un conjunto de sentencias, o instrucciones.

Notaran que transcribí los 3 pasos que habíamos escrito antes y les coloqué delante dos barras diagonales (//), esa es la manera de insertar comentarios en un programa javascript. Los comentarios son ignorados por el computador cuando ejecuta el programa, pero nos sirven a los programadores a entender mejor el programa.

La instrucción en la linea 4 es bastante compleja:

    
    var F = prompt("Ingrese la temperatura en grados farenheit", "77");


La palabra clave **var **nos permite declara una variable, en este caso la variable **F**. Ya hablaremos de las variables en más detalle en futuros artículos, por ahora debes saber que una variable es como un casillero en la memoria del computador donde guardaremos un valor,. El valor lo obtenemos al ejecutar otra función llamada prompt(). Esta es una función que está  disponible en JavaScript y  que nos permite mostrar una ventana donde el usuario puede ingresar un valor. Esta función recibe dos **argumentos, **en este caso el texto _"Ingrese la temperatura en grados farenheit" y el valor "77",_ 77 es un valor que usaremos por omisión en nuestro cálculo. La función prompt propone el valor 77 al usuario y este lo puede cambiar.

Luego ejecutamos el cálculo de conversión a grados celsius usando [la fórmula estándar](http://es.wikipedia.org/wiki/Grado_Celsius) para esta conversión:

    
         var C = (F - 32) * 5 / 9;


Acá nuevamente declaramos otra variable, la variable **C** en donde guardamos el resultado de la derecha. Fíjense que en la ecuación participa la variable **F** que contendrá el valor solicitado al usuario mediante la función **prompt()**.

Por último manejamos la salida en la linea 10 del programa:

    
        alert("La temperatura " + F + " expresada en grados celsius es: "+ C);


Para mostrar el resultado y generar la salida de nuestro programa, usamos la función javascript **alert()**, que despliega una ventana con el mensaje. Fíjense que tenemos texto que se mezcla con las variables F y C usando el operador +, esto corresponde a lo que se llama concatenación y es algo que aprenderemos más adelante. Lo importante ahora es que no aparecen las letras F y C, sino que se muestra los valores de las variables F y C.

Para poder probar todo esto debemos colocar el texto dentro del archivo js-tester.html, para esto copien el código completo de programa()  debajo de donde dice "// ACA VAN A IR NUESTROS PROGRAMAS, el archivo js-tester.html debería quedar así:

    
    <head>
    <script type="text/javascript">
    <!--
    // ACA VAN A IR NUESTROS PROGRAMAS
    function programa() {
    
       // 1. Solicitar que se ingrese el valor en grados farenheit.
        var F = prompt("Ingrese la temperatura en grados farenheit", "77");


// 2. Convertir el valor de grados farenheit a grados celsius.
var C = (F - 32) * 5 / 9;

// 3. Mostrar el valor obtenido en la conversión en el paso 2.
alert("La temperatura " + F + " expresada en grados celsius es: "+ C);

}
//-->
</script>
</head>
<body>
<input type="button" onclick="programa()" value="probar" />
</body>


Acá va una copia de la pantalla del editor en mi PC:




[caption id="attachment_87" align="aligncenter" width="300" caption="js-tester.html modificado para incluir mi primer programa (click para agrandar)"][![](http://www.programando.org/blog/wp-content/uploads/2011/03/js-tester-primer-programa3-300x169.png)](http://www.programando.org/blog/wp-content/uploads/2011/03/js-tester-primer-programa3.png)[/caption]

Ahora sí debería funcionar y ejecutarse el programa cuando presiones el botón. Les sugiero intentar este ejercicio y si tienen dudas o problemas plantearlas en los comentarios.

Es probable que aún no entiendas mucho, te sugiero probar diversas alternativas y observar que pasa, por ejemplo, ¿qué pasa si cambias los nombres a las variables?, ¿qué pasa si sacas las comillas en los textos?, o si eliminas las dos barras // antes de los comentarios, y ¿ si ingresamos otra cosa en vez de un número?, ¿qué pasa si le cambian el nombre a la función programa?, etc.

Experimenta con este programa y resuelve los ejercicios que vienen a continuación.

Ejercicios:

1.- Escribe un programa que convierta de celsius a farenheit.

2.- Escribe un programa que sume 2 números.

3.- Escribe un programa que diga "Hola mundo".

4.- Escribe un programa que solicite el nombre del usuario y lo salude.
