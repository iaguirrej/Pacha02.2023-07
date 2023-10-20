//leer un número y determinar si termina en 4.
Algoritmo exercise03
	
	Definir nOne Como Caracter
	Definir nCharacters Como Entero
	Definir lastCharacter Como Caracter
	
	Escribir "Ingresar número: "
	Leer nOne
	
	nCharacters=Longitud(nOne)
	
	lastCharacter= Subcadena(nOne, nCharacters, nCharacters)

	Si lastCharacter == "4" Entonces
		Escribir "El número digitado SI termina en 4."
	SiNo
		Escribir "El número digitado NO termina en 4."
	Fin Si
	
FinAlgoritmo
