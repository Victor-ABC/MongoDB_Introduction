import Person from "./person";

export default class Student extends Person {
    constructor(matrNr, hochschule) {
      this.matrNr = matrNr;
      this.hochschule = hochschule;
    }
    toString() {
        return super.toString() + "matrNr: " + this.matrNr + " hochschule: " + this.hochschule.name;
    }
  }
  