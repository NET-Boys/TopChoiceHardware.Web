function addToCart(productoId,stock){
    let cantidad= parseInt(document.getElementById("qty").value,10)
    agregarAlCarrito(productoId,stock,cantidad)
}

function agregarAlCarrito(productoId,stock,cantidad){
    let almacenamiento = localStorage.getItem('order')
    if(almacenamiento!=null){
        if (almacenamiento=="[]") {
            Agregar(productoId,stock,cantidad)
        }
        else{
            if(EstaAgregado(productoId,stock))
            {
                alert('El producto esta agregado')
                IncrementarCantidad(productoId,stock,cantidad)
            }
            else{
                Agregar(productoId,stock,cantidad)
            }
        }
    }
}

function EstaAgregado(productoId,stock){
    let products = [];
    debugger
    if(localStorage.getItem('order')){
        products = JSON.parse(localStorage.getItem('order'));
    }
    for (var i = 0; i < Object.keys(products).length; i++) {
        if (products[i].productId==productoId) {
            return true;
        }
    }
    return false
}

function Agregar(productoId,stock,cantidad){
    let productos=JSON.parse(localStorage.getItem('order'));
    let producto={
        "productId":productoId,
        "cantidad":cantidad
    }
    if (stock>=cantidad) {
        productos.push(producto)
        localStorage.setItem('order', JSON.stringify(productos));
        alert("Se agrego el producto correctamente");
    }
    else{
        alert("No hay capacidad para agregar el producto");
    }
}

function IncrementarCantidad(productoId,stock,cantidad){
    let productos=JSON.parse(localStorage.getItem('order'));
    let producto=[];
    for (var i = 0; i < Object.keys(productos).length; i++) {
        if (productos[i].productId==productoId) {
            producto=productos[i];
            productos.splice(i,1)
        }
    }
    if (stock>=(producto.cantidad+cantidad)) {
        producto.cantidad+=cantidad
        productos.push(producto)
        localStorage.setItem('order', JSON.stringify(productos));
        alert("Se han agregado " + cantidad+" producto/s al carrito.")
    }
    else{
        alert("No hay stock para lo solicitado, lo sentimos")
    }
}