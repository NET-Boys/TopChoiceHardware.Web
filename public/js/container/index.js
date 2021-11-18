import { CardProducto } from "../components/card.js"
import { Footer } from "../components/footer.js";
import { Nav } from "../components/nav.js";
import { getProductos, getCategoria } from "../services/fetchServices.js";

const  NavRender =() =>{
    let _root = document.getElementById("navigator");
    _root.innerHTML+= Nav();
}
const FooterRender =() =>{
    let _root = document.getElementById("footer-distributed");
    _root.innerHTML+= Footer();
}
const ProductosRender = (json) =>{
    let _root=document.getElementById("root");
    Object.values(json).forEach(producto => {
        _root.innerHTML+=CardProducto(producto.productId,producto.image,producto.productName,producto.description,producto.unitPrice)
        
    });
}

export const IndexRender = ()=> {
    NavRender();
    FooterRender();
    getProductos(ProductosRender);
}

