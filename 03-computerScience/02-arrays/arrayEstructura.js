"use strict"

class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }
    get(index){
        return this.data[index]
    }
    push(item){
        this.data[this.length] = item
        this.length++
        return this.data
    }
    pop(){
        const lastItem = this.data[this.length - 1]
        //Keyword delete
        delete this.data[this.length - 1]
        this.length--
        return lastItem
    }
    unshift(item){
        this.data[this.length] = item
    }

    shift(){

    }
}

const array1 = new MyArray();
array1.push('Esta vivo!');
array1.push('Sigue vivo!');
array1.push('Ayudaaa!');
array1.pop();

console.log(array1.length);
console.log(array1.data);
console.log(array1.get(1));
console.log(array1);