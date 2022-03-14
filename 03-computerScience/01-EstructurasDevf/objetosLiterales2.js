'use trict'

const pamela = {
    //Estructuras de clave valor o key - value
    'primer Nombre' : 'Pamela',
    'apellido' : 'Ortega',
    'intereses' : [
        'Natación', 'Green Day', 'Harry Potter'
    ],
    'x1' : 'uno',
    'x2' : 'dos'
}

//Notación de punto
console.log(pamela.apellido);

//Notación de corchetes
console.log(pamela['primer Nombre']);
console.log(pamela['x' + 2]);    