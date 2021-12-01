const UrlApiUsers = "https://localhost:44355/api/usuario"
const UrlApiAddress = "https://localhost:44356/api"
const UrlApiProducts = "https://localhost:44357/api"
const UrlApiOrders = "https://localhost:44358/api/Factura"

const urlBaseLocalidades ="https://localhost:44356/api/Localidades"

export const getProductos = (callback)=>{
    fetch(`${UrlApiProducts}/products`,{
        method: 'GET'
    })
    .then((httpResponse)=>{
        if(httpResponse.ok)
            return httpResponse.json()
    })
    .then(body => {
        callback(body);
    })
}
export const getProductoById =(productId,callback)=>{
    fetch(`${UrlApiProducts}/products/${productId}`,{
        method: 'GET'
    })
    .then((httpResponse)=>{
        if(httpResponse.ok)
            return httpResponse.json()
    })
    .then(body => {
        console.log(body)
        callback(body);
    })
}
export const getProductsInCart=(json,callback)=>{
    let productos=[];
    let productoTemporal={};
    fetch(`${UrlApiProducts}/products`,{
        method: 'GET'
    })
    .then((httpResponse)=>{
        if(httpResponse.ok)
            return httpResponse.json()
    })
    .then(body => {
        json.forEach(productoCarrito => {
            body.forEach(bodyProduct => {
                if (productoCarrito.productId==bodyProduct.productId) {
                    productoTemporal.productId=bodyProduct.productId
                    productoTemporal.name=bodyProduct.productName
                    productoTemporal.cantidad=productoCarrito.cantidad
                    productoTemporal.imagen=bodyProduct.image
                    productoTemporal.stock=bodyProduct.unitsInStock
                    productoTemporal.price=bodyProduct.unitPrice
                    productos.push(productoTemporal)
                    productoTemporal={}
                }
            });
        });
        callback(productos);
    })

}

export const getCategoria = (id,callback)=>{
    fetch(`${UrlApiProducts}/category/${id}`,{
        method: 'GET'
    })
    .then((httpResponse)=>{
        if(httpResponse.ok)
            return httpResponse.json()
    })
    .then(body => {
        callback(body);
    })
}

export const getProvincias = (callback)=>{
    
    let url = `${UrlApiAddress}/Provincias`
    debugger
    fetch(url,{
        method: 'GET'
    })
    .then((httpResponse)=>{
        if(httpResponse.ok)
            return httpResponse.json()
    })
    .then(body => {
        callback(body);
    })
}
export const getLocalidades = (provinciaId,callback) =>{
    fetch(`${urlBaseLocalidades}/${provinciaId}`,{
        method: 'GET'
    })
    .then((httpResponse)=>{
        if(httpResponse.ok)
            return httpResponse.json()
    })
    
    .then(body => {
        callback(body);
    })
}



