import { jwtDecode } from "../../lib/js/jwt-decode.js";
import { CardProducto } from "../components/card.js"
import { Footer } from "../components/footer.js";
import { NavSinLogin,NavConLogin,NavPrueba } from "../components/navbar/nav.js"
import { getProductos, getCategoria,getProductosByFilter } from "../services/fetchServices.js";
import { PopUpAlgoSalioMal,PopUpSatisfactorio,PopUpErrorStock,PopUpLoginNecesario, PopUpSinResultado } from "../components/popups.js";
import { Sidebar, RadioBtnCategoria } from "../components/sidebar.js";

const  NavRender =() =>{
    let _root = document.getElementById("navigator");
    _root.innerHTML+= NavSinLogin();
    Busqueda()
}
const FooterRender =() =>{
    let _root = document.getElementById("footer-distributed");
    _root.innerHTML+= Footer();
}
const RenderBusqueda=(json) =>{
    let _root = document.getElementById("root");
    let _carruselOfertas = document.getElementById("carrusel-ofertas")
    _carruselOfertas.innerHTML=""
    _root.innerHTML=""
    if (Object.keys(json).length==0) {
        window.location.href="#popupSinResultado"
        _resultado.innerHTML+=NoHayResultados()
    }
    json.forEach(producto => {
        _root.innerHTML+=CardProducto(producto.productId,producto.image,producto.productName,producto.description,producto.unitPrice,producto.unitsInStock)
    });
}
const  SidebarRender =(json) =>{
    let _root = document.getElementById("button-categoria");
    _root.innerHTML+= Sidebar();
}
const ProductosRender = (json) =>{
    let _root=document.getElementById("root");
    Object.values(json).forEach(producto => {
        _root.innerHTML+=CardProducto(producto.productId,producto.image,producto.productName,producto.description,producto.unitPrice,producto.unitsInStock)
    });
}
const NavbarLogin =(email) =>{
    let _root = document.getElementById("navigator");
    _root.innerHTML+= NavConLogin(email);
    Busqueda()
}
const Busqueda =()=>{
    
    document.getElementById("buscar-producto").addEventListener("click", Buscar);
    function Buscar(){
        debugger
        let texto=document.getElementById("input-busqueda").value
        getProductosByFilter("","",texto,RenderBusqueda)
    }
}
const PopUpRender=()=>{
    let _popupRoot = document.getElementById("popups");
    _popupRoot.innerHTML+=PopUpSatisfactorio();
    _popupRoot.innerHTML+=PopUpAlgoSalioMal();
    _popupRoot.innerHTML+=PopUpErrorStock();
    _popupRoot.innerHTML+=PopUpLoginNecesario();
    _popupRoot.innerHTML+=PopUpSinResultado();
}
export const IndexRender = ()=> {
    PopUpRender();
    FooterRender();
    getProductos(ProductosRender);
    if(window.localStorage.getItem("Top Choise User")){
        console.log(window.localStorage.getItem("Top Choise User"))
        var decoded = jwtDecode(window.localStorage.getItem("Top Choise User"));
        NavbarLogin(decoded.payload.email);
    }
    else{
        NavRender();
        
        console.log('No hay usuario logueado')
    }
    SidebarRender()
}
export const RenderFilter = (orden,categoria,texto) => {
    getProductosByFilter(orden,categoria,texto,RenderBusqueda)
}
