import{registerUser} from "../services/register/register.js"
//document.addEventListener('keyup',prueba)
document.getElementById("submitbutton").addEventListener('click',chequeo)

/*function prueba() {
        var empty = false;
        var elements = document.getElementById("formulario").elements;
        for (var i = 0, element; element = elements[i++];) {
            if (element.type === "text" && element.value === ""){
                console.log("it's an empty textfield")
                empty=true;
            }
            else{
                console.log(element.value)
            }
        }
        if (empty) {
            $('#submitbutton').attr('disabled', 'disabled');
        } else {
            $('#submitbutton').removeAttr('disabled');
        }
}*/
function chequeo(){
    let inputs = document.getElementsByClassName("ingreso-formulario")
    var selectProvincias = document.getElementById('provincias-select');
    var selectLocalidades = document.getElementById('localidades-select');
    var selectedOptionP = selectProvincias.options[selectProvincias.selectedIndex];
    var selectedOptionL = selectLocalidades.options[selectLocalidades.selectedIndex];
    for (let item of inputs) {
        if(selectedOptionP.value == "00" || selectedOptionL.value== "00" || !item.checkValidity()){
            window.location.href="#popupFaltanCampos"
            return false
        }
    }
    registerUser()
}