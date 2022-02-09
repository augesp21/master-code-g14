/* 
Crear una aplicación a un profesor generar las notas definitivas de sus alumnos.
Debemos permitir al profesor que nos indique cuantos alumnos va a calificar.
Debemos permitir al profesor ingresar la cantidad de notas que va a promediar en general.
Con esas notas vamos a obtener el promedio de cada estudiante.
Mostrar al profesor una lista de estudiantes con su nombre y su definitiva.
*/

//variables y entradas
/* var cantidadAlumnos, cantidadNotas, nombre, nota, promedio;
var alumno;
var resultados = [];

cantidadAlumnos = Number(prompt("Ingresa la cantidad de alumnos de tu clase"));
cantidadNotas = Number(
  prompt("Ingresa la cantidad de notas a promediar de los alumnos")
);

//proceso logico

for (i = 1; i <= cantidadAlumnos; i++) {
  var sumatoria = 0;
  nombre = prompt("Ingresa el nombre del alumno " + i);

  for (j = 1; j <= cantidadNotas; j++) {
    nota = Number(prompt("Ingresa la nota " + j));
    sumatoria = sumatoria + nota;
  }
  promedio = sumatoria / cantidadNotas;

  alumno = "Alumno: " + nombre + " - Calificación: " + Math.round(promedio, 2);

  resultados.push(alumno);
}

function imprimeResultados(resultados) {
  var lista = "";
  for (i = 0; i < resultados.length; i++) {
    lista = lista + resultados[i] + "<br>";
  }
  return lista;
}

//impresión de resultado
var imprimir = imprimeResultados(resultados);

document.write(imprimir); */

/* document.write(imprimeResultados(resultados)); */
//Ejercicio 1 con un objeto
var cantidadAlumnos, cantidadNotas, nombre, nota, promedio;
var alumno;
var resultados = [];

cantidadAlumnos = Number(prompt("Ingresa la cantidad de alumnos de tu clase"));
cantidadNotas = Number(
  prompt("Ingresa la cantidad de notas a promediar de los alumnos")
);

//proceso logico

for (i = 1; i <= cantidadAlumnos; i++) {
  var sumatoria = 0;
  nombre = prompt("Ingresa el nombre del alumno " + i);

  for (j = 1; j <= cantidadNotas; j++) {
    nota = Number(prompt("Ingresa la nota " + j));
    sumatoria = sumatoria + nota;
  }
  promedio = sumatoria / cantidadNotas;

  alumno = "Alumno: " + nombre + " - Calificación: " + Math.round(promedio, 2);

  resultados.push(alumno);
}

function imprimeResultados(resultados) {
  var lista = "";
  for (i = 0; i < resultados.length; i++) {
    lista = lista + resultados[i] + "<br>";
  }
  return lista;
}

//impresión de resultado
var imprimir = imprimeResultados(resultados);

document.write(imprimir);

/* Segundo ejercicio, generar un objeto animales de la tundra, en el cual generen 
atributos de los animales y en la destructuracion me imprimiman sus caracteristicas */

let animalesTundra = {
  especie: "liebre ártica",
  peso: 15,
  color: "blanco",
  pelaje: function () {
    return `la ${this.especie} cambia la coloración de su pelaje durante el invierno al color blanco, mientras que en verano, mantiene un pelaje azulado`;
  },
};

let caracteristicas = [animalesTundra.especie, animalesTundra.peso, animalesTundra.color, animalesTundra.pelaje()];
let [car1, car2, car3, car4] = caracteristicas;

console.log(
  `Las caracteristicas principales de la ${car1} es que pesa aproximadamente ${car2} kg y es ${car3}, y como dato curioso ${car4}.`
);

/* const animalesTundra = ["cambian de pelaje", "patas cortas", "orejas pequeñas"];
const [caracteristica1, caracteristica2, caracteristica3] = animalesTundra;

console.log(`Los animales de la tundra tienen diferentes caracteristicas como lo son ${caracteristica1}, ${caracteristica2} y ${caracteristica3}`);


let car1 = prompt('Ingrese una caracteristica de los animales de la trundra')
let car2 = prompt('Ingrese otra caracteristica de los animales de la trundra')
let car3 = prompt('Ingrese otra caracteristica de los animales de la trundra')

const animalesTundra2 = [car1, car2, car3];
const [caracteristicas1, caracteristicas2, caracteristicas3] = animalesTundra2;

console.log(`Los animales de la tundra tienen diferentes caracteristicas como lo son ${caracteristicas1}, ${caracteristicas2} y ${caracteristicas3}`); */
