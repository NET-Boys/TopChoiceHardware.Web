import { jwtDecode } from "../../lib/js/jwt-decode.js";
import { Footer } from "../components/footer.js";
import { NavSinLogin,NavConLogin,NavPrueba } from "../components/navbar/nav.js"
import { Carrito } from "../components/carrito.js";
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
const RenderCarrito=()=>{
    //let _root = document.getElementById("root");
    //_root.innerHTML+=Carrito();
    
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
        RenderCarrito();
    }
    else{
        console.log('No hay productos en el carrito');
    }

}

