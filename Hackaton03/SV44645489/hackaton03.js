//1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
function exercise1()
{
    let n = parseInt(prompt("Ejercicio 1: Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos. \n\n Ingrese número:"))
    let numberToCharacter = n.toString();
    let message = numberToCharacter.length == 3 ? "El número digitado SI TIENE 3 digitos." : "El número digitado NO TIENE 3 digitos."     
    alert(message)
}

//2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
function exercise2() 
{
    let n = parseInt(prompt("Ejercicio 2: Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo. \n\n Ingrese número: "))
    let message = n < 0 ? message="El número "+n+" es NEGATIVO." :  message="El número "+n+" es POSITIVO."   
    alert(message)
}

//3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
function exercise3() 
{
    let n = parseInt(prompt("Ejercicio 3: Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4. \n\n Ingrese número: "))
    let numberToCharacter = n.toString()
    let lastCharacter = numberToCharacter.charAt(numberToCharacter.length - 1)
    let message = lastCharacter == '4' ? "El número "+n+" SI TERMINA en 4." : "El número "+n+" NO TERMINA en 4."
    alert(message)
}

//4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
function exercise4() 
{
    let n1 = parseInt(prompt("Ejercicio 4: Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor. \n\n Ingrese el primer número:"))
    let n2 = parseInt(prompt("Ejercicio 4: Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor. \n\n Ingrese el segundo número:"))
    let n3 = parseInt(prompt("Ejercicio 4: Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor. \n\n Ingrese el tercer número:"))
    let orderedNumbers = [n1, n2, n3].sort((a, b) => a - b)
    let message= "Números ordenados de menor a mayor: "+orderedNumbers.join(", ")
    alert(message)   
}

/*5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al por mayor, 
esta dependerá del número de zapatos que se compren. 
Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; 
si el número de zapatos es mayor de veinte pero menor de treinta, 
se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. 
El precio de cada zapato es de $80. */ 
function exercise5() 
{
    let n = parseInt(prompt("Ejercicio 5 \n\n Ingrese la cantidad de zapatos a comprar:"))
    const price = 80
    const discounts = [0.1, 0.2, 0.4]
    let discount = n > 30 ? discounts[2] : n > 20 ? discounts[1] : n > 10 ? discounts[0] : 0 
    let priceTotal = price * (1 - discount)  
    let  message= "El precio final con descuento es: S/. " + priceTotal.toFixed(2)
    alert(message)
}

/* 6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, 
 se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, 
 pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora. */
 function exercise6() 
 {
    let hoursWorkedWeek = parseInt(prompt("Ejercicio 6 \n\n Ingresar sus horas trabajadas de la semana:"));      
    const hoursWorking = 40
    const feeNormal = 20
    const feeExtra = 25
    let hoursExtra =  hoursWorkedWeek - hoursWorking
    let salaryNormal = (hoursWorkedWeek >= hoursWorking ? hoursWorking : hoursWorkedWeek) * feeNormal
    let salaryExtra = hoursExtra * (hoursWorkedWeek > hoursWorking ? feeExtra : 0) 
    let weeklySalary =  salaryNormal + salaryExtra
    let message = "Horas laboradas en la semana: "+hoursWorkedWeek+"\nHoras extras en la semana: "+hoursExtra+"\n\nSueldo en la semana es de: S/. "+weeklySalary.toFixed(2)
    alert(message) 
}

 /*7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo,
 sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. 
 Los descuentos son los siguientes:
 Tipo A 10% de descuento
 Tipo B 15% de descuento
 Tipo C 20% de descuento*/
 function exercise7() 
 {    
    let price = parseFloat(prompt("Ejercicio 7 \n\nIngrese el precio del helado:"))
    let membership = prompt("Ejercicio 7 \n\nIngrese la membresía que tiene (A, B o C):") 
    let discount = 0;
    switch(membership.toUpperCase()){
        case 'A':
            discount = 0.1
            break
        case 'B':
            discount = 0.15
            break
        case 'C':
            discount = 0.2
            break
        default:
            discount = 0
            alert("Tipo de membresía no válido. Se aplicará el precio sin descuento.")
    }
    let total = price * (1 - discount)
    let message = "El precio a pagar con su membresía es de: S/."+total.toFixed(2)
    alert(message)
}

