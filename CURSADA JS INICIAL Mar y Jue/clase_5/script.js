const products = [
    {
        nombre: 'Tv Samsung 32"',
        precio: 40000,
        id: 0,
        categoria: 'tv'
    },
    {
        nombre: 'Tv Samsung 40"',
        precio: 50000,
        id: 1,
        categoria: 'tv'
    },
    {
        nombre: 'Monitor 15"',
        precio: 30000,
        id: 2,
        categoria: 'monitor'
    },
    {
        nombre: 'Monitor 24"',
        precio: 80000,
        id: 3,
        categoria: 'monitor'
    },
    {
        nombre: 'Tablet 8"',
        precio: 35000,
        id: 4,
        categoria: 'tablet'
    },
    {
        nombre: 'Tablet 6"',
        precio: 25000,
        id: 5,
        categoria: 'tablet'
    },
    {
        nombre: 'Tablet 7"',
        precio: 27000,
        id: 'x24',
        categoria: 'tablet'
    }
]

/* Agregar un elemento a un array */
//push
//unshift
/* products.push(
        {
            nombre: 'pc dell 14"',
            precio: 270000,
            id: 6,
            categoria: 'pc'
        }
    )
products.unshift(
    {
        nombre: 'pc acer 14"',
        precio: 280000,
        id: 7,
        categoria: 'pc'
    }
) */

/* Eliminar elementos de un array */
//pop ELIMINA EL ULTIMO ELEMENTO DE UN ARRAY Y LO DEVUELE

/* const productoEliminado = products.pop()
console.log(productoEliminado) */

//shift ELIMINA EL PRIMER ELEMENTO DE UN ARRAY Y LO DEVUELE

/* const primerElementoEliminado = products.shift()
console.log(primerElementoEliminado) */



/* FindIndex es un metodo que nos sirve para buscar la posicion de un elemento */
const posicionProducto2 = products.findIndex((producto)=> producto.id == 1)
const posicionProducto = products.findIndex((producto)=>{
    return producto.id == 1
})

products.splice(posicionProducto, 1,  {
    nombre: 'Tablet 7"',
    precio: 27000,
    id: 6,
    categoria: 'tablet'
},
)
/* delete products[posicionProducto ] */

/* SPLICE recibe desde donde empezar a eliminar, cuantos y a quien quiero agregar (si no queremos agregar a nadie lo dejamos vacio) */







//ARROW FUNCTIONS o funciones en flecha

/* const saludar = (nombre) => {
    let apellido = prompt('dame tu apellido')
    return 'hola ' + nombre + ' ' + apellido
}
 */
/* console.log(saludar('pepe')) */

/* const sumar = (a, b) =>  a + b
 */

/* const calcularIva = (precio, moneda) => precio * 1.21 + moneda
 */
/* console.log(sumar(5, 7)) */
/* console.log(calcularIva(700, 'USD')) */



console.log(products)


/* Dado el array de productos hacer las sig funciones (Las funciones deben ser escritas en flecha)
eliminarProductoPorId(id) recibe un id y elimina el producto del array
agregarProducto(producto) recibe un producto y lo agregega al array de productos

*/


const eliminarProductoPorId = (id) =>{
    let posProductoAEliminar = products.findIndex((product) => product.id == id)
    products.splice(posProductoAEliminar, 2)
}

eliminarProductoPorId(2)
/* eliminarProductoPorId('x24') */
/* const agregarProducto = (producto) =>{
    products.push(producto)
    console.log('Producto agregado')
}
agregarProducto({
    nombre: 'Tablet 10"',
    precio: 40000,
    id: 10,
    categoria: 'tablet'
}) */