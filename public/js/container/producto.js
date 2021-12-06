import { jwtDecode } from "../../lib/js/jwt-decode.js";
import { NavConLoginSinBusqueda,NavSinLoginSinBusqueda } from "../components/navbar/nav.js";
import { Footer } from "../components/footer.js";
import { getProductoById } from "../services/fetchServices.js";
import { ProductoTitulo, ProductoPrecio,ProductoDescripcion, ProductoLink, ProductoSlider, ProductoBotonAgregar} from "../components/product.js";
import { PopUpSatisfactorio, PopUpAlgoSalioMal, PopUpErrorStock,PopUpLoginNecesario} from "../components/popups.js";

const  NavRender =() =>{
    let _root = document.getElementById("navigator");
    _root.innerHTML+= NavSinLoginSinBusqueda();
}
const NavbarLogin =(email) =>{
    let _root = document.getElementById("navigator");
    _root.innerHTML+= NavConLoginSinBusqueda(email);
}
const FooterRender =() =>{
    let _root = document.getElementById("footer-distributed");
    _root.innerHTML+= Footer();
}
const PopUpRender=()=>{
    let _popupRoot = document.getElementById("popups");
    _popupRoot.innerHTML+=PopUpSatisfactorio();
    _popupRoot.innerHTML+=PopUpAlgoSalioMal();
    _popupRoot.innerHTML+=PopUpErrorStock();
    _popupRoot.innerHTML+=PopUpLoginNecesario();
}
const ProductRender =(json) =>{
    let _titulo = document.getElementById("producto-titulo");
    _titulo.innerHTML+= ProductoTitulo(json.productName);

    let stock=json.unitsInStock
    debugger
    if (stock==0) {
        stock="<h2>Sin stock</h2>"
    }
    else if (stock<10) {
        stock="<h2>Stock bajo</h2>"
    }
    else if(stock>9 && stock <50){
        stock="<h2>Stock medio</h2>"
    }
    else{
        stock="<h2>Stock alto</h2>"
    }
    let _stock=document.getElementById("cant-stock")
    _stock.innerHTML+=stock;
    debugger
    let _precio = document.getElementById("producto-precio");
    _precio.innerHTML+= ProductoPrecio(json.unitPrice);

    let _descripcion = document.getElementById("producto-descripcion");
    _descripcion.innerHTML+= ProductoDescripcion(json.description);
    
    let _link = document.getElementById("producto-link");
    _link.innerHTML+= ProductoLink(json.url);
    
    let _botonAgregar = document.getElementById("agregar-al-carrito")
    _botonAgregar.innerHTML+= ProductoBotonAgregar(json.productId,json.unitsInStock)

    let _slider = document.getElementById("slider");
    let _thumb = document.getElementById("thumb");
    json.carousel.forEach(imagen => {
        _slider.innerHTML+= ProductoSlider(imagen)
        _thumb.innerHTML+= ProductoSlider(imagen)
    });
    renderSlider();

}

function renderSlider(){
    var slider = $("#slider");
    var thumb = $("#thumb");
    var slidesPerPage = 3; //globaly define number of elements per page
    var syncedSecondary = true;
    slider.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: false, 
        dots: false,
        loop: true,
        responsiveRefreshRate: 200
    }).on('changed.owl.carousel', syncPosition);
    thumb
        .on('initialized.owl.carousel', function() {
            thumb.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: true,
            item: 4,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, 
            navText: ['<svg width="18px" height="18px" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="25px" height="25px" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);
    function syncPosition(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);
        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        thumb
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = thumb.find('.owl-item.active').length - 1;
        var start = thumb.find('.owl-item.active').first().index();
        var end = thumb.find('.owl-item.active').last().index();
        if (current > end) {
            thumb.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            thumb.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }
    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            slider.data('owl.carousel').to(number, 100, true);
        }
    }
    thumb.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        slider.data('owl.carousel').to(number, 300, true);
    });


    $(".qtyminus").on("click",function(){
        var now = $(".qty").val();
        if ($.isNumeric(now)){
            if (parseInt(now) -1> 0)
            { now--;}
            $(".qty").val(now);
        }
    })            
    $(".qtyplus").on("click",function(){
        var now = $(".qty").val();
        if ($.isNumeric(now)){
            $(".qty").val(parseInt(now)+1);
        }
    });
}

export const ProductoRender = (productId)=> {
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
    FooterRender();
    getProductoById(productId,ProductRender)
}