//8: Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
function exercise8() 
{    
    let qualification1 = parseInt(prompt("Ejercicio 8: Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no. \n\nIngrese primera nota:"))
    let qualification2 = parseInt(prompt("Ejercicio 8: Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no. \n\nIngrese segunda nota:"))
    let qualification3 = parseInt(prompt("Ejercicio 8: Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no. \n\nIngrese tercera nota:"))
    let average = (qualification1 + qualification2 + qualification3)/3
    const qualificateionMinimum  = 13
    let message = "El promedio de sus notas es "+ (average > qualificateionMinimum ? average.toFixed(2)+"\n\nUsted está APROBADO" : average.toFixed(2)+"\n\nUsted está DESAPROBADO")
    alert(message)
}

//9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
function exercise9() 
{  
    let salary = parseInt(prompt("Ejercicio 9 \n\nIngrese su sueldo"))
    const salaryMajor = 2000
    const increaseMajor = 0.05
    const increaseMinor = 0.1
    let increasePercentage = salary > salaryMajor ? increaseMajor : increaseMinor
    let increase = salary * increasePercentage
    let salaryTotal = salary + increase
    let message = "Su nuevo sueldo es de "+salaryTotal.toFixed(2)+" el aumento es de "+increase.toFixed(2)
    alert(message)
}

//10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.
function exercise10() 
{  
    let n = parseInt(prompt("Ejercicio 10: Hacer un algoritmo en JavaScript que diga si un número es par o impar. \n\nIngrese número:"))
    let message = n % 2 == 0 ? "Es un número PAR." : "Es un número IMPAR."
    alert(message)
}

//11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
function exercise11() 
{  
    let n1 = parseInt(prompt("Ejercicio 11: Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.\n\nIngrese primer número:"))
    let n2 = parseInt(prompt("Ejercicio 11: Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.\n\nIngrese segundo número:"))
    let n3 = parseInt(prompt("Ejercicio 11: Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.\n\nIngrese tercer número:"))
    let orderedNumbers = [n1, n2, n3].sort()
    let message = "El número mayor es "+orderedNumbers[orderedNumbers.length-1]+"."
    alert(message)
}

//12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
function exercise12() 
{  
    let n1 = parseInt(prompt("Ejercicio 12: Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.\n\nIngrese primer número:"))
    let n2 = parseInt(prompt("Ejercicio 12: Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.\n\nIngrese segundo número:"))
    let orderedNumbers = [n1, n2].sort()
    let message = "El número mayor es "+orderedNumbers[orderedNumbers.length-1]+"."
    alert(message);
}

//13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
function exercise13() 
{  
    let word = prompt("Ejercicio 13: Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.\n\nIngrese una letra:");
    const letter = word.charAt(0).toLowerCase();
    const vowels = ['a','e','i','o','u']
    const vowel = vowels.find((e)=>e == letter)
    let message= vowel == undefined ? "La letra "+letter+" NO es vocal." : "La letra "+letter+" SI es vocal."
    alert(message)   
}

//14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
function exercise14() 
{  
    let n = parseInt(prompt("Ejercicio 14: Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.\n\nIngrese número:"));
    let isPrime = true    
    //Casos especiales
	isPrime = n == 0 || n == 1 || n == 4 ? false : true	
    if(!isPrime)
    {
        for (let x = 2; x < n / 2; x++) {
            isPrime = n % x == 0 ? false : true;            
        }
    }
    let message = isPrime ? "El número "+ n +" SI es primo" : "El número "+ n +" NO es primo"
    alert(message)
}

