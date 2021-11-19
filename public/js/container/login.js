import {jwtDecode} from "../../lib/js/jwt-decode.js";
import { NavSinLogin,NavConLogin } from "../components/navbar/nav.js";
import { Footer } from "../components/footer.js";
import { LoginBox } from "../components/loginBox.js";
import { LoginUser } from "../services/login/login.js";

const  NavRender =() =>{
    let _root = document.getElementById("navigator");
    _root.innerHTML+= NavSinLogin();
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
    var decoded = jwtDecode(json.token);
    console.log("Email: "+decoded.payload.email +"User Id: " +decoded.payload.UserId)
    window.location.href = "../"
}


export const LoginRender = ()=> {
    NavRender();
    FooterRender();
}
export const LoginExitoso =() =>{
    LoginUser(LoginExitosoRender);
}