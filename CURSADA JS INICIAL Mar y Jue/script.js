/* 
Es un lenguaje de programacion interpretado por el v8Engine.
JS ES UN LENGUAJE CASE SENSITIVE
JS tiene tipado dinamico
*/
/* typescript */

/* TIPOS DE DATOS Primitivos */

/* 
STRINGS : texto,  se escriben entre comillas: "", '', ``

Number: numeros, se escriben como numeros

Boolean : true o false

null

undefined
*/

/* Operaciones aritmeticas */

/* + */
/* Concatenacion debe devolver SIEMPRE un string y sucede cuando combinamos un string con cualquier otro tipo de dato  */

/* Suma debe devolver SIEMPRE un dato numerico y sucede cuando NO haya un string */


/* -, *, /, % */ 
/* Todas estos operadores deben devolver SIEMPRE un dato numerico */


/* 9 + 8 //number, 17

3 -  null //number, 3

'hola' +  '' //string, 'hola'

(true + true) + '' //string, '2'

true + (true + '') //string, 'truetrue'

NaN + NaN //number, NaN

100 % 2 //number, 0 */


/* Comparadores: SIEMPRE DEVUELVEN BOOLEANOS*/

/* 
==: igualdad
===: estricta igualdad
!=: diferencia
!==: estricta diferencia
>
<
>=
<=
*/

/* 5 == '5' //true

'a' == 'A' //false

true + false == true  //true

NaN != NaN //true

NaN == null //false

null == undefined //true

true === true //true

'55' === '5' + 5 //true
 */
/* Variables */


/* 
var
Tiene Hoisting
Se puede redeclarar
Se puede reasignar
Se inicializa implicitamente en undefined en caso de no tener un valor especificado

let (USAREMOS DE MOMENTO SIEMPRE LET)
No tiene hoisting
No se puede redeclarar
se puede reasignar
Se inicializa implicitamente en undefined en caso de no tener un valor especificado

cosnt
No tiene hoisting
No se puede redeclarar
No se puede reasignar
No se inicializa implicitamente en undefined en caso de no tener un valor especificado
*/

/* let nombre = prompt('Ingresame tu nombre')
let edad = prompt('ingrese su edad')
console.log( Number(edad) )
document.write('Hola ' + nombre)
 */

let nombre = 'juan'

if(nombre === 'juan'){
    console.log('Sos mi amigo juan')
}
else{
    console.log('No sos mi amigo')
}
/* 
Crear la variable edad y solicitar al usuario un numero
si la edad es mayor o igual a 18 decir por consola 'sos mayor de edad'

sino decir por consola 'Sos menor de edad'
*/


