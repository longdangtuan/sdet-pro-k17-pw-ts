export default class Animal {
  protected name: string = "Animal";
  protected speed: number = 0;

  protected setSpeed(speed: number) {
    this.speed = speed;
  }

  protected setName(name: string) {
    this.name = name;
  }

  public getSpeed(): number {
    return this.speed;
  }

  public getName(): string {
    return this.name;
  }
}
