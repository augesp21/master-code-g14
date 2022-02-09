//variables
var nombreCompleto, añoNacimiento, añoActual, edad, msg, cantidadCaracteres;

nombreCompleto = prompt('Ingresa tu nombre completo').toUpperCase().trim();
// if (nombreCompleto === '') {
//     alert(`Por favor ingresa un dato valido`);
//     nombreCompleto = prompt('Ingresa tu nombre completo');
// }A
añoNacimiento = Number(prompt('Ingresa tu año de nacimiento'));
// if (añoNacimiento === 0) {
//     alert(`Por favor ingresa un dato valido`);
//     añoNacimiento = Number(prompt('Ingresa tu año de nacimiento'));
// }
// else if (añoNacimiento >= 2023) {
//     alert(`Por favor ingresa un dato valido`);
//     añoNacimiento = Number(prompt('Ingresa tu año de nacimiento'));
// }
añoActual = Number(prompt('Ingresa el año actual'));
// if (añoActual === 0) {
//     alert(`Por favor ingresa un dato valido`);
//     añoActual = Number(prompt('Ingresa el año actual'));
// }

//Proceso lógico
if (nombreCompleto === "" || añoActual === 0 || añoNacimiento === 0) {
    msg = `Te faltarón datos, por favor ingresalos todos`
}
else if (añoNacimiento > añoActual) {
    msg = `Aguas! El año de nacimiento es mayor al actual`
}

// if ((nombreCompleto !== "" && añoActual !== 0 && añoNacimiento !== 0)) && (añoNacimiento) {
// }
else {
    //Obtener cantidad de caracteres de un string
    cantidadCaracteres = nombreCompleto.length;
    console.log(cantidadCaracteres);



    edad = añoActual - añoNacimiento;

    if (edad <= 12) {
        msg = `Hola ${nombreCompleto} tu eres un niño aún`;
    }
    else if (edad > 12 && edad < 18) {
        msg = `Hola ${nombreCompleto} tu eres un adolescente`;
    }
    else if (edad >= 18 && edad < 65) {
        msg = `Hola ${nombreCompleto} tu eres un adulto`;
    }
    else {
        msg = `Hola ${nombreCompleto} tu eres un adulto mayor`;
    }
}

//Salidad de datos
alert(msg); 
