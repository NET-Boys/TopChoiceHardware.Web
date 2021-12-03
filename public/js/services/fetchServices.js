const UrlApiUsers = "https://localhost:44355/api/usuario"
const UrlApiAddress = "https://localhost:44356/api"
const UrlApiProducts = "https://localhost:44357/api"
const UrlApiOrders = "https://localhost:44358/api"
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
export const getProductosByFilter = (order,categoryId,productName,callback) => {
    fetch(`${UrlApiProducts}/products?order=${order}&titulo=${productName}&categoryId=${categoryId}`, {
        method: 'GET'
    })
        .then((httpResponse) => {
            if (httpResponse.ok)
                return httpResponse.json()
        })
        .then(body => {
            callback(body);
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

export const getMediosDePago =(callback)=>{
    fetch(`${UrlApiOrders}/MetodoPago`,{
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

export const getDomicilio =(usuarioId,metodoDePagoId,monto,email,callback)=>{
    fetch(`${UrlApiAddress}/Domicilio/${usuarioId}`,{
        method: 'GET'
    })
    .then((httpResponse)=>{
        if(httpResponse.ok)
            return httpResponse.json()
    })
    .then(body => {
        EliminarProductos(usuarioId,metodoDePagoId,body[0],monto,email,callback)
    })
}

export const EliminarProductos =(usuarioId,metodoDePagoId,direccion,monto,email,callback)=>{
    let jsonBody = JSON.parse(window.localStorage.getItem("order"));
    debugger
    (async () => {
        const rawResponse = await fetch(`${UrlApiProducts}/products/order`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(jsonBody)
        })
        const content = await rawResponse.json();
        if(content.status === "Success"){
            EliminarProductosHandler(content,usuarioId,metodoDePagoId,direccion,monto,email,callback)
        }else{
            localStorage.setItem('order','[]');
          window.location.href='#popup-compra-previa'
        }
    })();
}

export const generarOrden =(usuarioId,metodoDePagoId,direccion,monto,email,callback)=>{
    debugger
    let jsonBody = {
        "userId": usuarioId,
        "paymentMethodId": metodoDePagoId,
        "addressId": direccion.addressId,
        "total": monto,
        "email": email
    };
    (async () => {
        const rawResponse = await fetch(`${UrlApiOrders}/Order`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(jsonBody)
        })
        .then((httpResponse)=>{
            if(httpResponse.ok)
                window.location.href='#popup-gracias'
                return httpResponse.json()
        })
        .then(body => {
           callback(body)
        })
      })();
}


async function EliminarProductosHandler(body,usuarioId,metodoDePagoId,direccion,monto,email,callback){
    var json = await body;
    generarOrden(usuarioId,metodoDePagoId,direccion,monto,email,callback)
  }