//15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
function exercise15() 
{  
    let centimeters = parseInt(prompt("Ejemplo 15: Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.\n\nIngrese la cantidad de centímetros:"))
    let pounds = parseInt(prompt("Ejemplo 15: Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.\n\nIngrese la cantidad de libras:"))
    const centimetersToInches = 0.393701
    const poundToKilograms = 0.453592;
    let inches = centimeters * centimetersToInches
    let kilograms = pounds * poundToKilograms
    let message = "1: "+centimeters+" centímetros son "+inches.toFixed(2)+" pulgadas.\n\n2: "+pounds+" libras son "+kilograms.toFixed(2)+" kilogramos."
    alert(message);
}

//16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.
function exercise16() 
{  
    let n = parseInt(prompt("Ejercicio 16: Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.\n\nIngrese número:"));
    const days= ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo']
    let day = days[n - 1]
    let message = day == undefined ? "El número ingresado no tiene asigando un día en específico." : "El número "+n+" corresponde al día de la semana "+day+"."
    alert(message);    
}

//17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.
function exercise17() 
{  
    let h = prompt("Ejercicio 17: Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.\n\nIngrese hora:");
    let m = prompt("Ejercicio 17: Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.\n\nIngrese minuto:");
    let s = prompt("Ejercicio 17: Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.\n\nIngrese segundo:");
    //const horaActual = new Date(`2023-08-05T${hora}:00`);
    //const horaDespuesUnSegundo = new Date(horaActual.getTime() + 1000);
    const fechaActual = new Date(); // Obtiene la fecha y hora actual
    const fechaConHora = new Date(`${fechaActual.toISOString().slice(0, 10)}T${hora}`);
    const horaDespuesUnSegundo = new Date(fechaConHora.getTime() + 1000);

    const horaFormateada = horaDespuesUnSegundo.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit'});
    return horaFormateada;
}

/* 18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
$10. Si se compran unidades separadas hasta 9.
$8. Si se compran entre 10 unidades hasta 99.
$7. Entre 100 y 499 unidades.
$6. Para mas de 500 unidades.
La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.*/
function exercise18() 
{  
    let quantity = parseInt(prompt("Ejercicio 18\n\nIngrese la cantidad de CDs a adquirir:"));
    let price = 0
    switch (true){
        case quantity < 10:
            price = 10       
            break
        case quantity >= 10 && quantity < 100:
            price = 8       
            break  
        case quantity >= 100 && quantity < 500:
            price = 7       
            break  
        case quantity < 500:
            price = 6       
            break       
        default:
            price = 0
            alert("No se puede realizar el cálculo en base a la cantidad ingresada.")
    }    
    let priceTotal= quantity * price
    let revenue = priceTotal * 0.0825;
    let message = `1: El precio total es S/. ${priceTotal.toFixed(2)}.\n\n2: La ganancia para el vendedor es S/. ${revenue.toFixed(2)}`
    alert(message)
}

/*19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
Cajero (56$/día).
Servidor (64$/día).
Preparador de mezclas (80$/día).
Mantenimiento (48$/día).
El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó.*/
function exercise19() 
{  
    let workerId = parseInt(prompt("Ejercicio 19\n\n1: Cajero\n\n2: Servidor\n\n3: Preparador de mezclas\n\n4: Mantenimiento\n\nIngrese identificador del empleado:"))
    let daysWorkedWeek = parseInt(prompt("Ejercicio 19\n\nIngrese los días trabajados del empleado:"))
    const salariesDay = [56,64,80,48]
    alert(salariesDay[workerId - 1] )
    let salaryDay = salariesDay[workerId - 1]  
    let salaryTotal = salaryDay != undefined ? daysWorkedWeek * salaryDay : 0
    let message = daysWorkedWeek < 1 || daysWorkedWeek > 6 ? 'La cantidad de horas trabajadas ingresada no cumple con los datos de cálculo.' : `El empleado con identificador ${workerId} trabajó ${daysWorkedWeek} días y debe recibir S/. ${salaryTotal.toFixed(2)} de pago.`
    alert(message);
  }
 
