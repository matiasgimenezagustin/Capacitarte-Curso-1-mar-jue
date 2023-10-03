const productos = [
    {
        titulo: 'tv samsung 28"',
        precio: 300000,
        id: 1,
        descripcion: 'bla bla bla bla bla bla bla',
        sotck: 30,
        rating: 3,
        image: 'tv.avif'
    },
    {
        titulo: 'tv samsung 28"',
        precio: 300000,
        id: 2,
        descripcion: 'bla bla bla bla bla bla bla',
        sotck: 30,
        rating: 3,
        image: 'tv.avif'
    },
    {
        titulo: 'tv samsung 28"',
        precio: 300000,
        id: 3,
        descripcion: 'bla bla bla bla bla bla bla',
        sotck: 30,
        rating: 3,
        image: 'tv.avif'
    },
    {
        titulo: 'tv samsung 28"',
        precio: 300000,
        id: 4,
        descripcion: 'bla bla bla bla bla bla bla',
        sotck: 30,
        rating: 3,
        image: 'tv.avif'
    },
]


const renderProducts = () =>{
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

const productListHTML = document.querySelector('.productsList')

renderProducts()