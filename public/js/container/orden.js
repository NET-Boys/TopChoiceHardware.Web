import { jwtDecode } from "../../lib/js/jwt-decode.js";
import { Footer } from "../components/footer.js";
import { NavSinLogin,NavConLoginSinBusqueda,NavPrueba } from "../components/navbar/nav.js"
import { CarritoProducto, CarritoAside } from "../components/carrito.js";
import { getDomicilio, getProductsInCart } from "../services/fetchServices.js";
import { AlgoritmoCarrito } from "../../lib/js/orderAlgorithm.js";
import { PopUpCompra,PopUpErrorStock, PopUpCompraPrevia } from "../components/popups.js";

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
    _root.innerHTML+= NavConLoginSinBusqueda(email);
}
const PopUpRender=()=>{
    let _popupRoot = document.getElementById("popups");
    _popupRoot.innerHTML+=PopUpCompra();
    _popupRoot.innerHTML+=PopUpErrorStock();
    _popupRoot.innerHTML+=PopUpCompraPrevia();
}
const RenderCarrito=(json)=>{
    let _productos = document.getElementById("productos");
    let _carritoAside = document.getElementById("orden-aside")
    let montoTotal=0;
    json.forEach(producto => {
        _productos.innerHTML+=CarritoProducto(producto.productId,producto.imagen,producto.name,producto.price,producto.cantidad,producto.stock)
        montoTotal+=(producto.price*producto.cantidad)
    });
    _carritoAside.innerHTML+=CarritoAside(montoTotal)
    AlgoritmoCarrito()
    RealizarOrdenNueva()
}

function RealizarOrdenNueva (){
    document.getElementById("boton-compra").onclick= function(){
        debugger
        let monto=document.getElementById("monto-final").innerText
        let select= document.getElementById("select-metodo");
        let medioDePago=select.options[select.selectedIndex].value
        let token=window.localStorage.getItem("Top Choise User")
        var decoded = jwtDecode(token);
        let usuarioId=decoded.payload.UserId
        let email=decoded.payload.email
        debugger
        RealizarOrden(usuarioId,medioDePago,monto,email)
        debugger
    }
}
const FinalizarOrden=(json)=>{
    localStorage.setItem('order', '[]');
}

export const OrdenRender = ()=> {
    FooterRender();
    PopUpRender();
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
export const RealizarOrden =(usuarioId, metodoDePago, monto, email)=>{
    
    getDomicilio(usuarioId,metodoDePago,monto,email,FinalizarOrden)
}

