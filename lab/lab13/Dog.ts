import Animal from "./Animal";

export default class Dog extends Animal {
  constructor() {
    super();
    this.setName("Dog");
    this.setSpeed(Math.floor(Math.random() * 60) + 1);
  }
}
