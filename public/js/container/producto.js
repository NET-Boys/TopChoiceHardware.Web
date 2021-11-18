import { Nav } from "../components/nav.js";
import { Footer } from "../components/footer.js";
import { getProductoById } from "../services/fetchServices.js";
import { Producto } from "../components/product.js";

const  NavRender =() =>{
    let _root = document.getElementById("navigator");
    _root.innerHTML+= Nav();
}

const FooterRender =() =>{
    let _root = document.getElementById("footer-distributed");
    _root.innerHTML+= Footer();
}
const ProductRender =(json) =>{
    let _root = document.getElementById("product-box");
    _root.innerHTML+= Producto(json.productId,json.image,json.productName,json.description,json.unitPrice,json.brand,json.url);
}

export const ProductoRender = (productId)=> {
    NavRender();
    FooterRender();
    getProductoById(productId,ProductRender)
}