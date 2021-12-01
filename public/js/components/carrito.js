export const CarritoProducto = (productId,imagen,name,price,cantidad,stock) =>`
<div class="basket-product">
          <div class="item">
            <div class="product-image">
              <img id="thumb-carrito"src="${imagen}" alt="Placholder Image 2" class="product-frame">
            </div>
            <div class="product-details">
              <h2><strong><span class="item-quantity">${cantidad}</span> x </strong> ${name}</h2>
            </div>
          </div>
          <div id="price" class="price">${price}</div>
          <div class="quantity">
            <input type="number" value="${cantidad}" min="1" max="${stock}"class="quantity-field">
          </div>
          <div class="subtotal">${price}</div>
          <div class="remove">
            <button onclick="EliminarProducto(${productId})">Eliminar</button>
          </div>
        </div>
`
export const CarritoAside = (montoTotal) =>`
<div class="summary">
          <div class="summary-total-items"><span class="total-items"></span> Items en tu carrito</div>
          <div class="summary-subtotal">
            <div class="subtotal-title">Subtotal</div>
            <div class="subtotal-value final-value" id="basket-subtotal">${montoTotal}</div>
            <div class="summary-promo hide">
              <div class="promo-title">Promotion</div>
              <div class="promo-value final-value" id="basket-promo"></div>
            </div>
          </div>
          <div class="summary-delivery">
            <select name="delivery-collection" class="summary-delivery-selection">
                <option value="0" selected="selected">Efectivo</option>
               <option value="collection">Transferencia</option>
               <option value="first-class">Debito</option>
               <option value="second-class">Credito</option>
            </select>
          </div>
          <div class="summary-total">
            <div class="total-title">Total</div>
            <div class="total-value final-value" id="basket-total">${montoTotal}</div>
          </div>
          <div class="summary-checkout">
            <button class="checkout-cta">Comprar</button>
          </div>
        </div>`