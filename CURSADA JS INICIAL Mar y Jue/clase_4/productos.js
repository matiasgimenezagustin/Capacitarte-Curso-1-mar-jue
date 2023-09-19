

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
]

const productosContenedor = document.getElementById('productos')

function renderizarProductos (productos){
    let productosHTML = ''
    for(const producto of productos){
        productosHTML += `
            <div>
                <h2>${producto.nombre}</h2>
                <h3>Precio: $${producto.precio}</h3>
                <h3>Stock: ${producto.stock}</h3>
                <button>Comprar</button>
                <hr>
            </div>
        `
    }
    productosContenedor.innerHTML = productosHTML
}

renderizarProductos(productos)

/* Utilizando el mismo array de carrito van a generar un div con id carrito en html, lo van a llamar y van a renderizar dentro de el todos los items */