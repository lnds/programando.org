---
comments: true
date: 2011-04-27 12:01:45
layout: post
slug: cargando-el-codigo-de-maquina
title: Cargando el código de máquina
wordpress_id: 308
categories:
- Aprendiendo a programar
tags:
- archivos
- assembler
- curso
- map
- máquina virtual
- open
- with
---

Si recuerdan en el [capítulo anterior](http://www.programando.org/blog/2011/04/codigo-de-maquina/), de nuestro [curso de programación](http://www.programando.org/blog/aprende-a-programar/), definimos una **máquina virtual** con un código, o lenguaje de máquina bien preciso. En el diagrama sin embargo aparece una componente que no explicamos, se trata del **módulo loader. **Acá está la figura para que la recuerden:
[![](http://www.programando.org/blog/wp-content/uploads/2011/04/programando-cpu1.png)](http://www.programando.org/blog/wp-content/uploads/2011/04/programando-cpu1.png)

El módulo **loader **se encarga de cargar un programa, escrito en el lenguaje ensamblador, a la memoria de nuestra máquina virtual, para su posterior ejecución.

Si recuerdan, uno de los ejemplos que vimos es este programa ensamblador que despliega la tabla de multiplicad del 5:


> 

> 
> 
	
>   0. 

>     
>     AR0
> 
> 

> 
	
>   1. 

>     
>     5
> 
> 

> 
	
>   2. 

>     
>     AR1
> 
> 

> 
	
>   3. 

>     
>     0
> 
> 

> 
	
>   4. 

>     
>     INCR1
> 
> 

> 
	
>   5. 

>     
>     RMUL
> 
> 

> 
	
>   6. 

>     
>     IMPR
> 
> 

> 
	
>   7. 

>     
>     RES
> 
> 

> 
	
>   8. 

>     
>     50
> 
> 

> 
	
>   9. 

>     
>     SSC
> 
> 

> 
	
>   10. 

>     
>     13
> 
> 

> 
	
>   11. 

>     
>     SALTA
> 
> 

> 
	
>   12. 

>     
>     4
> 
> 

> 
	
>   13. 

>     
>     ALTO
> 
> 

> 





Notarán algunos cambios. Las lineas las empezamos a contar a partir de cero (0), esto obliga a modificar las direcciones de los saltos.La función del módulo **loader **es traducir de este lenguaje con instrucciones y números al código binario que entiende la máquina. 

Para programar nuestra máquina virtual escribiremos varios programas en archivos, al igual como lo hacemos con nuestros programas en python. Si los archivos que contienen código en python los grabamos con la extensión **'.py'**, nuestros programas los almacenaramos en archivos con la extensión **'.a'**, por assembler.

En cada linea de estos archivos escribiremos las instrucciones o números de nuestro programa. El programa de arriba se almacena en un archivo que llamaremos **'tabla_cinco.a'**, es importante notar que este archivo no lleva los números. El contenido del archivo sería el siguiente:




> 
`AR0
5
AR1
0
INCR1
RMUL
IMPR
RES
50
SSC
13
SALTA
4
ALTO`




Una instrucción por linea. A las instrucciones también se les llama códigos nemotécnicos, o simplemente **nemónicos**. AR1 es un nemónico que significa _'almacena el valor que sigue en el registro R1'_

Los nemónicos en nuestro lenguaje ensamblador están resumidos en esta tabla:





> 0: ALTO
1: LIM
2: ACUM
3: MUL
4: RES
5: DIV
6: IMPR
7: LEER
8: ALM
9: RR0
10: RR1
11: RSUM
12: RMUL
13: RRES
14: RDIV
15: AR0
16: AR1 
17: INC
18: DEC
19: INCR0
20: DECR0
21: INCR1
22: DECR1
23: SALTA
24: SSC
25: SSN
26: SSN
27: SRMA
28: SRME
29: SRIG




La definición de cada uno de estos comandos o nemónicos, está en el capítulo [código de máquina](http://www.programando.org/blog/2011/04/codigo-de-maquina/).

Vamos a almacenar estos nemónicos en un lista en python, del siguiente modo:


    
    
    nemonicos = ['ALTO','LIM','ACUM','MUL','RES','DIV','IMPR',
            'LEER','ALM','RR0','RR1','RSUM','RMUL','RRES','RDIV',
            'AR0','AR1','INC','DEC','INCR0','DECR0','INCR1','DECR1',
            'SALTA','SSC','SSN','SSN','SRMA','SRME','SRIG']
    



De este modo si ejecutamos las siguiente instrucciones obtenemos el código de máquina correspondiente al nemónico:

    
    
    >>>nemonicos.index('DEC')
    18
    >>>nemonicos.index('SRME')
    28
    



Esto nos da una idea de que hacer para leer nuestro archivo, en esencia, el **algoritmo **para leer el archivo con instrucciones en assembler sería:



	
  1. Abrir el archivo

	
  2. Leer todas las lineas en el archivo

	
  3. Por cada linea leida:


	
    * Si la linea es un nemónico, entonces traducir la linea al código numérico respectivo

	
    * De lo contrario debe ser un número


    * almacenar ese resultado en la memoria


	


Vamos re escribiendo ese algoritmo a python por partes:


    
    
    def loader(nombre_archivo):
       # archivo = abrir archivo(nombre_archivo)
       # lineas = leer lineas en archivo
       for linea in lineas:
          if linea in nemonicos:
             # agregar_a_memoria (nemonicos.index(linea))
          else:
              # agregar_a_memoria( int(linea))
    




La memoria es simplemente una lista de enteros:


    
    
    memoria = []
    



Así que agregar a memoria es bastante simple: memoria.append(codigo).

Por otro lado, un archivo en Python se maneja usando el tipo predefinido **file**, un objeto de tipo file tiene un método que permite leer todas las lineas de un archivo las que se retornan en una lista, con esto nuestro código para loader queda así:


    
    
    memoria = []
    
    def loader(nombre_archivo):
       archivo = open(nombre_archivo)
       lineas = archivo.readlines()
       archivo.close()
       for linea in lineas:
          codigo = linea.strip()
          if codigo in nemonicos:
             memoria.append(nemonicos.index(codigo))
          else:
              memoria.append( int(codigo) )
    
    



La función **open()** 'abre' un archivo para ser leido. Retorna un objeto de tipo **file**.
El objeto retornado tiene un método **readlines()** que lee todas las lineas y las retorna en una lista, que almacenamos en el arreglo **lineas**. Después de leer las lineas 'cerramos' el archivo. Esto es importante, más adelante aprenderemos sobre los recursos del sistema operativo y porque es importante esto de _cerrar_ el archivo.

Notarán que usé una variable auxiliar llamada **codigo**, lo que pasa es que los archivos almacenan cada linea con un carácter especial invisible, conocido como fin de linea, este carácter debe ser eliminado para poder buscarlo en la lista de nemónicos, o de lo contrario no podrá ser identificado. Esto se logra usando **linea.strip()**. 

He subido a mi [repositorio en GitHub](https://github.com/lnds/programando.org) el código de la función loader, junto con un archivo de ejemplo, pueden descargarlo desde [acá](https://github.com/lnds/programando.org/tree/master/curso-de-programacion-cap-19).

**Ejercicio**

El siguiente programa hace lo mismo que  el anterior pero de un modo avanzado:


    
    
    nemonicos = ['ALTO','LIM','ACUM','MUL','RES','DIV','IMPR','LEER','ALM','RR0','RR1','RSUM','RMUL','RRES','RDIV',
            'AR0','AR1','INC','DEC','INCR0','DECR0','INCR1','DECR1','SALTA','SSC','SSN','SSN','SRMA','SRME''SRIG']
    		
    def traduce(codigo):
    	return nemonicos.index(codigo) if codigo in nemonicos else int(codigo)
    		
    def loader(nombre_archivo):
    	with open(nombre_archivo) as archivo:
    		return map(traduce, [linea.strip() for linea in archivo.readlines()]) 
    	
    	
    memoria = loader('tabla_cinco.a')
    



¿Puedes explicar qué hace este programa? Pistas: la documentación de Python 3 se encuentra [acá](http://docs.python.org/py3k/index.html). Averigua sobre qué hace la función **map()**. 

La instrucción **with **es muy útil con recursos que deben ser liberados, como pasa con los archivos.

    
    
    with open(nombre_archivo) as archivo:
        instrucciones...
    



es equivalente a hacer esto:


    
    
    archivo = open(nombre_archivo)
    instrucciones...
    archivo.close()
    



