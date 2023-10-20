//leer un número por el teclado y determinar si tiene tres dígitos.
Algoritmo exercise01
	
	Definir nOne Como Caracter
	Definir nCharacters Como Número
	
	Escribir "Escribe número"
	Leer nOne
	
	nCharacters = Longitud(nOne)	
	
	Si nCharacters == 3 Entonces
		Escribir "El número digitado SI tiene 3 dígitos."
	SiNo
		Escribir "El número digitado NO tiene 3 dígitos"
	Fin Si
		
FinAlgoritmo
