var cuentas = [
  { nombre: "Mauricio", saldo: 580, password: "12345" },
  { nombre: "Jesus", saldo: 450, password: "123" },
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

function Calculo(data) {
  let resultado = 0;
  let operacion = "";

  for (i = 0; i < data.length; i++) {
    if (data[i] === "confirmar") {
      operacion = data[i];
    } else {
      if (operacion === "") {
        resultado = Number(data[i]);
      } else {
        if (operacion === "confirmar") {
          resultado = resultado - Number(data[i]);
        }
      }
    }
  }

  return resultado;
}

function CapturarDatos(id) {
  //variables locales
  let imprimirTotal = document.getElementById("total");
  let operaciones = document.getElementById("operacionRetiro");
  let historial = document.getElementById("historial");
  let array = [];
  let total;

  if (id === "+" || id === "-" || id === "x" || id === "c" || id === "/") {
    operaciones.innerText = imprimirTotal.innerText + " " + id;
    operador = 1;
  } else if (id === "=") {
    operaciones.innerText =
      operaciones.innerText + " " + imprimirTotal.innerText;
    array = operaciones.innerText.split(" ");
    total = Calculo(array);

    imprimirTotal.innerText = total;

    historial.innerText = operaciones.innerText + " " + id + " " + total;
  } else {
    numero = Number(id);

    if (imprimirTotal.innerText === "0" || operador === 1) {
      imprimirTotal.innerText = numero;
      operador = 0;
    } else {
      imprimirTotal.innerText = imprimirTotal.innerText + numero;
    }
  }
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
