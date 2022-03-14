'use strict'


class Animal {
    constructor(nombre,color){
        this.nombre = this.nombre
        this.color = color
    }
    funcionAnimal(){
        return console.log('Sonido de animal'); 
    }
}

const perro = new Animal('Bailey','Gris');
console.log(perro.color);
perro.funcionAnimal();


/* 
Molde -> clases/prototipos
|
Objetos, instancias 
*/
