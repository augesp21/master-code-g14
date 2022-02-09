/* let carro = {
    llantas: 4,
    color: "rojo",
    puertas: 5,
    usaGasolina: true
};

console.log(carro.color);
console.log(carro.puertas);

console.log(carro['usaGasolina']);
console.log(carro['puertas']); */


//Metodos del objeto
/* let perro = {
  nombre: "Bailey",
  color: "Negro con blanco",
  edad: 2,
  raza: "Schnauzer",
  ladrar: function(){
      return (`${this.nombre} puede ladrar wau wau`)
  },
  comer: function(){
      console.log("yomi yomi ")
  }
};


console.log(perro.ladrar());
console.log(perro.comer());

// Añadimos valores al objeto
perro.tamaño = "grande";
perro.macho = false;

console.log(perro);

// Modificar valores
perro.edad = 3;

// Eliminar un valor
delete perro.raza; */

// Destructuración

/* const animales = ["conejo","gato","perro","león"];
const [animal1, animal2, animal3, animal4] = animales;

console.log(`Mi primer mascota fue un ${animal3} y ahora tengo un ${animal4}, ${animal1}, ${animal2} `);

// Destructura lo que necesites

const nombres = ["Zanahoria","Raul","Bailey","Kermit"];

const [, nombre2, nombre3] = nombres;

console.log(`Mi primer mascota se llamó ${nombre2} y mi nueva mascota se llama ${nombre3}`); */

//Uso del operador rest

const empleado = ["Augusto", 26, "Campeche", " Desarrollador Full Stack (El cuak)"];

const [nombre, edad, ...rest] = empleado;

console.info(`${nombre} tiene ${edad}`);
console.log(`Los datos completos de ${nombre} son: ${rest}`);





