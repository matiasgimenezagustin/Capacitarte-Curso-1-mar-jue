const products = [
    {
        nombre: 'Tv Samsung 32"',
        precio: 40000,
        tamano: 32,
        id: 0,
        categoria: 'tv'
    },
    {
        nombre: 'Tv Samsung 40"',
        precio: 50000,
        tamano: 32,
        id: 1,
        categoria: 'tv'
    },
    {
        nombre: 'Monitor 15"',
        precio: 30000,
        tamano: 32,
        id: 2,
        categoria: 'monitor'
    },
    {
        nombre: 'Monitor 24"',
        precio: 80000,
        tamano: 32,
        id: 3,
        categoria: 'monitor'
    },
    {
        nombre: 'Tablet 8"',
        precio: 35000,
        tamano: 32,
        id: 4,
        categoria: 'tablet'
    },
    {
        nombre: 'Tablet 6"',
        precio: 25000,
        tamano: 32,
        id: 5,
        categoria: 'tablet'
    },
    {
        nombre: 'Tablet Samsung 7"',
        precio: 27000,
        tamano: 32,
        id: 'x24',
        categoria: 'tablet'
    }
]

//dame todos los productos que sean categoria tablets

/* const tablets = []

for(const producto of products){
    if(producto.categoria == 'tablet'){
        tablets.push(producto)
    }
} */

/* const tablets = products.filter((producto) => producto.nombre.includes('32"'))
const prodId4 = products.find((producto) => producto.id == 4)
const existeProdId4 = products.some((producto) => producto.id == 40)
const todosSonComprables = products.every((producto) => producto.precio < 89000) */

let nombreProductoBuscado = prompt('Escriba el nombre de su producto')
const productosBuscados = products.filter((producto) => producto.nombre.toLowerCase().includes(nombreProductoBuscado.toLowerCase()))
console.log(productosBuscados)

/* 
Dame a todos los productos que tengan un precio mayor a 30000 pero menor a 60000 //filter
Decime si existe el producto con una categoria 'tecnologia' //some
Dame a todos los productos que tengan samsung en el nombre  //filter
Decime si todos los productos tienen un precio mayor a 13000 //every
Dame al producto con id 3 //find
*/