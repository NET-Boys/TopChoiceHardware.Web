export const SelectProvincia = (provinciaId, nombreProvincia)  =>`
    <select>
        <option value="${provinciaId}">${nombreProvincia}</option>
    </select>
`

export const SelectLocalidad = (json,_root)  =>{
    _root.innerHtml+=`<select>
    ${Object.values(json).map(localidad => {
        return `<option value="${localidad.Id}">${localidad.Nombre}</option>`
    })}
    </select>
`}


export const AddOptions = (id, name) => {
    let op = document.createElement("option");
    op.value = id;
    op.innerHTML = name;
    return op;
}
