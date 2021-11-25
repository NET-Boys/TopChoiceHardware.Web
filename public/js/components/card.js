export const CardProducto = (productoId,imagen, nombre, descripcion,precio,stock) =>`
        <div class="product-card">
        <div class="product-tumb">
            <img src="${imagen}" alt="">
        </div>
        <div class="product-details">
            <div class="titulo-descripcion">
                <h1><a id="${productoId}" href='../producto?productoId=${productoId}'>${nombre}</a></h1>
                <p>${descripcion}</p>
            </div>
            <div class="product-bottom-details">
                <div class="product-price">$${precio}</div>
                <div class="product-links">
                    <a href="" onclick="agregarAlCarrito(${productoId},${stock})"><i class="fa fa-shopping-cart fa-lg"></i></a>
                </div>
            </div>
        </div>
        </div>
`