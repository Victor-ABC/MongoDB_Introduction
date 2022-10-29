export default class Kurs {
    constructor(name, hoerer, leser, hochschule) {
      this.name = name;
      this.hoerer = hoerer;
      this.leser = leser;
      this.hochschule = hochschule;
    }
    toString() {
        var hoerer = this.hoerer.map(e => "\n{" + e.toString() +  "}").toString();
        return "Der Kurs '" + this.name + "' der Hochschule: '" + this.hochschule.name + "' wird gelesen von Prof. " + this.leser.name + " und gehört von " + hoerer;
    }
  }
  