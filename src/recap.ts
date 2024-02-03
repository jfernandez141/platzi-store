import { log } from 'console';

const myName = 'Jhamil';
const myAge = 28;
const suma = (a: number, b: number) => {
  return a + b;
};

suma(myAge, 2);
console.log(myName);

class Persona {
  constructor(
    private age: number,
    private name: string,
  ) {
    this.age = age;
    this.name = name;
  }
  getSummary() {
    return `My name is ${this.name}, ${this.age}`;
  }
}

const jhamil = new Persona(28, 'Jhamil');

console.log(jhamil.getSummary());
