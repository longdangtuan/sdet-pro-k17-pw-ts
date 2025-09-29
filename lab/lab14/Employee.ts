export default class Employee {
  protected type: string;
  protected salary: number;
  constructor(type: string, salary: number) {
    this.type = type;
    this.salary = salary;
  }

  public getSalary() {
    return this.salary;
  }

  public getType() {
    return this.type;
  }
}
