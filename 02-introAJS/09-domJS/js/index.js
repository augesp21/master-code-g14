/* let txtNombre, edad, añoActual, añoNac;

function capturaNombre() {
  let txtNombre = document.getElementById("nombre");
  alert("Tu nombre es " + txtNombre.value);
}

function calcularEdad() {
  let fecha = new Date();

  añoNac = Number(document.getElementById("fecha").value.slice(0, 4));
  añoActual = fecha.getFullYear();

  if(añoActual < añoNac){
      alert("Elige un año de nacimiento válido")
  }
  else{
      edad = añoActual - añoNac;
      document.getElementById("edad").innerText = `Tu edad es: ${edad} años.`
  }
}

document.getElementById("calcular").addEventListener("click", calcularEdad);

function cambiarColor(){
    document.getElementById("cuerpo").style.backgroundColor = "#b2dfdb";
} */

let txtNombre, edad, añoActual, añoNac, mesNac, mesActual;

function capturaNombre() {
  let txtNombre = document.getElementById("nombre");
  alert("Tu nombre es " + txtNombre.value);
}

function calcularEdad() {
  let fecha = new Date();

  añoNac = Number(document.getElementById("fecha").value.slice(0, 4));
  añoActual = fecha.getFullYear();

  mesNac = Number(document.getElementById("fecha").value.slice(5, 7));
  mesActual = fecha.getMonth();

  if(añoActual < añoNac){
      alert("Elige un año de nacimiento válido")
  }
  else{
      edad = añoActual - añoNac;
      document.getElementById("edad").innerText = `Tu edad es: ${edad} años.`
  }
}

document.getElementById("calcular").addEventListener("click", calcularEdad);

function cambiarColor(){
    document.getElementById("cuerpo").style.backgroundColor = "#b2dfdb";
}

//Ejercicio 1 : Mostrar la edad con todo y meces

//Ejercicio 2 : Hacer que el boton cambie el color y luego lo regrese