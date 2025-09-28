import Animal from "./Animal";

export default class Horse extends Animal {
  constructor() {
    super();
    this.setName("Horse");
    this.setSpeed(Math.floor(Math.random() * 75) + 1);
  }
}
