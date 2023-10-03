const productos = []

const getProducts = async () =>{
    setTimeout( async ()=>{
        const productosLlamados = await fetch('../database/products.json').then(response => response.json())
        for(const producto of productosLlamados){
            productos.push(producto)
        }
        renderDetail()
    }, 1000)
   
}






const renderDetail = () =>{
    const urlSearch = new URLSearchParams(window.location.search)
    const idProduct = urlSearch.get('idProduct')
    const productFound = productos.find(product => product.id == idProduct)
    document.write(productFound.titulo)
}

getProducts()