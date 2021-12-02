document.getElementById("submitbutton").addEventListener("click", registerUser);
const UrlUser = "https://localhost:44355/api/usuario"
const UrlAdress = "https://localhost:44356/api/Domicilio"

function registerUser() {
    let userPostBody = {
        name : document.getElementById("name").value,
        username : document.getElementById("userName").value,
        dni : document.getElementById("DNI").value,
        email : document.getElementById("email").value,
        password : document.getElementById("password").value,
        roleId : 2
    };
    console.log(userPostBody);

    (async () => {
        const rawResponse = await fetch(`${UrlUser}`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userPostBody)
        });
        const content = await rawResponse.json();
        
        console.log(content);
        if (typeof(content.userId) != "undefined") {
          registerAdress(content.userId)
          alert("Se ha generado el usuario!")
          window.location.href="../login"
        }
        else{
          alert(content.message)
        }
      })();
}

function registerAdress(userId){
  let domicilioPostBody = {
    "provinceId": document.getElementById("provincias-select").value,
    "localityId": "342",
    "userId": userId,
    "street": document.getElementById("street").value,
    "number": document.getElementById("street_number").value,
    "observation": "observacion",
    "postalCode": document.getElementById("zip_id").value
  }
  console.log(domicilioPostBody);
  (async () => {
      const rawResponse = await fetch(`${UrlAdress}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(domicilioPostBody)
      });
      const content = await rawResponse.json();
      console.log(content);
      if (typeof(content.addressId) != "undefined") {
        alert("Registro exitoso!");
      }
    })();
}