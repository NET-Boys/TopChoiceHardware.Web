import {IndexRenderLocalidades} from '../container/registro.js'
document.getElementById('provincias-select').onchange = function(){
    var selectProvincias = document.getElementById('provincias-select');
    var selectLocalidades = document.getElementById('localidades-select');
    if (selectProvincias)
    {
        selectProvincias.addEventListener('change',
        function(){
            var selectedOption = this.options[selectProvincias.selectedIndex];
            console.log(selectedOption.value + ': ' + selectedOption.text);
            if (selectedOption.value =="00") {
                selectLocalidades.disabled = true;
            }
            else{
                selectLocalidades.disabled = false;
                IndexRenderLocalidades(selectedOption.value)
            }
        });
    }
}