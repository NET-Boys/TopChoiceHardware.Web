
export const Sidebar = (categoria, categoryId, categoryName, order, unitPrice) => `
    <h4 class="texto-sidebar">Categorías</h4>
    <div>
        <label class="rad-label">
            <input type="radio" class="rad-input" name="contact" value="0" checked>
            <div class="rad-design"></div>
            <div class="rad-text">Todo</div>
        </label>
        <label class="rad-label">
            <input type="radio" class="rad-input" name="contact" value="1">
            <div class="rad-design"></div>
            <div class="rad-text">Procesadores</div>
        </label>
        <label class="rad-label">
            <input type="radio" class="rad-input" name="contact" value="2">
            <div class="rad-design"></div>
            <div class="rad-text">Motherboards</div>
        </label>
        <label class="rad-label">
            <input type="radio" class="rad-input" name="contact" value="3">
            <div class="rad-design"></div>
            <div class="rad-text">Memorias RAM</div>
        </label>
        <label class="rad-label">
            <input type="radio" class="rad-input" name="contact" value="4">
            <div class="rad-design"></div>
            <div class="rad-text">Almacenamiento</div>
        </label>
        <label class="rad-label">
            <input type="radio" class="rad-input" name="contact" value="5">
            <div class="rad-design"></div>
            <div class="rad-text">Placas de video</div>
        </label>
    </div>
    <h4 class="texto-sidebar">Precio</h4>
    <div>
        <label class="rad-label">
            <input type="radio" class="rad-input" name="orden" value="ASC" checked>
            <div class="rad-design"></div>
            <div class="rad-text">Ascendente</div>
        </label>
        <label class="rad-label">
            <input type="radio" class="rad-input" name="orden" value="DESC">
            <div class="rad-design"></div>
            <div class="rad-text">Descendente</div>
        </label>
    </div>
`
export const RadioBtnCategoria = (categoryId, categoryName) =>`
    <input type="radio" class="radio" id="contactChoice1"
        name="contact" value="${categoryId}">
    <label for="contactChoice1">${categoryName}</label>
`
export const RadioBtnOrden = (order,unitPrice) => `
    <input type="radio" class="radio" id="orderChoice"
        name="orden" value="${order}">
    <label for="orderChoice">${unitPrice}</label>
`

