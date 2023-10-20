/* RETO 01 */
//1. Crea una función que retorne la suma de dos números.
const r1_exercise1 = () => 
{
    let n1 = parseInt(prompt("Ejercicio 1: Crea una función que retorne la suma de dos números.\n\nIngresa primer número:"))
    let n2 = parseInt(prompt("Ejercicio 1: Crea una función que retorne la suma de dos números.\n\nIngresa segundo número:"))
    let addition= !isNaN(n1) && !isNaN(n2) ? n1 + n2 : undefined
    let message= addition != undefined ? `La suma de ${n1} y de ${n2} es: ${addition}.` : 'Debe ingresar números válidos.'
    alert(message)
}

//2. Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.
const r1_exercise2 = () =>
{
    let n1 = parseInt(prompt("Ejercicio 2: Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.\n\nIngresa número base:"))
    let n2 = parseInt(prompt("Ejercicio 2: Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.\n\nIngresa número exponente:"))
    let power= !isNaN(n1) && !isNaN(n2) ? Math.pow(n1,n2) : undefined
    let message= power != undefined ? `La potencia de ${n1} elevado a la ${n2} es: ${power}.` : 'Debe ingresar números válidos.'
    alert(message)
}

//3. Crea una función que tome números y devuelva la suma de sus cubos.
const r1_exercise3 = () =>
{
    let n = parseInt(prompt("Ejercicio 3: Crea una función que tome números y devuelva la suma de sus cubos.\n\nIngresa número:"))

    if (isNaN(n) || n < 0) {
        alert('Debe ingresar número válido.')
        return         
    }

    let sumCubes=0;
    for (let i = 0; i <=n ; i++) {
        sumCubes += Math.pow(i,3);        
    }
    
    let message= `La suma de cubos de los ${n} primeros números es ${sumCubes}.` 
    alert(message)
}

//4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área.
const r1_exercise4 = () =>
{
    let base = parseInt(prompt("Ejercicio 4: Escribe una función que tome la base y la altura de un triángulo y devuelva su área.\n\nIngresa número base:"))
    let height = parseInt(prompt("Ejercicio 4: Escribe una función que tome la base y la altura de un triángulo y devuelva su área.\n\nIngresa número altura:"))
    let area= !isNaN(base) && !isNaN(height) ? (base*height)/2 : undefined
    let message = area != undefined ? `El área del triángulo de base ${base} y de altura ${height} es ${area}.` : 'Debe ingresar números válidos.' 
    alert(message)
}

//5. Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación. 
const r1_exercise5 = () =>
{
    let n1 = parseInt(prompt("Ejercicio 5: Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación.\n\nIngresa primer número:"))
    let n2 = parseInt(prompt("Ejercicio 5: Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación.\n\nIngresa segundo número:"))
    let option = parseInt(prompt("Ejercicio 5: Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación.\n\nIngresa operación:\n\n1: Suma.\n\n2: Resta.\n\n3: Multiplicación.\n\n4: División."))
    let result = 0
    let message = ''
    switch(option){
        case 1:
            result = !isNaN(n1) && !isNaN(n2) ? n1 + n2 : undefined
            message = result != undefined ? `La suma de ${n1} y de ${n2} es: ${result}.` : 'Debe ingresar números válidos.'
            break
        case 2:
            result = !isNaN(n1) && !isNaN(n2) ? n1 - n2 : undefined
            message = result != undefined ? `La resta de ${n1} y de ${n2} es: ${result}.` : 'Debe ingresar números válidos.'
            break
        case 3:
            result = !isNaN(n1) && !isNaN(n2) ? n1 * n2 : undefined
            message = result != undefined ? `La multiplicación de ${n1} y de ${n2} es: ${result}.` : 'Debe ingresar números válidos.'
            break
        case 4:
            result = !isNaN(n1) && !isNaN(n2) ? n2 != 0 ? n1 / n2: undefined : undefined
            message = result != undefined ? `La división de ${n1} y de ${n2} es: ${result}.` : n2 == 0 ? 'No se puede dividir entre cero.' : 'Debe ingresar números válidos.'
            break
        default:                      
            message = 'Debe ingresar una operación válida.'
    }

    alert(message)
}

/* RETO 02 */
/*1. Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y 
los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33 */
const r2_exercise1 = (name, lastName, age) =>
{    
    alert(`Hola mi nombre es ${name} ${lastName} y mi edad es ${age} años.`)
}

//2. Cree una función que tome números y devuelva la suma de sus cubos.
const r2_exercise2 = (...numbers) =>
{  
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + Math.pow(currentValue, 3), 0)
    alert(`La suma de cubos es ${sum}.`)  
}

//3. Crear una función que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js.
const r2_exercise3 = (value) =>
{  
    let typeValue = typeof value
    alert(`El tipo de dato es ${typeValue}.`)   
}

//4. Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
const r2_exercise4 = (...numbers) =>
{  
    const sum= numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    alert(`La suma es ${sum}.`)  
}

//5. Crear una función que reciba un array de valores y filtre los valores que no son string
const r2_exercise5 = (array) =>
{ 
    let result = array.filter((value) => typeof value == 'string')
    alert(result)
}

//6. Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
const r2_exercise6 = (array) =>
{ 
    const min = Math.min(...array)
    const max = Math.max(...array)
    alert(`El menor número es ${min} y el mayor número es ${max}.`)
}

//7. Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
const r2_exercise7 = (array) =>
{ 
    if(array.length != 10){
        alert("El array debe contener 10 dígitos.")
        return
    }
    const areaCode = array.slice(0,3).join('');
    const firstPart = array.slice(3,6).join('');
    const secondPart = array.slice(6).join('');
    alert(`(${areaCode}) ${firstPart}-${secondPart}`)
}

//8. Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
const r2_exercise8 = (array) =>
{ 
    let result = array.map(subArray => Math.max(...subArray));
    alert(result)
}

//9. Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
const r2_exercise9 = (word, letter) =>
{
    const firstIndice = word.indexOf(letter);
    const lastIndice = word.lastIndexOf(letter);
    alert(`El primer índice es ${firstIndice} y el último índice es ${lastIndice}.`)   
}

//10. Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
const r2_exercise10 = (object) =>
{
    let result = Object.entries(object);
    alert(result)
}

//11. Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.
const r2_exercise11 = (array) =>
{
    let result = array.reduce((accumulator, currentValue) => accumulator + currentValue.budget, 0);
    alert(`La suma del presupesto es de ${result.toFixed(2)}`)
}

//12. Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
const r2_exercise12 = (array) =>
{
    let result = array.map(student => student.name);
    alert(result)
}

//13. Escriba una función que convierta un objeto en una matriz de claves y valores.
const r2_exercise13 = (object) =>
{
    let result = Object.entries(object);
    alert(result)
}

//14. Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
const r2_exercise14 = (n) =>
{
    let sum = 0;
    for(i=1;i<=n;i++){
        sum += Math.pow(i, 2);
    }
    alert(`La suma de cuadrados de los ${n} primeros números es ${sum}.`)
}
