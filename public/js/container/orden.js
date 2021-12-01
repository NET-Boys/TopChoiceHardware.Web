import { jwtDecode } from "../../lib/js/jwt-decode.js";
import { Footer } from "../components/footer.js";
import { NavSinLogin,NavConLogin,NavPrueba } from "../components/navbar/nav.js"
import { CarritoProducto } from "../components/carrito.js";
import { getProductsInCart } from "../services/fetchServices.js";
import { AlgoritmoCarrito } from "../../lib/js/orderAlgorithm.js";
const  NavRender =() =>{
    let _root = document.getElementById("navigator");
    _root.innerHTML+= NavSinLogin();
}
const FooterRender =() =>{
    let _root = document.getElementById("footer-distributed");
    _root.innerHTML+= Footer();
}
const NavbarLogin =(email) =>{
    let _root = document.getElementById("navigator");
    _root.innerHTML+= NavConLogin(email);
}
const RenderCarrito=(json)=>{
    
    let _productos = document.getElementById("productos");
    
    json.forEach(producto => {
        _productos.innerHTML+=CarritoProducto(producto.productId,producto.imagen,producto.name,producto.price,producto.cantidad)
    });
    AlgoritmoCarrito()
    
}
export const OrdenRender = ()=> {
    FooterRender();
    if(window.localStorage.getItem("Top Choise User")){
        console.log(window.localStorage.getItem("Top Choise User"))
        var decoded = jwtDecode(window.localStorage.getItem("Top Choise User"));
        NavbarLogin(decoded.payload.email);
    }
    else{
        NavRender();
        console.log('No hay usuario logueado')
    }
    if(window.localStorage.getItem("order")){
        console.log(window.localStorage.getItem("order"))
        
    }
    else{
        console.log('No hay productos en el carrito');
    }
    getProductsInCart(JSON.parse(window.localStorage.getItem("order")),RenderCarrito)

}

