/* localStorage.setItem('cart', JSON.stringify([])) */
const cart = []

/* Verificamos si existe algun carrito en el local Storage */
const cartFromLocalStorage = localStorage.getItem('cart')
if(cartFromLocalStorage){
    console.log('existe mi carrito')
    /* Si existe voy a guardar cada item en mi cart */
    const carritoFromLocalStorage = JSON.parse(localStorage.getItem('cart'))
    for(let item of carritoFromLocalStorage){
        cart.push(item)
    }
}
else{
    /* Si no existe, creo uno guardando un array vacio */
    console.log('no existe mi carrito')
    localStorage.setItem('cart', JSON.stringify([]))
}

const products = [
    {
        nombre: 'Tv Samsung 32"',
        precio: 40000,
        id: 0,
        categoria: 'tv',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloremque recusandae, dolorum fuga beatae debitis. Quos dolore ducimus debitis eveniet saepe corrupti, consequuntur, doloremque explicabo ex neque, molestias magnam sit?',
        coloresDisponibles: ['red', 'blue', 'pink']
    },
    {
        nombre: 'Tv Samsung 40"',
        precio: 50000,
        id: 1,
        categoria: 'tv',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloremque recusandae, dolorum fuga beatae debitis. Quos dolore ducimus debitis eveniet saepe corrupti, consequuntur, doloremque explicabo ex neque, molestias magnam sit?',
        coloresDisponibles: ['red', 'blue', 'pink']
    },
    {
        nombre: 'Monitor 15"',
        precio: 30000,
        id: 2,
        categoria: 'monitor',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloremque recusandae, dolorum fuga beatae debitis. Quos dolore ducimus debitis eveniet saepe corrupti, consequuntur, doloremque explicabo ex neque, molestias magnam sit?',
        coloresDisponibles: ['red', 'blue', 'pink']
    },
    {
        nombre: 'Monitor 24"',
        precio: 80000,
        id: 3,
        categoria: 'monitor',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloremque recusandae, dolorum fuga beatae debitis. Quos dolore ducimus debitis eveniet saepe corrupti, consequuntur, doloremque explicabo ex neque, molestias magnam sit?',
        coloresDisponibles: ['red', 'blue', 'pink']
    },
    {
        nombre: 'Tablet 8"',
        precio: 35000,
        id: 4,
        categoria: 'tablet',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloremque recusandae, dolorum fuga beatae debitis. Quos dolore ducimus debitis eveniet saepe corrupti, consequuntur, doloremque explicabo ex neque, molestias magnam sit?',
        coloresDisponibles: ['red', 'blue', 'pink']
    },
    {
        nombre: 'Tablet 6"',
        precio: 25000,
        id: 5,
        categoria: 'tablet',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloremque recusandae, dolorum fuga beatae debitis. Quos dolore ducimus debitis eveniet saepe corrupti, consequuntur, doloremque explicabo ex neque, molestias magnam sit?',
        coloresDisponibles: ['red', 'blue', 'pink']
    },
    {
        nombre: 'Tablet 7"',
        precio: 27000,
        id: 'x24',
        categoria: 'tablet',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloremque recusandae, dolorum fuga beatae debitis. Quos dolore ducimus debitis eveniet saepe corrupti, consequuntur, doloremque explicabo ex neque, molestias magnam sit?',
        coloresDisponibles: ['red', 'blue', 'pink']
    }
]

/* String con los parametros de busqueda */
let direccionDeBusqueda = window.location.search

const urlSearchParams = new URLSearchParams(direccionDeBusqueda)

let productId = urlSearchParams.get('productId')

//buscar un producto por id

const productFound = products.find(product => product.id == productId)

const resultHTML = document.getElementById('result')

const renderProductDetail = () =>{
    let controls = `<button id='btn-comprar'>Comprar</button>`

    /* Si ya esta comprado el producto */
    if(cart.some(product => product.id == productFound.id)){
        const productFromCart = cart.find(product => product.id == productFound.id)
        controls = `
            <div>
                <button id='btn-eliminar-producto'>-</button>
                <span>${productFromCart.cantidad}</span>
                <button id='btn-agregar-producto'>+</button>
            </div>
        `
    }
    resultHTML.innerHTML = `
        <h2>${productFound.nombre}</h2>
        <div>Precio: $${productFound.precio}</div>
        <div>${productFound.categoria}</div>
        <p>${productFound.description}</p>
        ${controls}
    `

    /* Si el producto ya esta comprado entonces no quiero que se llame al boton de comprar */
    if(!cart.some(product => product.id == productFound.id)){
        const btnComprar = document.getElementById('btn-comprar')

        btnComprar.addEventListener('click', () =>{
            /* Esta es la accion de darle click al boton comprar */
            productFound.cantidad = 1
            cart.push(productFound)
            actualizarCarrito()
        })
    
    }
    else{
        const btnAgregar = document.getElementById('btn-agregar-producto')
        const btnRestar = document.getElementById('btn-eliminar-producto')


        /* Accion de boton de resta */
        btnRestar.addEventListener('click', ()=>{
            const productFromCart = cart.find(product => product.id == productFound.id)
            if(productFromCart.cantidad == 1){
                let posicionProducto = cart.findIndex(product => product.id == productFound.id)
                cart.splice(posicionProducto, 1)
            }else{
                productFromCart.cantidad = productFromCart.cantidad - 1
            }
            actualizarCarrito()
        })

        /* Accion de boton de suma */
        btnAgregar.addEventListener('click', ()=>{
            const productFromCart = cart.find(product => product.id == productFound.id)
            productFromCart.cantidad = productFromCart.cantidad + 1
            actualizarCarrito()
        })
    }

}

renderProductDetail()


const actualizarCarrito = () =>{
    localStorage.setItem('cart', JSON.stringify(cart))
    renderProductDetail()
}