export default  class Person {
    constructor(name, age, hochschule) {
      this.name = name;
      this.age = age;
      this.hochschule = hochschule;
    }
    toString() {
        return "name: " + this.name + " age: " + this.age + " hochschule: " + this.hochschule.name;
    }
  }
  