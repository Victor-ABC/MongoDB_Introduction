export default  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    toString() {
        return "name: " + this.name + " age: " + this.age;
    }
  }
  