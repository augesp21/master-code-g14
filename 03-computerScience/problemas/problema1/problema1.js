//Variables
let resultado = 0;
let numero1 = prompt("Ingrese un numero para multiplicar");
let numero2 = prompt("Ingrese el seguundo para multiplicar");

//Multiplicar dos números

for (let i = 1; i <= numero1; i++) {
    resultado = resultado + numero2;
  }

  
document.write(`${numero1} * ${numero2} = ${resultado}`);
