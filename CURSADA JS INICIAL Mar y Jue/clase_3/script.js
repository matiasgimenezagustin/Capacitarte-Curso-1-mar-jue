/* 
Arrays
Objetos
for of
funciones
metodos de array
*/

const array = ['pepe', 'juan', 'lucas']
console.log(array)
/* console.log(array[0])
console.log(array[1])
console.log(array[2]) */

for(let i = 0; i <= 2; i++){
    console.log(array[i], i)
}
console.log('EL valor que hay en la posicion 0 de mi array es: ' +  numeros[0])
console.log('EL valor que hay en la posicion 1 de mi array es: ' +  numeros[1])


const numeros = [2, 3, 45, 3, 2, 9, 8, 23, 21, 42, 53, 32]

console.log('la cantidad de elementos es: ' + numeros.length)

let result = 0

for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
    result = result + numeros[i]
}
console.log('El resultado de tus ganancias totales es: $' + result)





















/* 
SUGAR SYNTAX

let numero = 0
numero = numero + 1
numero += 1
numero -= 2
numero++
numero--
console.log('Tu numero es: ' + numero) 
*/