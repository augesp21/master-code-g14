/* ESCRIBIR UN PROGRAMA EN PSEUDOCÓDIGO QUE 
ME DIGA SI UN NUMERO DADO ES PAR O IMPAR. */

//Variables
let num = prompt("ingresa los numeros que quieras que validemos si son PAR separados por una coma");
array = num.split(",");

document.write("Los numeros pares que hay son los siguentes:" + "<br>");

for (let validacion of array) {
  if (Number(validacion) % 2 == 0) {
    document.write(`${validacion}<br>`);
  }
}
