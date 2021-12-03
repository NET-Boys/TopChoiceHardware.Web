import {jwtDecode} from "../../lib/js/jwt-decode.js";
import { NavSinLoginSinBusqueda,NavConLogin } from "../components/navbar/nav.js";
import { Footer } from "../components/footer.js";
import { LoginBox } from "../components/loginBox.js";
import { LoginUser } from "../services/login/login.js";
import { PopUpErrorLogin } from "../components/popups.js";

const  NavRender =() =>{
    let _root = document.getElementById("navigator");
    _root.innerHTML+= NavSinLoginSinBusqueda();
}
const FooterRender =() =>{
    let _root = document.getElementById("footer-distributed");
    _root.innerHTML+= Footer();
}
const LoginInit =() =>{
    let _root = document.getElementById("login-box");
    _root.innerHTML+= LoginBox();
}

const LoginExitosoRender =(json)=>{
    window.localStorage.setItem("Top Choise User",json.token)
    window.localStorage.setItem('order','[]')
    var decoded = jwtDecode(json.token);
    console.log("Email: "+decoded.payload.email +"User Id: " +decoded.payload.UserId)
    window.location.href = "../"
}
const PopUpRender=()=>{
    let _popupRoot = document.getElementById("popups");
    _popupRoot.innerHTML+=PopUpErrorLogin();
}
export const LoginRender = ()=> {
    NavRender();
    FooterRender();
    PopUpRender();
}
export const LoginExitoso =() =>{
    LoginUser(LoginExitosoRender);
}