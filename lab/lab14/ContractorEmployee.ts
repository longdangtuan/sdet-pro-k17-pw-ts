import Employee from "./Employee";

export default class ContractorEmployee extends Employee {
  constructor(type: string, salary: number) {
    super(type, salary);
  }
}
