//leer tres números enteros y los muestre de menor a mayor.
Algoritmo exercise04
	
	Definir nOne, nTwo, nThree  Como Entero
	Definir auxiliar Como Entero
	
	Escribir "Ingresar 3 números: "
	Leer  nOne, nTwo, nThree
	
	Repetir
		Si nOne > nTwo Entonces
			auxiliar = nOne
			nOne = nTwo
			nTwo = auxiliar
		FinSi
		
		Si nTwo > nThree Entonces
			auxiliar = nTwo
			nTwo = nThree
			nThree = auxiliar
		FinSi
	Hasta Que nOne < nTwo y nTwo < nThree	
	
	Escribir nOne
	Escribir nTwo
	Escribir nThree
	
FinAlgoritmo
