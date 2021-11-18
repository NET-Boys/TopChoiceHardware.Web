import {ProductoRender} from '../container/producto.js'
const valores = window.location.search;
console.log(valores);
const urlParams = new URLSearchParams(valores);

var productoId = urlParams.get('productoId');
if (urlParams.has('productoId')){
    console.log('Han pasado un id de un producto');
    console.log(productoId)
    ProductoRender(productoId);
}
else{
    alert("Ha habido un error. Debe indicar el id de un producto")
}