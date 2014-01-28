Metricas de Halstead
====================

Esta gramática Antlr 4 se usará para evaluar a los concursantes del desafío enero 2013 en www.programando.org.

Para mayor referencia ver: http://www.programando.org/blog/2013/01/desafio-enero-las-metricas-de-halstead/

Cómo compilar
-------------

Necesitas contar con Java JDK instalado en tu equipo.

Además debes instalar antlr4 (www.antlr.org).

Para instalar antlr4 en un ambiente unix usa estos comandos:

	$ cd /usr/local/lib
	$ curl -O http://www.antlr.org/download/antlr-4.0-complete.jar

Luego crear estos alias:

	$ alias antlr4='java -jar /usr/local/lib/antlr-4.0-complete.jar'
	$ alias grun='java org.antlr.v4.runtime.misc.TestRig'

Una vez definidos estos alias compilamos con los siguientes comandos:

	$ antlr4 Halstead.g4
	$ javac *.java

Cómo Ejecutar
-------------

Para analizar un programa usamos grun del siguiente modo:

	$ grun Halstead metric < inputfile

Donde inputfile es el archivo que queremos analizar. Al finalizar se mostrarán las métricas de Halstead del archivo.

(c) 2013 Eduardo Díaz

Puedes usar este código en cualquier proyecto que quieras.
