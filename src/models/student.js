import Person from "./person.js";

export default class Student extends Person {
    constructor(name, age, hochschule, matrNr) {
      super(name, age, hochschule);
      this.matrNr = matrNr;
    }
    toString() {
        return super.toString() + " matrNr: " + this.matrNr + " hochschule: " + this.hochschule.name;
    }
  }
  