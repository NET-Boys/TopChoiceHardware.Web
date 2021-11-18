export const LoginUser=(callback) =>{
    let jsonBody = {
        email : document.getElementById("email").value,
        password : document.getElementById("password").value,
    };
    (async () => {
        const rawResponse = await fetch('https://localhost:44355/api/usuario/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(jsonBody)
        });
        const content = await rawResponse.json();
        if(content.status === "Success"){
            alert("Ha iniciado sesión exitosamente");
            LoginHandler(content,callback)
        }else{
            alert("Ha ocurrido un problema, inténtelo nuevamente");
        }
        
      })();
}

async function LoginHandler(body,callback){
  var json = await body;
  callback(json)
}
