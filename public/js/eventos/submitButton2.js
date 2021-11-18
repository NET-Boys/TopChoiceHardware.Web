document.addEventListener('keyup',prueba)

function prueba() {
    
        var empty = false;
        debugger
        var elements = document.getElementById("formulario").elements;
        for (var i = 0, element; element = elements[i++];) {
            if (element.type === "text" && element.value === ""){
                console.log("it's an empty textfield")
                empty=true;
            }
            else{
                console.log(element.value)
            }
        }
        if (empty) {
            $('#submitbutton').attr('disabled', 'disabled');
        } else {
            $('#submitbutton').removeAttr('disabled');
        }
    
}