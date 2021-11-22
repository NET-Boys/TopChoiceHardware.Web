function agregarAlCarrito(productoId){
    console.log('se ha agregado el producto numero '+productoId)
    addProduct(productoId)
}


function addProduct(productoId){
    
    let products = [];
    if(localStorage.getItem('products'))
        products = JSON.parse(localStorage.getItem('products'));
        if(EstaAgregado(productoId)){
            alert('Se ha incrementado en 1 la cantidad del elemento con id: '+productoId)
        }
        else{
            products.push({'productId' : productoId,'cantidad' : 1});
            localStorage.setItem('products', JSON.stringify(products));
            alert('Se ha agregado exitosamente el elemento al carrito')
        }
    
}

function EstaAgregado(productoId){
    let products = [];
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'));
    }
    for (var i = 0; i < Object.keys(products).length; i++) {
        
        if (products[i].productId==productoId) {
            let productoTemporal ={
                "productId":products[i].productId,
                "cantidad":products[i].cantidad+1
            }
            products.splice(i, 1);
            products.push(productoTemporal)
            localStorage.setItem('products', JSON.stringify(products));
            return true
        }
     }



    


}