
function calcularIva (precio){
    return precio * 1.21
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
]

const productosContenedor = document.getElementById('productos')

function renderizarProductos (productos){
    let productosHTML = ''
    if(productos.length == 0){
        productosHTML = 'No hay resultados disponibles para tu busqueda :('
    }else{
        for(const producto of productos){
            productosHTML += `
                <div>
                    <h2>${producto.nombre}</h2>
                    <h3>Precio: $${producto.precio}</h3>
                    <h3>Precio con iva: $${calcularIva(producto.precio)}</h3>
                    <h3>Stock: ${producto.stock}</h3>
                    <button>Comprar</button>
                    <hr>
                </div>
            `
        }
        
    }
    productosContenedor.innerHTML = productosHTML
}

function filtrarPorMenorA(precioMaximo, productos){
    const result = []
    for(const producto of productos){
        if(producto.precio <=precioMaximo){
            result.push(producto)
        }
    }
    return result
    
}
let precioMaximo = prompt('ingresa un valor maximo que estas dispuesto a gastar')
renderizarProductos(filtrarPorMenorA(precioMaximo, productos))

/* Utilizando el mismo array de carrito van a generar un div con id carrito en html, lo van a llamar y van a renderizar dentro de el todos los items */