//Realizar un juego de piedra, papel o tijeras para 2 jugadore

//Variables y entradas
var jugador1 = [];
var jugador2 = [];

alert(`Vamos a jugar piedra papel o tijera`)

jugador1 = prompt('Jugador 1 escoge piedra, papel o tijera ó nada para salir');
jugador2 = prompt('Jugador 2 escoge piedra, papel o tijera ó nada para salir');

/* if (jugador1 > 3 && jugador1 < 1 && jugador2 > 3 && jugador1 < 1) {
    prompt('Gracias por jugar')
}
else {

} */

console.log(jugador1);
console.log(jugador2);

if (jugador1 == '' || '' || ''){
    alert('Gracias por jugar')
}
else if (jugador2 == '' || '' || ''){
    alert('Gracias por jugar')
}


if (jugador1 == 'piedra') {

    if (jugador2 == 'papel') {
        alert('Jugador 2 haga ganado')
    }
    else if(jugador2 == 'tijera'){
        alert('Jugador 1 ha ganado')
    }
    else if(jugador2 == 'piedra'){
        alert('Empate')
    }
}

if (jugador1 == 'papel') {

    if (jugador2 == 'tijera') {
        alert('Jugador 2 haga ganado')
    }
    else if(jugador2 == 'piedra') {
        alert('Jugador 1 ha ganado')
    }
    else if(jugador2 == 'papel') {
        alert('Empate')
    }
}

if (jugador1 == 'tijera') {

    if (jugador2 == 'piedra') {
        alert('Jugador 2 haga ganado')
    }
    else if(jugador2 == 'papel') {
        alert('Jugador 1 ha ganado')
    }
    else if(jugador2 == 'tijera'){
        alert('Empate')
    }
}