/*20. Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
¿Cuántos números son Pares?
¿Cuál es el mayor de todos?
Si el tercero es par, calcular el cuadrado del segundo.
Si el primero es menor que el cuarto, calcular la media de los 4 números.
Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.*/
function exercise20() 
{  
    let n1 = parseInt(prompt("Ejercicio 20\n\nIngrese primer número:"))
    let n2 = parseInt(prompt("Ejercicio 20\n\nIngrese segundo número:"))
    let n3 = parseInt(prompt("Ejercicio 20\n\nIngrese tercer número:"))
    let n4 = parseInt(prompt("Ejercicio 20\n\nIngrese cuarto número:"))
    let numbers = [n1, n2, n3, n4]
    let orderedNumbers = numbers.sort()   
    //CATIDAD DE PARES
    let coutNumbersCounters = 0;
    for (let x = 0; x < orderedNumbers.length - 1; x++) {
        if(orderedNumbers[x] % 2 === 0)
        {
            coutNumbersCounters += 1
        }               
    }  
    //NÚMERO MAYOR
    let numberMajor = orderedNumbers[orderedNumbers.length-1]  
    //SI EL TERCERO ES PAR, CALCULAR EL CUADRADO DEL SEGUNDO
    let numberSecondSquared = n3 % 2 === 0 ? Math.pow(n2, 2) : 'No cumple.'      
    //SI EL PRIMERO ES MENOR QUE EL CUARTO, CALCULAR EL PROMEDIO DE LOS 4 NÚMERO
    let average = n1 < n4 ? (n1 + n2 + n3 + n4) / 4 : 'No cumple.'    
    //SI EL SEGUNDO EN MAYOR QUE EL TERCERO Y EL TERCEO ESTÁ ENTRE 50 Y 700, CALCULAR LA SUMA DE LOS 4 NÚMERO
    let addition = n2 > n3 && n3 >= 50 && n3 <= 700 ? n1 + n2 + n3 + n4 : 'No cumple.'     
    let message = `1: Cantidad de números pares: ${coutNumbersCounters}
    \n\n2: El número mayor es: ${numberMajor}
    \n\n3: El cuadrado de ${n2}, si ${n3} es PAR: ${numberSecondSquared}
    \n\n4: La media de los 4 números, si ${n1} es menor que ${n4}: ${average}
    \n\n5: La suma de los 4 números, si ${n2} es mayor que ${n3} y este está entre 50 y 700: ${addition}`
    alert(message)
}

//21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.
function exercise21() 
{ 
    let n = parseInt(prompt("Ejercicio 21: Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.\n\nIngrese un número:"))
    let factorial = 1;    
    for(let i = 2; i <= n; i++){
        factorial *= i;
    }
    let message = "El factorial de "+n+" es "+factorial
    alert(message);
}

//22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.
function exercise22() 
{
    let n = parseInt(prompt("Ejercicio 22: Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.\n\nIngrese un número:"));
    const addition = (n * (n + 1)) / 2;    
    let message = "La suma de los "+n+" números es: "+addition
    alert(message);
}

//23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.
function exercise23() 
{
    let n = parseInt(prompt("Ejercicio 23: Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.\n\nIngrese un número:"));
    const quatityOdd = Math.floor((n+1)/2)
    const additionOdd = Math.pow(quatityOdd,2) 
    let message = `La suma de los ${n} primeros números impares es `+additionOdd
    alert(message);
}

//24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.
function exercise24() 
{
    const n = 1000
    const quatityPair = Math.floor(n/2)
    const additionPairs =  quatityPair * (quatityPair + 1)   
    let message = "Ejercicio 24\n\nLa suma de los 1000 primeros números es "+additionPairs
    alert(message);
}

//25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.
function exercise25() 
{
    let n = parseInt(prompt("Ejercicio 25: Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.\n\nIngrese número:"));
    let nProcess = n
    let factorial = 1;
    while (nProcess > 1) {
        factorial *= nProcess;
        nProcess--;
    }
    let message = `El factorial de ${n} es `+factorial
    alert(message)
}

