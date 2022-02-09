/* Desafio:
1. Solicitar los nombres completos de los miembros de la familia separados por (,)
2. Convertir esos nombres a un array de nombres de la familia y mostrarlo en consola
3. Combinar los dos arrays en uno solo, reordenarlo de atras hacia adelante, y mostrarlo al usuario.
4. Agregar las validaciones que crean necesarias.
 */

//Variables y entradas
/* var nombre1, apellido1, nombre2, apellido2, nombre3, apellido3;
var arrayNombres = [];
var arrayApellidos = [];
var arrayNombresApellidos = [];

nombre1 = prompt('Primer miembro de la familia, ingresa tu nombre');
apellido1 = prompt('Primer miembro de la familia, ingresa tu apellido');
nombre2 = prompt('Segundo miembro de la familia, ingresa tu nombre');
apellido2 = prompt('Segundo miembro de la familia, ingresa tu apellido');
nombre3 = prompt('Tercer miembro de la familia, ingresa tu nombre');
apellido3 = prompt('Tercer miembro de la familia, ingresa tu apellido');

//Lógica

arrayNombres.push(nombre1, nombre2, nombre3);
arrayApellidos.push(apellido1,apellido2,apellido3);

arrayNombresApellidos = arrayNombres.concat(arrayApellidos);
arrayNombresApellidos.reverse();

//Salidas
console.log(arrayNombres);
alert(`${arrayNombresApellidos}`); */

//Variables y entradas
var nombre, apellido1, apellido2, nombresMiembros;
var arrayNombre = []; //Inicializo arreglo vacio
var arrayFamiliares = [];
var arrayCombinado = [];

nombre = prompt(`Ingresa tu nombre`);
apellido1 = prompt(`Ingresa tu primer apellido`);
apellido2 = prompt(`Ingresa tu segundo apellido`);
nombresMiembros = prompt('Ingresa los nombres de tus familiares separados por una coma');

if(nombre === "" || apellido1 === "" || apellido2 === "" || nombresMiembros === ""){
    alert('Por favor rellena todos los datos solicitados')
}
else if(nombresMiembros.includes(',') === false){
    alert('Olvidaste ingresar los nombres separados por una coma (,)');
}
else{
//Lógica
arrayNombre.push(nombre);
arrayNombre.push(apellido1);
arrayNombre.push(apellido2);

arrayFamiliares = nombresMiembros.split(',');
arrayCombinado = arrayNombre.concat(arrayFamiliares);

nombreCompleto = `Tu nombre es: ${arrayNombre[0]} ${arrayNombre[1]} ${arrayNombre[2]}`;



//Sálidas

console.log(arrayFamiliares);
alert(nombreCompleto);
alert(arrayCombinado.reverse()); 

}