function agregarAlCarrito(productoId,stock){
    console.log('se ha agregado el producto numero '+productoId)
    debugger
    addProduct(productoId,stock)
}

function addProduct(productoId,stock){
    
    let products = [];
    if(localStorage.getItem('order')){
        products = JSON.parse(localStorage.getItem('order'));
        debugger

        if(EstaAgregado(productoId,stock)){
            alert('Se ha incrementado en 1 la cantidad del elemento con id: '+productoId)
        }
        else{
            products.push({'productId' : productoId,'cantidad' : 1});
            localStorage.setItem('order', JSON.stringify(products));
            alert('Se ha agregado exitosamente el elemento al carrito')
        }
    }
    
}

function EstaAgregado(productoId,stock){
    let products = [];
    if(localStorage.getItem('order')){
        products = JSON.parse(localStorage.getItem('order'));
    }
    for (var i = 0; i < Object.keys(products).length; i++) {
        if (products[i].productId==productoId) {
            let productoTemporal ={
                "productId":products[i].productId,
                "cantidad":products[i].cantidad+1
            }
            if (products[i].cantidad>=stock) {
                alert('No hay stock suficiente para vender lo solicitado')
                return false
            }
            else{
                products.splice(i, 1);
                products.push(productoTemporal)
                localStorage.setItem('order', JSON.stringify(products));
                return true
            }
        }
     }
}