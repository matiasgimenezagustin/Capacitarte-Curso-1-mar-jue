function saludar(nombre){
    console.log('hola ' + nombre)
}
function sumar (a, b){
    return a + b
}
saludar('juan')
saludar('daniel')

/* console.log(sumar(3, 4))
alert(sumar(5, 5)) */

/* Crear una funcion llamada calcular iva, que nos devuelva el 21% del numero pasado por parametro */

function calcularIva (precio){
    return precio * 0.21
}

console.log('El iva del producto es: $' + calcularIva(80))

/* 
Crear la funcion llamada conocerse
pediremos el nombre al usuario
Una vez lo tengamos diremos por alerta 'hola ' + nombreSolicitado
*/
/* function conocerse (){
    let nombre = prompt('ingresa tu nombre')
    alert('hola ' + nombre)
}

conocerse()
 */


/* Crear una funcion que se llame mostrar datos, que reciba un objeto y nos muestre por consola los datos en el sig formato
-----------\nNombre: nombre\nEdad: edad\nDNI: dni\n-----------

*/

/* function mostrarDatos (user) {
    console.log('-----------\nNombre: '+ user.nombre + '\nEdad: ' + user.edad + '\nDNI: '+ user.dni +'\n-----------')
}

mostrarDatos(user) */


const user = {
    nombre: 'pepe',
    edad: 60,
    dni: 23543543
}

function renderizarUsuario(usuario){
    let resultHTML = `
        <div class='caja'>
            <h2>Usuario: ${usuario.nombre}</h2>
            <h3>Edad: ${usuario.edad}</h3>
            <h3>Dni: ${usuario.dni}</h3>
            <button>Ver detalle</button>
            <hr>
        </div>
    `
    console.log(resultHTML)
    document.write(resultHTML)
}

renderizarUsuario(user)

const product = {
    nombre: 'manzana',
    precio: 500,
    stock: 60
}

/* 
Crear una funcion llamada renderizarProducto que reciba un producto y genere en una variable todo el html string para luego usar la funcion document.write() y ver el producto en HTML

El formato sera el sig

div
    h2 -nombre
    h3 -precio
    h3 -stock
    button -comprar producto
/div

*/
function renderizarProducto(producto){
    let productHTML = `
        <div class='caja'>
            <h2>Producto: ${producto.nombre}</h2>
            <h3>Precio: $${producto.precio}</h3>
            <h3>Stock: ${producto.stock}</h3>
            <button>Comprar producto</button>
        </div>
    `
    document.write(productHTML)
}

const productos = [
    {
        nombre: 'manzana',
        precio: 500,
        stock: 60
    },
    {
        nombre: 'pera',
        precio: 600,
        stock: 40
    },
    {
        nombre: 'sandia',
        precio: 700,
        stock: 10
    },
    {
        nombre: 'sandia',
        precio: 700,
        stock: 10
    },
    {
        nombre: 'sandia',
        precio: 700,
        stock: 10
    },
    {
        nombre: 'sandia',
        precio: 700,
        stock: 10
    }
]

function renderizarProductos(productos){
    let productsHTML = ''
    for(const producto of productos){
        productsHTML = productsHTML + `
            <div class='caja'>
                <h2>Producto: ${producto.nombre}</h2>
                <h3>Precio: $${producto.precio}</h3>
                <h3>Stock: ${producto.stock}</h3>
                <button>Comprar producto</button>
            </div>
        `
    }
    console.log(productsHTML)
    document.write(productsHTML)
}

renderizarProductos(productos)

document.write('<h1>Hola</h1>')



const carrito = [
    {
        nombre: 'tv samsung',
        precio: 50000,
        cantidad: 1
    },
    {
        nombre: 'Play 5',
        precio: 500000,
        cantidad: 2
    },
    {
        nombre: 'Silla de plastico',
        precio: 30000,
        cantidad: 5
    },
]

/* 
Crear la funcion renderizarCarrito de compras que reciba un array carrito y lo renderize con el sig formato

<div>
    <h2>nombreProd</h2>
    <h3>Precio: $</h3>
    <span>Cantidad: </span>
    <button>eliminar</button>
<hr>
</div>


*/