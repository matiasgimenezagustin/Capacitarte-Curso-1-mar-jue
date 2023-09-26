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

const productosContenedorHTML = document.getElementById('productosContenedor')

const renderProducts = () =>{
    let resultHTML = ''
    for(let product of products){
        resultHTML += `
            <div>
                <h2>${product.nombre}</h2>
                <h3>Precio: $${product.precio}</h3>
                <a href='./detail.html?productId=${product.id}'>Ver detalle</a>
                <hr>
            </div>
        `
    }
    productosContenedorHTML.innerHTML = resultHTML
}

renderProducts()

/* Search param = parametro de busqueda */