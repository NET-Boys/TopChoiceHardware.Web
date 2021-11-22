function CerrarSesion (){
    window.localStorage.removeItem("Top Choise User")
    window.localStorage.removeItem("products")
    window.location.replace("../../")
}