export const CardProducto = (productoId,imagen, nombre, descripcion,precio) =>`
        <div class="product-card">
        <div class="product-tumb">
            <img src="${imagen}" alt="">
        </div>
        <div class="product-details">
            <h4><a id="${productoId}" href='../producto?productoId=${productoId}'>${nombre}</a></h4>
            <p>${descripcion}</p>
            <div class="product-bottom-details">
                <div class="product-price">$${precio}</div>
                <div class="product-links">
                    <a href=""><i class="fa fa-shopping-cart"></i></a>
                </div>
            </div>
        </div>
        </div>
`