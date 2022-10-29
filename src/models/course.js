export default class Course {
    constructor(name, hoerer, leser) {
      this.name = name;
      this.hoerer = hoerer;
      this.leser = leser;
    }
    toString() {
        var hoerer = "hoerer: " + this.hoerer.map(e => " name: " + e.name).toString();
        return "Der Kurs '" + this.name + " wird gelesen von Prof. " + this.leser.name + " und gehört von " + hoerer;
    }
  }
  