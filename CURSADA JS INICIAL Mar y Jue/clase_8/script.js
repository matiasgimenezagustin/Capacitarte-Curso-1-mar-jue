const productos = []

const getProducts = async () =>{
    setTimeout( async ()=>{
        const productosLlamados = await fetch('./database/products.json').then(response => response.json())
        for(const producto of productosLlamados){
            productos.push(producto)
        }
        renderProducts()
    }, 1000)
   
}


const renderProducts = () =>{
    if(productos.length == 0){
        productListHTML.innerHTML = '<h2>Cargando</h2>'
    }
    else{
        let resultHTML = ''
        for(const product of productos){
            resultHTML += `
            <div class='productCard'>
                <div class='cardImgContainer'>
                    <img src='./images/${product.image}'/>
                </div>
                <div class='cardInfo'>
                    <h2>${product.titulo}</h2>
                    <h3>Precio: $${product.precio}</h3>
                    <p>${product.descripcion}</p>
                    <a href='./pages/detail.html?idProduct=${product.id}'>Ver mas</a>
                </div>
            </div>
            `
        }
        productListHTML.innerHTML = resultHTML
    }
}

const productListHTML = document.querySelector('.productsList')

renderProducts()
getProducts()