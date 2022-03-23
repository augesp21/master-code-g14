/* "use strict";

// print.- Mostrar todos los valores
// empty.- Saber si la queue esta vacia
// enqueue.- Agregar un nuevo elemento al final de la queue
// dequeue.- Retornar el primer elemento de Queue eliminando el valor
// peek.- Retornar el primer elemento de queue sin quitarlo
// back.- Retornar el ultomo elemento de Queue sin el valor


class Cola {
  constructor() {
    this.pila = [];
  }

  push(dato) {
    this.pila.push(dato);
  }

  pop() {
    return this.pila.pop();
  }

  peek() {
    return this.pila[this.pila.length - 1];
  }

  size() {
    return this.pila.length;
  }

  print() {
    return this.pila;
  }
}


//Codigo de Alan MAHG
class Queue{
    constructor(){
        this.queue = [];
    }
    print(){
        console.log(this.queue);
    }
    empty(){
        
        if (this.queue.length === 0) {
            console.log(tru);
        }else{
            console.log(false);
        }
    }
    enqueue(valor){
        this.queue.push(valor);
    }
    dequeue(){
        let eliminado = this.queue.shift();
        console.log(eliminado);
    }
    peek(){
        let primerElemento = this.queue[0];
        console.log(primerElemento);
    }
    back(){
        let ultimoElemento = this.queue[this.queue.length - 1];
        console.log(ultimoElemento);
    }
}

const queue = new Queue();
queue.enqueue('Hola');
queue.enqueue('como');
queue.enqueue('estan');
queue.print();
queue.empty();
queue.dequeue();
queue.print();
queue.peek();
queue.back();
queue.print(); */

'use strict'

// print.- Mostrar todos los valores
// empty.- Saber si la queue esta vacia
// enqueue.- Agregar un nuevo elemento al final de la queue
// dequeue.- Retornar el primer elemento de Queue eliminando el valor
// peek.- Retornar el primer elemento de queue sin quitarlo
// back.- Retornar el ultomo elemento de Queue sin quitar el valor

class Queue {
  constructor(){
      this.queue = [];
  }

  print(){
      console.log(this.queue);
  }

  empty(){
      if (this.queue.length === 0) {
          console.log(true);
      } else {
          console.log(false);
      }
  }

  enqueue(valor){
      this.queue.push(valor);
  }

  dequeue(){
      console.log(this.queue.shift());
  }

  peek(){
      console.log(this.queue[0]);
  }

  back(){
      console.log(this.queue[this.queue.length - 1]);
  }
}

const queue = new Queue();

queue.enqueue('Hola');
queue.enqueue('como');
queue.enqueue('estan');
queue.print();
queue.empty();
queue.dequeue();
queue.print();
queue.peek();
queue.back();
queue.print();