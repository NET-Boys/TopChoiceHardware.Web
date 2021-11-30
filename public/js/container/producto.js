import { jwtDecode } from "../../lib/js/jwt-decode.js";
import { NavSinLogin,NavConLogin } from "../components/navbar/nav.js";
import { Footer } from "../components/footer.js";
import { getProductoById } from "../services/fetchServices.js";
import { ProductoTitulo, ProductoPrecio,ProductoDescripcion, ProductoLink } from "../components/product.js";

const  NavRender =() =>{
    let _root = document.getElementById("navigator");
    _root.innerHTML+= NavSinLogin();
}
const NavbarLogin =(email) =>{
    let _root = document.getElementById("navigator");
    _root.innerHTML+= NavConLogin(email);
}
const FooterRender =() =>{
    let _root = document.getElementById("footer-distributed");
    _root.innerHTML+= Footer();
}
const ProductRender =(json) =>{
    let _titulo = document.getElementById("producto-titulo");
    _titulo.innerHTML+= ProductoTitulo(json.productName);

    let _precio = document.getElementById("producto-precio");
    _precio.innerHTML+= ProductoPrecio(json.unitPrice);

    let _descripcion = document.getElementById("producto-descripcion");
    _descripcion.innerHTML+= ProductoDescripcion(json.description);
    
    let _link = document.getElementById("producto-link");
    _link.innerHTML+= ProductoLink(json.url);
}

export const ProductoRender = (productId)=> {
    if(window.localStorage.getItem("Top Choise User")){
        console.log(window.localStorage.getItem("Top Choise User"))
        debugger
        var decoded = jwtDecode(window.localStorage.getItem("Top Choise User"));
        debugger
        NavbarLogin(decoded.payload.email);
    }
    else{
        NavRender();
        console.log('No hay usuario logueado')
    }
    FooterRender();
    getProductoById(productId,ProductRender)
}