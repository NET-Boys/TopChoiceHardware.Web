import {RealizarOrden} from '../container/orden.js'
import { jwtDecode } from '../../lib/js/jwt-decode.js'
export const RealizarLaOrden=()=>{
    
    debugger
    document.getElementById("boton-compra").onclick= function(){
        let monto=document.getElementById("monto-final").innerText
        let metodoPago= document.getElementsByName("delivery-collection").value;
        let token=window.localStorage.getItem("Top Choise User")
        var decoded = jwtDecode(token);
        let usuarioId=decoded.payload.UserId
        let email=decoded.payload.email
        debugger
        RealizarOrden()
        debugger
    }
    
}