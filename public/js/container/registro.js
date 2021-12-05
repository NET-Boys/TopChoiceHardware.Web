import { SelectProvincia,AddOptions } from "../components/selectProvincia.js"
import { getProvincias, getLocalidades } from "../services/fetchServices.js";
import { NavSinLogin, NavSinLoginSinBusqueda } from "../components/navbar/nav.js";
import { Footer } from "../components/footer.js";
import { PopUpErrorRegistrarse,PopUpRegistroExitoso,PopUpCampos } from "../components/popups.js";

const  NavRender =() =>{
    let _root = document.getElementById("navigator");
    _root.innerHTML+= NavSinLoginSinBusqueda();
}
const FooterRender =() =>{
    let _root = document.getElementById("footer-distributed");
    _root.innerHTML+= Footer();
}

const RenderProvincias = (json) =>{
    let _root = document.getElementById("provincias-select");
    Object.values(json).forEach(provincia => {
        _root.innerHTML += SelectProvincia(provincia.id,provincia.nombre)
     });
}
const LimpiarLocalidades =() =>{
    let _root = document.getElementById("localidades-select");
    document.querySelectorAll('#localidades-select option').forEach(option => option.remove());
    _root.appendChild(AddOptions("00", "Seleccione una localidad"));
}

const RenderLocalidades = (json) =>{
    let _root = document.getElementById("localidades-select");
    json.forEach(localidad => {
        _root.appendChild(AddOptions(localidad.id,localidad.nombre))
     });
}
const PopUpRender=()=>{
    let _popupRoot = document.getElementById("popups");
    _popupRoot.innerHTML+=PopUpErrorRegistrarse();
    _popupRoot.innerHTML+=PopUpRegistroExitoso();
    _popupRoot.innerHTML+=PopUpCampos();
}

export const IndexRenderLocalidades =(provinciaId) =>{
    LimpiarLocalidades()
    getLocalidades(provinciaId,RenderLocalidades)
}

export const RegistroRender = ()=> {
    NavRender();
    FooterRender();
    PopUpRender();
    getProvincias(RenderProvincias)
}