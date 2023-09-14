const nombres = ['pepe', 'lucas', 'juan', 'lucas', 'lucas']

/* 
Recorre el array para que por consola podamos saludar a todos los nombres de la lista nombres 
*/

/* 
Vamos a ver cuantos lucas hay en nuestro array, para ello recorre el array de nombres y por cada vez que haya un lucas deberas incrementar el contadorDeLucas en 1
*/

/* 
Vamos a ver cuantas letras nos da suma de la cantidad de letras de todos nuestros nombres

por ejemplo: 'lucas' (tiene 5 caracteres) + 'pepe' (tiene 4 caracteres)
El resultado de la suma de todas las letras de mi array de nombres es: 9


Recomendacion:
recuerda que puedes hacer 'hola'.length para saber la longitud de tu string 
*/

console.log('hola')

/* For of */
for(let nombre of nombres){
    console.log(nombre)
}

/* Sobre todos los ejercicios hacer una segunda version donde apliquemos el for of */
let contadorDeLucas = 0
for(let nombre of nombres){
    if(nombre == 'lucas'){
        contadorDeLucas++
    }
}
console.log('La cantidad de lucas es: ' + contadorDeLucas)


let cantidadTotalCaracteres = 0
for(let i = 0; i < nombres.length; i++){
    cantidadTotalCaracteres = cantidadTotalCaracteres + nombres[i].length
}
/* for(let nombre of nombres){
    cantidadTotalCaracteres += nombre.length
} */
console.log('la cantidad total de caracteres es: ' + cantidadTotalCaracteres)