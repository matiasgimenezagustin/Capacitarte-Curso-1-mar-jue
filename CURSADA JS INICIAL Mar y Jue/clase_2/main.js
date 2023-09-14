/* 
    comentario
    multilinea = alt + shift + a
*/
//comentario una sola linea

/* Hacer 5 console log */

/* Accion a repetir */console.log('hola mundo')
/* Cuantas veces? 5 */

/* Aplico el bucle for */


/* SINTAXIS: */
for(let iterador = 1; iterador <= 5; iterador = iterador + 1){
    console.log('hola mundo')
}
console.log('se murio mi bucle')

/* Solicitar 5 nombres y que nos diga 'hola jefe' por alerta si el nombre es 'pedro' */
/* Accion a repetir: solicitar nombre */


/* PRINCIPIO DRY = Dont Repeat yourself = no te repitas */


/* let nombre = prompt('dame tu nombre')
if(nombre == 'pepe'){
    alert('hola jefe')
}
 */
/* 
1)Imprime los números del 1 al 10
2)Imprime los números pares del 2 al 20
3)Imprime los números impares del 1 al 19
4)Imprime los números del 10 al 1 en orden inverso

 */


/* let nombre = prompt('dime tu nombre')

if(nombre == 'pedro'){
    for(let i = 1; i <= 5; i = i +1){
        console.log('hola jefe')
    }
} */

/* solicitar 3 numeros y mostrar la suma de estos 3 numeros por consola */

/* Accion a repetir: solicitar los numeros e ir sumando */
/* cuantas veces vamos a repetir: 3 */

/* let resultado = 0
for(let i = 1; i <= 3; i = i + 1){
    let numero = prompt('dame un numero')
    if(isNaN(numero)){
        alert('Error: debes ingresar un valor numerico')
    }else{
        resultado =  resultado + Number(numero) 
    }
    
}
console.log('El resultado es: ' + resultado) */

/* Solicitar 5 precios y sumarlos si son mayores a 1000 */
/* Validar que se escriban numeros, debera salir un error de no ser asi (USAR isNaN)*/
/* Mostrar al final del bucle el resultado por consola */

let mensaje = 'hola, soy pepe, me gusta desarrollar con JS'

/* Saber la long de un string */

console.log('La cantidad de caracteres del mensaje es: ' + mensaje.length)

/* Saber si hay una plabara incluida */

console.log(mensaje.includes('pepe'))

/* Pasar el mensaje a mayusculas */

console.log(mensaje.toUpperCase()) /* toLowerCase pasa a minusculas */

console.log(mensaje.replaceAll(' ', '-'))

console.log('hola'.repeat(3))

/*Solicitar una direccion y verificar
Si la direccion tiene 'http://' entonces es una direccion valida y diremos por consola 'direccion valida'

Si la direccion tiene https:// entonces es una direccion valida y segura y diremos por consola 'direccion con certificado SSL

Si la direccion no tiene ni http o https entonces diremos 'ERROR: direccion invalida)

*/
let direccion = 'http://hola'
if(direccion.includes('http://')){
    console.log('Es una direccion valida')
}
else if(direccion.includes('https://') ){

}
else{

}

/* 
En caso de que un mensaje diga '[mensaje oculto]' debera remplazar todos los '[mensaje oculto]' por una cantidad de * igual a la mitad de la long del mensaje original

mensaje = 'hola, me llamo juan y me gusta [mensaje oculto]'
'hola, me llamo juan y me gusta *********(hasta 21)
*/

console.log('Hola ' + '*'.repeat('Hola '.length / 2))


'hola mundo [mensaje oculto]'
'hola mundo *************'

let texto =  'hola mundo [mensaje oculto]'

if(texto.includes('[mensaje oculto]')){
    let cantidadDeAsteriscos = texto.length / 2
    console.log(texto.replace('[mensaje oculto]', '*'.repeat(cantidadDeAsteriscos)))
}

const insultos = ['bobo', 'tonto', 'mate dulce']

let mensaje2 = 'anda pa alla bobo y toma mate dulce'
let insulto = 'bobo'

if(mensaje2.includes(insulto)){
    console.log(mensaje2.replaceAll('bobo', '*'.repeat(insulto.length)))
}

for(let insulto of insultos){
    
    if(mensaje2.includes(insulto)){
        mensaje2 = mensaje2.replaceAll(insulto, '*'.repeat(insulto.length))
    }
}
console.log(mensaje2)


/* FOR OF: recorrer strings o arrays*/

let mensaje3 = 'holaaaa'

let acumuladorA = 0
for(let letra of mensaje3){
    if(letra == 'a'){
        acumuladorA = acumuladorA + 1
    }
}

console.log('hay ' + acumuladorA + ' letras A en tu mensaje')

/* Contabilizar la cantidad de vocales que hay en un mensaje
'Hola a todos, como estan?'

contabilizar la cantidad de '😴' y '😎' en un mensaje
Si la cantidad de '😴' es mayor a '😎' entonces decir por consola 'me voy a dormir'
Si la cantidad de '😎' es mayor a '😴' entonces decir por consola 'voy a programar'
Si son iguales decir 'me voy a tomar un cafe ☕'

Ejemplo: 
'😴😴😴😎😎' // me voy a dormir
'😴😎😎' //voy a programar
'😴😎' // 'me voy a tomar un cafe ☕'
*/

/* Tablas de la verdad */

/* AND, OR, NOT */

//si tu nombre es 'pedro' o tu edad es mayor a 18 te dejare pasar

/* let nombre = 'juan'
let edad = 14 */

/* if(edad > 18 || nombre == 'pedro'){
    console.log('te dejo pasar')
} */

/* if(edad > 18 && nombre == 'joaco'){
    console.log('te dejo pasar')
} */


/* Cambiar al estado opuesto de la luz */

let estaEncendidaLaLuz = true
estaEncendidaLaLuz = !estaEncendidaLaLuz
estaEncendidaLaLuz = !estaEncendidaLaLuz
estaEncendidaLaLuz = !estaEncendidaLaLuz
if(estaEncendidaLaLuz){
    console.log('ilumino')
}else{
    console.log('oscuresco')
}

let mensaje5 = '5'

if(!isNaN(mensaje5)){
    console.log('Es un number')
}