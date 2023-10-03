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




const urlSearch = new URLSearchParams(window.location.search)

const idProduct = urlSearch.get('idProduct')


const productFound = productos.find(product => product.id == idProduct)

console.log(productFound)