

let nombreUsuario = 'pepe'
let edadUsuario = 70
let mailUsuario = 'pepe@gmail.com'

const usuario = {
    nombre: 'pepe',
    edad: 70,
    mail: 'pepe@gmail.com',
    'localizacion actual': 'av. siempre viva',
    dineroActual: 800,
    palabrasFavoritas: ['hola', 'chau'],
    fechaDeRegistro: new Date().toLocaleDateString(),
    mejorAmigo: {
        nombre: 'juan',
        dinero: 30
    }
}




console.log(usuario)
console.log(usuario.nombre)
console.log(usuario['localizacion actual'])

'2023/09/06'
/* 
Crear 3 objetos:
pais (pib, dineroEnReserva, nombre, continente, estaEnGuerra)
usuario (contraseña, nombre, mail, fechaDeRegistro)
producto (nombre, precio, coloresDisponibles (es un arr de colores), stock)
computadora (nombre, marca, procesador (objeto que tendra precio y nombre))
*/
