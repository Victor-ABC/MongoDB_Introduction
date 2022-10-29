import Person from "./person.js";

export default class Professor extends Person {
    constructor(name, age, hochschule,) {
        super(name, age);
        this.hochschule = hochschule;
    }
    toString() {
        return super.toString() + " hochschule: " + this.hochschule;
    }
  }
  