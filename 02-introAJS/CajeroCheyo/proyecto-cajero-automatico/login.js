// Validación de inicio de sesion

function inicioSesion(){
  event.preventDefault()
  let usuario = document.getElementById("usuario").value
  let contrasena = document.getElementById("contraseña").value

  let data = {usuario, contrasena}


  if (usuario == "Mali" && contrasena == "123456"){
    fetch("ca-index.html", {
      method: 'POST',
      body: data
   }).then(function(resp){
     console.log(resp)
   })
  //  redirigir de login a la pagina principal
    location.href ="ca-index.html"
  }else if (usuario == "Gera" && contrasena == "234567"){
    location.href ="ca-index.html"
  }else if (usuario == "Maui" && contrasena == "345678"){
    location.href ="ca-index.html"
  }else{
    alert("Revisa tu usuario o contraseña")
  }
}

