export const PopUpSatisfactorio = () =>`
<div id="popup1" class="overlay">
      <div class="popup">
        <h2>Excelente!</h2>
        <a class="close" href="#">&times;</a>
        <div class="content">
          Se ha agregado el/los productos correctamente al carrito
        </div>
      </div>
    </div>`

export const PopUpErrorStock = () =>`
<div id="popup2" class="overlay">
        <div class="popup">
        <h2>Error</h2>
        <a class="close" href="#">&times;</a>
        <div class="content">
            No hay stock para lo solicitado
        </div>
        </div>
    </div>`

export const PopUpAlgoSalioMal = () =>`
  <div id="popup3" class="overlay">
        <div class="popup">
        <h2>Algo Salio mal</h2>
        <a class="close" href="#">&times;</a>
        <div class="content">
            Se ha agregado el/los productos correctamente al carrito
        </div>
        </div>
    </div>`
    

export const PopUpLoginNecesario = () =>`
  <div id="popup4" class="overlay">
        <div class="popup">
        <div class="content modal-header">
        <h3>Advertencia</h3>
        </div>
        <a class="close" href="#">&times;</a>
        <div class="content modal-body">
            Debe ingresar su cuenta para iniciar un carrito
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-dark active" onclick=window.location.href="../../login"> Login</button>
        </div>
        </div>
    </div>`

export const PopUpErrorLogin = () =>`
    <div id="popupErrorLogin" class="overlay">
          <div class="popup">
            <h3>¡Ups!</h3>
            <a class="close" href="#">&times;</a>
            <div class="content">
              Usuario o contraseña incorrecta
            </div>
          </div>
        </div>`
