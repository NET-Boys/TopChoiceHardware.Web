export const NavSinLogin = () =>`
  <nav class="navbar navbar-expand-lg navbar-dark bgcolor " id="navegador">
    <div class="container-fluid">
        <a id="imagen-logo" class="navbar-brand logo-empresa" href="../../"><img  src="../img/logo.png" height="80" alt="" loading="lazy" style="margin-top: -1px;"/></a>
        <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="botonToggle">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div id = "margen-barra" class="" id="">
          <div class="d-flex align-items-center">
            <a class="btn btn-link px-3 me-2" href="../../login" role="button">Ingresar</a>
            <a class="btn btn-primary me-3" href="../../registro" role="button">Registrarme</a>
          </div>
        </div>
    </div>
  </nav>
`
export const NavConLogin = (email) =>`
<nav class="navbar navbar-expand-lg navbar-dark bgcolor " id="navegador">
    <div class="container-fluid">
        <a id="imagen-logo" class="navbar-brand logo-empresa" href="../../"><img  src="../img/logo.png" height="80" alt="" loading="lazy" style="margin-top: -1px;"/></a>
        <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="botonToggle">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div id = "margen-barra" class="" id="">
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              ${email}
            </a>
            <a id="buy-button" href="../ordenDeCompra">
              <img src="../../img/buy.png" alt="imagenBoton"></img>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Accion</a></li>
              <li><a class="dropdown-item" href="#">Otra accion</a></li>
              <li><a id="cerrar-sesion" href="" class="dropdown-item" onclick='CerrarSesion()'>Cerrar Sesión</a></li>
            </ul>
          </li>
        </ul>
      </div>
        </div>
    </div>
  </nav>
`

export const NavPrueba = () =>`
  <nav class="navbar navbar-expand-lg navbar-dark bgcolor " id="navegador">
    <div class="container-fluid">
        <a class="navbar-brand logo-empresa" href="../../"><img src="../img/logo.png" height="80" alt="" loading="lazy" style="margin-top: -1px;"/></a>
        <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="botonToggle">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div id = "margen-barra" class="" id="">
          <div class="container">
            <ul class="navbar-right">
              <li>
                <a href="#" class="my-cart-icon">
                  <i class="fa fa-shopping-cart"></i>
                  Cart 
                  <span class="badge my-cart-counter">0</span>
                </a>
              </li>
            </ul> <!--end navbar-right -->
          </div> <!--end container -->
        </div>
    </div>
  </nav>
`




