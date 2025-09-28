import Animal from "./Animal";

export default class Tiger extends Animal {
  constructor() {
    super();
    this.setName("Tiger");
    this.setSpeed(Math.floor(Math.random() * 100) + 1);
  }
}
