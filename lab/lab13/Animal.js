export default class Animal {
  constructor(name, speed) {
    this._name = name;
    this._speed = speed;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get speed() {
    return this._speed;
  }

  setRandomSpeed(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    this._speed =
      Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
  }

  set speed(value) {
    this._speed = value;
  }
}
