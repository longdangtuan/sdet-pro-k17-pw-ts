import Dog from "./Dog";
import Horse from "./Horse";
import RaceController from "./RaceController";
import Tiger from "./Tiger";

let dog = new Dog();
let tiger = new Tiger();
let horse = new Horse();
let race = new RaceController();
let fastestAnimal = race.getFastestAnimal([dog, tiger, horse]);
console.log(
  `Winner is ${fastestAnimal?.getName()}, with speed: ${fastestAnimal?.getSpeed()}`
);
