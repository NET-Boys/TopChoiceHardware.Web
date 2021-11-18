export const Nav = (imagen, nombre, descripcion,precio) =>`
<div id = "navigator">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!-- Container wrapper -->
      <div class="container">
        <!-- Navbar brand -->
        <a class="navbar-brand me-2" href="../../">
          <img
            src="../img/logo.png"
            height="100"
            alt=""
            loading="lazy"
            style="margin-top: -1px;"
          />
        </a>
    
        <!-- Toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
    
          <div class="d-flex align-items-center">
            <a class="btn btn-link px-3 me-2" href="../../login" role="button">Ingresar</a>
            <a class="btn btn-primary me-3" href="../../registro" role="button">Registrarme</a>
          </div>
        </div>
        <!-- Collapsible wrapper -->
      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
  </div>
        
`