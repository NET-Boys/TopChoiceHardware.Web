export const CarritoProducto = (productId,imagen,name,price,cantidad) =>`
<div class="basket-product">
          <div class="item">
            <div class="product-image">
              <img src="${imagen}" alt="Placholder Image 2" class="product-frame">
            </div>
            <div class="product-details">
              <h2><strong><span class="item-quantity">${cantidad}</span> x </strong> ${name}</h2>
            </div>
          </div>
          <div class="price">${price}</div>
          <div class="quantity">
            <input type="number" value="${cantidad}" min="1" class="quantity-field">
          </div>
          <div class="subtotal">${price}</div>
          <div class="remove">
            <button onclick="EliminarProducto(${productId})">Eliminar</button>
          </div>
        </div>
`