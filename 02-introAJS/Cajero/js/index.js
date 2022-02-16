var cuentas = [
  { nombre: "Mali", saldo: 200, password: "helloworld" },
  { nombre: "Gera", saldo: 290, password: "l33t" },
  { nombre: "Maui", saldo: 67, password: "123" },
];

function login() {
  let aux = 0;
  let usuario = document.getElementById("floatingInput").value;
  let contraseña = document.getElementById("floatingPassword").value;
  
  for (let i = 0; i < cuentas.length; i++) {
    if (usuario === cuentas[i].nombre) {
      if (contraseña === cuentas[i].password) {
        location = "main.html";
        aux = 1;
        localStorage.setItem('saldoUsuario',cuentas[i].saldo)
      }
    }
  }
  if (aux == 1) {
  } else {
    alert("Usuario o Contraseña incorrectos");
  }
}

let saldoUsuario = localStorage.getItem('saldoUsuario');
console.log(saldoUsuario);


let mensajeSaldo = document.getElementById('saldoEnCuenta');
mensajeSaldo.innerHTML = 'El saldo de tu cuenta es ${saldoUsuario}';

function saldo(form) {
  location = "saldo.html";
}
function retiro(form) {
  location = "retiro.html";
}
function ingreso(form) {
  location = "ingreso.html";
}
function cerrar(form) {
  location = "index.html";
}

/* function login() {
  let aux = 0;
  let usuario = document.getElementById("floatingInput").value;
  let contraseña = document.getElementById("floatingPassword").value;

  for (let i = 0; i < cuentas.length; i++) {
    if (usuario === cuentas[i].nombre) {
      aux = 1;
      if (contraseña === cuentas[i].password) {
        location = "main.html";
        aux = 2;
      }
    }
  }
  if (aux == 1 && contraseña === "") {
    alert("Ingrese contraseña");
  } else aux == 1 && contraseña != cuentas[i].password;
  {
    alert("Contraseña incorrecta");
  }
  if (aux == 0 && usuario === "") {
    alert("Ingrese Usuario");
  } else aux == 0 && usuario != cuentas[i].nombre;
  alert("Usuario invalido");
}
if (aux == 2) {
} */

/* function login() {
  let aux = 0;
  let usuario = document.getElementById("floatingInput").value;
  let contraseña = document.getElementById("floatingPassword").value;

  for (let i = 0; i < cuentas.length; i++) {
    if (usuario === cuentas[i].nombre) {
      aux = 1;
      if ((aux = 1 && contraseña === cuentas[i].password)) {
        location = "main.html";
        aux = 2;
      }
    }
  }
  if (aux=2){
  }
  else if (aux=1 && contraseña === "") {
    alert("Ingrese contraseña");
  } else(aux = 1 && contraseña != cuentas[i].password){
    alert("Contraseña incorrecta");
  }
  if(aux=0 && usuario === "") {
    alert("Ingrese Usuario");
  } else (aux=0 && usuario != cuentas[i].nombre){
    alert("Usuario invalido");
  }
} */

/* function login() {
  let usuario = document.getElementById("floatingInput").value;
  let contraseña = document.getElementById("floatingPassword").value;

  if (usuario === "Mali" || usuario === "Gera" || usuario === "Maui") {
    if (
      contraseña === "helloworld" ||
      contraseña === "133t" ||
      contraseña === "123"
    ) {
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
} */
