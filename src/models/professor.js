import Person from "./person.js";

export default class Professor extends Person {
    constructor(name, age) {
        super(name, age);
    }
    toString() {
        return super.toString();
    }
  }
  