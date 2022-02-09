/* function unaFuncion() {
  console.log(1);
  console.log(2);
  console.log(3);

  return "Hola Mundo";
}

// unaFuncion();

var mensaje = unaFuncion();
console.log(mensaje); */

//---------------------------

/* console.log('2 x 1 = ', 2 * 1);
console.log('2 x 2 = ', 2 * 2);
console.log('2 x 3 = ', 2 * 3);
console.log('2 x 4 = ', 2 * 4);
console.log('2 x 5 = ', 2 * 5);
console.log('2 x 6 = ', 2 * 6);
console.log('2 x 7 = ', 2 * 7);
console.log('2 x 8 = ', 2 * 8);
console.log('2 x 9 = ', 2 * 9);
console.log('2 x 10 = ', 2 * 10); */

// - funcion multiplicar

/* function tablaDelDos(){
    for (i = 1; i <= 10; i++){
        console.log('2 x ', i, '=', 2 * i)
    }
}

tablaDelDos(); */
// suma

/* function suma(num1, num2) {
  var resultado = num1 + num2;

  alert("El resultado es: " + resultado);
}

suma(5, 90); */

//return

/* function sumatoria(num1, num2){
    var total = num1 + num2;

    return 'La sumatoria es: ' + total;
}

var valorTotal = sumatoria(9,8);
console.log(valorTotal) */

//this

/* function saludo(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  console.log("Hola yo soy ", this.nombre, "mi edad es ", this.edad);
}

saludo('Augusto', 25); */

// -

/* function diaActual(){
    var fecha = new Date();
    alert('Hoy es ' + fecha.getDate());
}

diaActual(); */

//Definir una función, la cual determine si la cadena de texto que le pasan es un palindromo

var texto, resultado;

texto = prompt("Ingrese una oracion");

function palindromo(texto) {
  var cadenaPrincipal = texto.toLowerCase().toUpperCase();

  //Convertimos la cadena en un arreglo
  var letrasEspacios = cadenaPrincipal.split("");

  var cadenaSinEspacios = "";

  for (i in letrasEspacios) {
    if (letrasEspacios[i] != " ") {
      cadenaSinEspacios += letrasEspacios[i];
    }
  }

  var letras = cadenaSinEspacios;

  var reverse = cadenaSinEspacios.split("").reverse("");

  var igual = true;

  for (i in letras) {
    if (letras[i] == reverse[i]) {
    } else {
      igual = false;
    }
  }

  if (igual) {
    resultado += "Es un palindromo";
  } else {
    resultado += "No es un palindromo";
  }

  return resultado;
}

resultado = "La cadena que ingresaste: "
alert(palindromo(resultado));

/* Definir una función que pase como parametro un numero entero y que devuelva como 
resultado una cadena de texto que defina si es par o impar */

/* function palindromo(cadena) {

    var resultado = "La cadena \""+cadena+"\" \n";
  
    // Pasar a minusculas la cadena
    var cadenaOriginal = cadena.toLowerCase();
  
    // Convertir la cadena en un array
    var letrasEspacios = cadenaOriginal.split("");
  
    // Eliminar los espacios en blanco (este paso es demasiado largo ya que no se utiliza la funcion "replace")
    var cadenaSinEspacios = "";
    for(i in letrasEspacios) {
      if(letrasEspacios[i] != " ") {
        cadenaSinEspacios += letrasEspacios[i];
      }
    }
  
    var letras = cadenaSinEspacios.split("");
    var letrasReves = cadenaSinEspacios.split("").reverse();
  
    // Este paso tambien es muy largo porque no se utiliza la sentencia "break"
    var iguales = true;
    for(i in letras) {
      if(letras[i] == letrasReves[i]) {
        // Todo bien
      }
      else {
        // Alguna letra es distinta, por lo que ya no es un palindromo
        iguales = false;
      }
    }
  
    if(iguales) {
      resultado += " es un palíndromo";
    }
    else {
      resultado += " no es un palíndromo";
    }
  
    return resultado;
  }
  
  alert(palindromo("La ruta nos aporto otro paso natural"));
  alert(palindromo("Esta frase no se parece a ningun palindromo")); */

/* function palindromo(str) {
  const str_reverso = str.split("").reverse().join("");

  return str_reverso === str ? "es palindromo" : "no es palindromo";
}

console.log(palindromo("La ruta nos aporto otro paso natural"));
console.log(palindromo("oso"));

//

function imparPar(numero) {
  if (numero % 2 == 0) {10
    
    alert("tu numero " + numero + " es par");
  } else {
    alert("tu numero " + numero + " es non");
  }
} */

/* var numero = prompt('Introduce un numero entero');
var resultado = numeroImpar(numero);
alert('El numero ' + numero + ' es ' + resultado);

function numeroImpar(numero){
    if (numero % 2 == 0){
        return 'par'
    }
    else {
        return 'impar'
    }
} */
