//leer un n�mero por el teclado y determinar si tiene tres d�gitos.
Algoritmo exercise01
	
	Definir nOne Como Caracter
	Definir nCharacters Como N�mero
	
	Escribir "Escribe n�mero"
	Leer nOne
	
	nCharacters = Longitud(nOne)	
	
	Si nCharacters == 3 Entonces
		Escribir "El n�mero digitado SI tiene 3 d�gitos."
	SiNo
		Escribir "El n�mero digitado NO tiene 3 d�gitos"
	Fin Si
		
FinAlgoritmo