//26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.
function exercise26() 
{
    let dividend = parseInt(prompt("Ejercicio 26: Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.\n\nIngrese dividendo:"))
    let divider = parseInt(prompt("Ejercicio 26: Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.\n\nIngrese divisor:"))  
    let message = ''    
    let count = 0;  
    if(dividend == 0){
        message="Error: No se puede dividir entre cero."
    }
    else
    {
        while(dividend >= divider)
        {     
            dividend -= divider
            count += 1
        }
        message = "1: Cociente: "+count+"\n\n2: Resto: "+dividend
    }        
    alert(message)
}

//27. Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
function exercise27() 
{
    let message = ''
    let summation = 0;
    let quantityNumbers = 0;

    while(true){
        const n = parseFloat(prompt("Ejercicio 27: Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.\n\nIngresa número positivo (ingresa un número negativo para terminar):"));

        if(isNaN(n)){
            alert("Error: Ingrese un número válido.");
            continue;
        }
        if(n < 0){
            break;
        }
        summation += n;
        quantityNumbers++;
    }
    const average = summation / quantityNumbers;
    message = quantityNumbers == 0 ? "No se ingresaron números válidos." : "La media de los números ingresados es: "+average.toFixed(2)   
    alert(message)
}

//28. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.
function exercise28() 
{
    let summation = 0;
    let count = 1;  
    do {
        summation += count;
        count++;
    } while (count <= 100);
    let message = `Ejercicio 28\n\nLa suma de los primeros 100 números es: ${summation}`
    alert(message);
}

//29. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.
function exercise29() 
{
    let summation = 0;
    let count = 1;
  
    while (count <= 100) {
        summation += count;
        count++;
    }
    let message = `Ejercicio 29\n\nLa suma de los primeros 100 números es: ${summation}`
    alert(message);
}
  
//30. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.
function exercise30() 
{
    let summation = 0;
  
    for (let count = 1; count <= 100; count++) {
        summation += count;
    }
    let message = `Ejercicio 30\n\nLa suma de los primeros 100 números es: ${summation}`
    alert(message);
}
  
//31. Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.
function exercise31() 
{
    let summationPairs = 0;
    let quatityPairs = 0;
    let summationOdds = 0;
    let quantityOdds = 0;
  
    for (let i = 1; i <= 10; i++) {
      const n = parseInt(prompt(`Ejercicio 31: Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.\n\nIngresa el número ${i}:`));
  
      if (isNaN(n)) {
        alert("Error: Ingresa un número válido.");
        i--;
        continue;
      }
  
      if (n % 2 === 0) {
        summationPairs += n;
        quatityPairs++;
      } else {
        summationOdds += n;
        quantityOdds++;
      }
    }
  
    let averagePairs = quatityPairs == 0 ? 0 : summationPairs / quatityPairs;
    let averageOdds = quantityOdds == 0 ? 0 : summationOdds / quantityOdds;
    let message = `Media de los números pares: ${averagePairs.toFixed(2)}\n\nMedia de los números impares: ${averageOdds.toFixed(2)}`
    alert(message);
}
  
//32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en JavaScript que nos permita saber eso.
function exercise32() 
{
    const cities = {
        "Comas": 340000,
        "Carabayllo": 345000,
        "Puente Piedra": 117808,
      };

    let cityPoblationMajor = "";
    let poblationMajor = 0;
  
    for (const city in cities) {
      const poblation = cities[city];
      if (poblation > poblationMajor) {
        poblationMajor = poblation;
        cityPoblationMajor = city;
      }
    }
    let message = `La ciudad con más población es ${cityPoblationMajor} con ${poblationMajor} pobladores.`
    alert(message);
}
  
// 33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.
function exercise33() 
{
    do {
        alert("El programa sigue ejecutándose...");
      
      } while (continuarPrograma());
      
    let continuar;
  
  
    alert("El programa ha finalizado.");
    do {
      continuar = prompt("¿Deseas continuar con el programa? (Responde 'sí' o 'no')").toLowerCase();
    } while (continuar !== 'sí' && continuar !== 'no');
  
    return continuar === 'sí';
}

