import {RenderFilter} from '../container/index.js'
document.getElementById('buscar-btn').onclick= function(){
    let categoriaSeleccionada = document.querySelector('input[name="contact"]:checked').value;
    debugger
    if (categoriaSeleccionada==0) 
    {
        categoriaSeleccionada=""
    }
    debugger
    let orden = document.querySelector('input[name="orden"]:checked').value;
    if (orden==null)
    {
        orden=""
    }

    let texto = document.getElementById("input-busqueda").value
    debugger
    RenderFilter(orden,categoriaSeleccionada,texto)
    debugger
}

