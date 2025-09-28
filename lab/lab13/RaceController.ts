import Animal from "./Animal";

export default class RaceController {
  public getFastestAnimal(animalList: Animal[]): Animal | null {
    if (animalList.length === 0) return null;
    let fastestAnimal = animalList[0];
    let maxSpeed = 0;
    for (const animal of animalList) {
      if (animal.getSpeed() > maxSpeed) {
        maxSpeed = animal.getSpeed();
      }
      fastestAnimal = animal;
    }

    return fastestAnimal;
  }
}
