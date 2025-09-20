const { default: Animal } = require("./Animal");

const horse = new Animal("Horse", 0);
const tiger = new Animal("Tiger", 0);
const dog = new Animal("Dog", 0);

horse.setRandomSpeed(0, 75);
tiger.setRandomSpeed(0, 100);
dog.setRandomSpeed(0, 60);

if (horse._speed > tiger._speed && horse._speed > dog._speed) {
  console.log(`Winner is ${horse._name}, with speed: ${horse._speed}`);
} else if (tiger._speed > horse._speed && tiger._speed > dog._speed) {
  console.log(`Winner is ${tiger._name}, with speed: ${tiger._speed}`);
} else if (dog._speed > horse._speed && dog._speed > tiger._speed) {
  console.log(`Winner is ${dog._name}, with speed: ${dog._speed}`);
} else {
  console.log("No winner");
}
