/* Crear una aplicación que le solicite al usuario 
adivinar el numero que esta pensando la computadora
en un rango del 1 al 10

felicitarlo cuando acierte, y darle 3 intentos.
Si falla, expresarle que falló.
Manipulando el DOM.

No usar 
-Prompt
-Console */

let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

const intentos = document.querySelector(".intentos");
const correctoIncorrecto = document.querySelector(".correctoIncorrecto");
const bajoOAlto = document.querySelector(".bajoOAlto");

const ingresarNumero = document.querySelector(".ingresarNumero");
const numeroUsuario = document.querySelector(".numeroUsuario");

let contadorIntentos = 1;
let botonReset;

function validarRespuesta() {
  let respuestaUsuario = Number(numeroUsuario.value);
  if (contadorIntentos === 1) {
    intentos.textContent = "Intentos anteriores: ";
  }
  intentos.textContent += respuestaUsuario + " ";

  if (respuestaUsuario === numeroAleatorio) {
    correctoIncorrecto.textContent = "¡Felicidades! ¡Lo adivinaste!";
    correctoIncorrecto.style.backgroundColor = "green";
    bajoOAlto.textContent = "";
    finDelJuego();
  } else if (contadorIntentos === 3) {
    correctoIncorrecto.textContent = "!!!Fin del juego!!!";
    finDelJuego();
  } else {
    correctoIncorrecto.textContent = "¡Incorrecto!";
    correctoIncorrecto.style.backgroundColor = "red";
    if (respuestaUsuario < numeroAleatorio) {
      bajoOAlto.textContent = "¡El número es muy bajo!";
    } else if (respuestaUsuario > numeroAleatorio) {
      bajoOAlto.textContent = "¡El número es muy grande!";
    }
  }

  contadorIntentos++;
  numeroUsuario.value = "";
  numeroUsuario.focus();
}

ingresarNumero.addEventListener("click", validarRespuesta);

function finDelJuego() {
  numeroUsuario.disabled = true;
  ingresarNumero.disabled = true;
  botonReset = document.createElement("button");
  botonReset.textContent = "Iniciar nuevo juego";
  document.body.append(botonReset);
  botonReset.addEventListener("click", resetGame);
}

function resetGame() {
    contadorIntentos = 1;
  
    const resultadosParas = document.querySelectorAll('.resultados p');
    for (let i = 0 ; i < resultadosParas.length ; i++) {
      resultadosParas[i].textContent = '';
    }
  
    botonReset.parentNode.removeChild(botonReset);
  
    numeroUsuario.disabled = false;
    ingresarNumero.disabled = false;
    numeroUsuario.value = '';
    numeroUsuario.focus();
  
    correctoIncorrecto.style.backgroundColor = 'white';
  
    numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  }