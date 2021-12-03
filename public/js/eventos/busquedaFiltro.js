import {RenderFilter} from '../container/index.js'
document.getElementById('buscar-btn').onclick= function(){
    let categoriaSeleccionada = document.querySelector('input[name="contact"]:checked').value;
    
    if (categoriaSeleccionada==0) 
    {
        categoriaSeleccionada=""
    }
    let orden = document.querySelector('input[name="orden"]:checked').value;
    if (orden==null)
    {
        orden=""
    }

    let texto = document.getElementById("input-busqueda").value
    
    RenderFilter(orden,categoriaSeleccionada,texto)
}