//34. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno nueve.
function exercise34() 
{
    let message = ''
    let multiplicationTable = ''
    let multiplicator =''

    for (let n = 1; n <= 10; n++) { 
        message = ''           
        multiplicator = `Tabla de multiplicar del ${n}:\n\n`
        multiplicationTable = ''
        for (let m = 1; m <= 10; m++) {
            result  = n * m;
            multiplicationTable +=`${n} x ${m} = ${result}\n\n`
        }      
        message = multiplicator + multiplicationTable+`\n\n\n\n`     
        alert(message);
        console.log(message)   
    }    
}

//35. Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
function exercise35() 
{
    let numberMajor = Number.NEGATIVE_INFINITY; // Inicializamos con un valor muy bajo
    let numberMinor = Number.POSITIVE_INFINITY; // Inicializamos con un valor muy alto
  
    for (let i = 1; i <= 20; i++) {
      const n = parseFloat(prompt(`Ejercicio 35: Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.\n\nIngresa número ${i}:`));
  
      if (isNaN(n)) {
        alert("Debe ingresar sólo números.");
        i--;
        continue;
      }

      if (n > numberMajor) {
        numberMajor = n;
      }
  
      if (n < numberMinor) {
        numberMinor = n;
      }

    }

    alert(`1: El número mayor es ${numberMajor}\n\n2: El número menor es ${numberMinor}`);
}

//36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.
function exercise36() 
{
    let n = parseInt(prompt("Ejercicio 36: Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.\n\nIngrese número:"));
    const serieFibonacci = [0, 1]; 
  
    for (let i = 2; i <= n; i++) {
      const nPrevious1 = serieFibonacci[i - 1];
      const nPrevious2 = serieFibonacci[i - 2];
      const nNew = nPrevious1 + nPrevious2;
  
      serieFibonacci.push(nNew);
    }
  
    alert(`La serie Fibonacci de ${n} términos: ${serieFibonacci.join(", ")}`);
}

//37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
function exercise37() 
{   
    const n1 = 15;
    const n2 = 45;
    let mcd = 0

    if (n2 == 0) {
        mcd = n1;
    } else {
        mcd = n1 % n2;
    }
    
    let message = `El Máximo Común Divisor (MCD) de ${n1} y ${n2} es: ${mcd}`
    alert(message)
} 

//38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.
function exercise38() 
{
    let n = parseInt(prompt("Ejercicio 38: Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.\n\nIngresar un número:"));
    let message = ''
    if (n <= 0) {
      message = `${n} NO es un número perfecto.` // Los números negativos y cero no pueden ser perfectos
    }
    else{
        let sumDivisors = 0;  
        for (let i = 1; i <= n / 2; i++) {
            if (n % i === 0) {
                sumDivisors += i;
            }
        }    
        message = sumDivisors == n ? `${n} SI es un número perfecto.` : `${n} NO es un número perfecto.`
    }
    alert(message)    
}
  
/*39. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) */
function exercise39() 
{    
    const iterations = 5000
    let piApproximate = 0
    for (let i = 0; i < iterations; i++) {
      const term = 4 / (2 * i + 1);
      if (i % 2 == 0) {
        piApproximate += term
      } else {
        piApproximate -= term
      }
    }
    let message = `Ejercicio 39\n\nAproximación de Pi con ${iterations} iteraciones: ${piApproximate}`
    alert(message)
  }
  
/*40. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:
Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - (4/(12*13*14) */
function exercise40() 
{ 
    const iterations = 5000

    let piApproximate = 3;
    let signo = 1;
    let denominator1 = 2;
    let denominator2 = 3;
    let denominator3 = 4;
  
    for (let i = 0; i < iterations; i++) {
      const term = (4 / (denominator1 * denominator2 * denominator3)) * signo;
      piApproximate += term;
  
      denominator1 += 2;
      denominator2 += 2;
      denominator3 += 2;
      signo *= -1;
    }
  
    alert(`Ejercicio 40\n\nAproximación de Pi con ${iterations} iteraciones: ${piApproximate}`);
  }
  
  

  
  
  

