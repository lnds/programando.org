pi = 3.1415
e = 2.71828
while True:
	# 1. Necesitamos leer la <strong>instrucción</strong> que el usuario quiere ejecutar, y la guardaremos en un string
	instrucción = input("-->")

	# 2. Evaluaremos el string ingresado en el paso 1. usando la función eval() vamos a almacenar el  resultado
	resultado = eval(instrucción)

	# 3. Mostraremos en pantalla el resultado obtenido en el paso 2.
	print(resultado)
