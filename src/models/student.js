import Person from "./person.js";

export default class Student extends Person {
    constructor(name, age, matrNr) {
      super(name, age);
      this.matrNr = matrNr;
    }
    toString() {
        return super.toString() + " matrNr: " + this.matrNr;
    }
  }
  