"use strict";

const arereglo = [
  {
    nombre: "Alan",
    lugarNacimiento: {
      Pais: "México",
      Ciudad: "",
      Estado: "",
    },
  },
  {
    nombre: "Enrique",
    apellido: "Maya",
    lugarNacimiento: [
      {
        Pais: "México",
        Ciudad: "",
        Estado: "",
      },
      {
        Pais: "México",
        Ciudad: "",
        Estado: "",
      },
    ],
  },
  {
    nombre: "Ariadne",
    lugarNacimiento: {
      Pais: "México",
      Ciudad: "",
      Estado: "",
    },
  },
  {
    nombre: "Beatriz",
    lugarNacimiento: {
      Pais: "México",
      Ciudad: "",
      Estado: "",
    },
  },
];

/* const arregloBasico = [
    1, 2, 3
];
arregloBasico.push('d');
console.log(arregloBasico[arregloBasico.length - 1]);
arregloBasico.pop();
console.log(arregloBasico[arregloBasico.length - 1]);

console.log(arregloBasico.sort((a,b) => {
    return b - a;
}));

console.log(arregloBasico.sort((a,b) => {
    return a - b;
})); */

const arregloBasico = [1, 5, 2, 4, 3, 3, 5];

/* const filtrado = arregloBasico.filter(function(arreglo){
    if (arreglo === 5) {
        return arreglo
    }
}); */

/* const filtrado = arregloBasico.filter(arreglo => arreglo === 5);
console.log(filtrado);

const encontrar = arregloBasico.find(arreglo => arreglo === 5);
console.log(encontrar);

const mapear = arregloBasico.map(arreglo => arreglo); */

const arreglo = [1, 2, 3, 4, 5];
const arreglo1 = arreglo.map((arreglo) => arreglo);

arreglo[0] = 6;
arreglo1[1] = 7;

console.log(arreglo);
console.log(arreglo1);

//--------------------------------------------------------

const arregloa = [
  {
    dato: 1,
    info: {
      nombre: 'Daniel',
      ciudades: []
    }
  },
  {
    dato: 2,
  },
  {
    dato: 3,
  },
];

const arreglob = arregloa.map((arr) => ({ ...arr }));

arregloa[0].dato = 6;
arreglob[1].dato = 7;
arregloa[0].info.nombre = 'Karla';

console.log(arregloa);
console.log(arreglob);
