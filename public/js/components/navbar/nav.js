export const NavSinLogin = () =>`
  <nav class="navbar navbar-expand-lg navbar-dark bgcolor " id="navegador">
    <div class="container-fluid">
        <a id="imagen-logo" class="navbar-brand logo-empresa" href="../../"><img  src="../img/logo.png" height="80" alt="" loading="lazy" style="margin-top: -1px;"/></a>
        <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="botonToggle">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div id = "margen-barra" class="" id="">
          <div class="d-flex align-items-center">
            <a id="button-ingresar"class="btn btn-primary px-3 me-2" href="../../login" role="button">Ingresar</a>
            <a id="button-registrarse" class="btn btn-primary me-3" href="../../registro" role="button">Registrarme</a>
          </div>
        </div>
    </div>
  </nav>
`
export const NavConLogin = (email) =>`
<nav class="navbar navbar-expand-lg navbar-dark bgcolor" id="navegador">
        <div class="container-fluid">
          <a id="imagen-logo" class="navbar-brand logo-empresa" href="../../">
            <img  src="../img/logo.png" height="80" alt="" loading="lazy" style="margin-top: -1px;"/>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="botonToggle">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 mx-auto">
                    <li class="nav-item">
                      <div class="wrap">
                        <div class="search">
                            <input type="text" class="searchTerm" placeholder="¿Que estás buscando?">
                            <button type="submit" class="searchButton">
                              <i class="fa fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </li>
                </ul>
            </div>
            <div id = "margen-barra" class="collapse navbar-collapse" id="navbarSupportedContent">
              <div class="dropdown">
                <a id="dropdown-email" class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  ${email}
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a id="cerrar-sesion" href="" class="dropdown-item" onclick='CerrarSesion()'>Cerrar Sesión</a></li>
                </ul>
              </div>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 mx-auto">
              <li class="nav-item">
              </li>
              <li class="nav-item">
                <a id="buy-button" href="../ordenDeCompra">
                  <img src="../../img/buy.png" alt="imagenBoton"></img>
                </a>
              </li>
            </ul>
            </div>
        </div>
    </nav>
`
export const asd =() =>`
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
              <li>
                <a id="cerrar-sesion" href="" class="dropdown-item" onclick='CerrarSesion()'>Cerrar Sesión</a>
              </li>
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



