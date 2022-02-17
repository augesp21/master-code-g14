var cuentas = [
  { nombre: "Mauricio", saldo: 390, password: "12345" },
  { nombre: "Jesus", saldo: 350, password: "123" },
  { nombre: "Augusto", saldo: 80, password: "contraseña" },
];

document.getElementById("saldoEnCuenta").innerHTML =
  localStorage.getItem("saldoUsuario");

function login() {
  let aux = 0;
  let usuario = document.getElementById("floatingInput").value;
  let contraseña = document.getElementById("floatingPassword").value;

  for (let i = 0; i < cuentas.length; i++) {
    if (usuario === cuentas[i].nombre) {
      if (contraseña === cuentas[i].password) {
        location = "main.html";
        aux = 1;
        localStorage.setItem("saldoUsuario", cuentas[i].saldo);
      }
    }
  }
  if (aux == 1) {
  } else {
    alert("Usuario o Contraseña incorrectos");
  }
}

var saldoInicial = localStorage.getItem("saldoUsuario");
var montoARetirar = document.getElementById("montoParaRetirar").value;

function retirarDinero() {
  let saldoFinal = Number(saldoInicial - montoARetirar);

  for (let i = 0; i < cuentas.length; i++) {
    if (saldoInicial == cuentas[i].saldo) {
      saldoFinal -= Number(cantidad);
      alert(saldoFinal);
    }
  }
}

/* function logicaDeRetiro(cantidad) {
  for (let i = 0; i < cuentas.length; i++) {
    if (saldoInicial == cuentas[i].saldo) {
      saldoInicial -= Number(cantidad);
      alert(saldoInicial);
    }
  }
} */

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
function regresar(form) {
  location = "main.html";
}

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
