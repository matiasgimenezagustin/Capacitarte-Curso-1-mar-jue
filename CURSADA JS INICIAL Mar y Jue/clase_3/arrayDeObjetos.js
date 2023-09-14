const usuarios = [
    {
        nombre: 'pepe',
        apellido: 'suarez'
    },
    {
        nombre: 'maria',
        apellido: 'escobar'
    }
]


console.log(usuarios)


/* 
Crear 3 arrays de objetos con las sig estructuras con almenos dos objetos por array: 
paises (pib, dineroEnReserva, nombre, continente, estaEnGuerra)
usuarios (contraseña, nombre, mail, fechaDeRegistro)
productos (nombre, precio, coloresDisponibles (es un arr de colores), stock)
computadoras (nombre, marca, procesador (objeto que tendra precio y nombre))
*/

const productos = [
    {
        nombre: 'zanahoria',
        precio: 400,
    },
    {
        nombre: 'papa',
        precio: 300
    }
] 

for(const producto of productos ){
    console.log('El producto ' + producto.nombre + ' cuesta $' + producto.precio)
}

const carritoDeCompras = [
    {
        nombre: 'zanahoria',
        precio: 400,
        cantidad: 3
    },
    {
        nombre: 'papa',
        precio: 300,
        cantidad: 2
    }
]

let total = 0

for(const item of carritoDeCompras){
    total = total  + item.cantidad * item.precio
}

console.log('El total del carrito es: $' + total)

