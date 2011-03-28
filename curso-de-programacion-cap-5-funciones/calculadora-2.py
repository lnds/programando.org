# calculadora-2.py

# define 2 funciones para convertir temperaturas:

def fahrcel(grados):
      """Recibe un valor expresado en grados Fahrenheit 
         y lo retorna expresado en grados Celsius"""
      return (grados - 32) / 1.8

def celfahr(grados):
      """Recibe un valor expresado en grados Celsius y 
      lo retorna expresado en grados Fahrenheit"""
      return grados*1.8 + 32

# define 2 variables predefinidas

pi = 3.1415
e = 2.71828

# registramos la versión de este programa
version = 2

print ("Calculadora versión:", version)

while True: # loop infinito  

        # 1. Necesitamos leer la instrucciónn que el usuario quiere ejecutar, 
		# y la guardaremos en un string
        instrucción = input("-->")  

        # 2. Evaluaremos el string ingresado en el paso 1. usando la función eval() 
		# vamos a almacenar el  resultado
        resultado = eval(instrucción)  

        # 3. Mostraremos en pantalla el resultado obtenido en el paso 2.
        print(resultado)
		