export default class Person {
    constructor(name, age, hochschule) {
      this.name = name;
      this.age = age;
    }
    toString() {
        return "name: " + this.name + " age: " + this.age;
    }
  }
  