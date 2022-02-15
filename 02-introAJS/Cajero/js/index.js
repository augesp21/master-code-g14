var cuentas = [
  { nombre: "Mali", saldo: 200, password: "helloworld" },
  { nombre: "Gera", saldo: 290, password: "l33t" },
  { nombre: "Maui", saldo: 67, password: "123" },
];


function login() {
  let usuario = document.getElementById("floatingInput").value;
  let contraseña = document.getElementById("floatingPassword").value;

  if (usuario === "augusto") {
    if (contraseña === "12345") {
      location = "main.html";
    } else if (contraseña === "") {
      alert("Ingrese contraseña");
    } else {
      alert("Contraseña incorrecta");
    }
  } else if (usuario === "") {
    alert("Ingrese Usuario");
  } else {
    alert("Usuario invalido");
  }
}

function saldo(form){
    location="saldo.html"
}
function retiro(form){
    location="retiro.html"
}
function ingreso(form){
    location="ingreso.html"
}
function cerrar(form){
    location="index.html"
}
