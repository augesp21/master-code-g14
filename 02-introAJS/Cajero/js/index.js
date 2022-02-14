let usuario = document.getElementsByName("usuario");
let contraseña = document.getElementById("pass");
/* let usuario = prompt('Ingresa tu usuario')
let contraseña = prompt('Ingresa tu contraseña'); */


function login(usuario, contraseña){
    if (usuario === "augusto") {
        if (contraseña === "12345") {
            location="main.html"
        } else {
            alert("Contraseña incorrecta")
        }
    } else {
        alert("Usuario incorrecto")
    }
}