import {IndexRenderLocalidades} from '../container/registro.js'
document.getElementById('provincias-select').onchange = function(){
    var selectProvincias = document.getElementById('provincias-select');
    var selectLocalidades = document.getElementById('localidades-select');
    if (selectProvincias)
    {
        var selectedOption = this.options[selectProvincias.selectedIndex];
        console.log(selectedOption.value + ': ' + selectedOption.text);
        if (selectedOption.value =="00") {
            document.getElementById("provincias-select").classList.remove('select-direccion-valid');
            document.getElementById("provincias-select").classList.add('select-direccion-invalid');
            selectLocalidades.disabled = true;
            
        }
        else{
            document.getElementById("provincias-select").classList.remove('select-direccion-invalid');
            document.getElementById("provincias-select").classList.add('select-direccion-valid');
            selectLocalidades.disabled = false;
            IndexRenderLocalidades(selectedOption.value)
        }
    }
}

document.getElementById('localidades-select').onchange = function(){
    let selectLocalidades = document.getElementById('localidades-select');
    if (this.options[selectLocalidades.selectedIndex].value =="00") {
        document.getElementById("localidades-select").classList.remove('select-direccion-valid');
        document.getElementById("localidades-select").classList.add('select-direccion-invalid');
    }
    else{
        document.getElementById("localidades-select").classList.remove('select-direccion-invalid');
        document.getElementById("localidades-select").classList.add('select-direccion-valid');
        IndexRenderLocalidades(selectedOption.value)
    }
}
