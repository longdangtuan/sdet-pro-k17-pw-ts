import Employee from "./Employee";

export default class FulltimeEmployee extends Employee {
  constructor(type: string, salary: number) {
    super(type, salary);
  }
}
