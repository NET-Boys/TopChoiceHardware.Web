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



