import Employee from "./Employee";

export class EmployeeController {
  public getTotalSalary(employeeList: Employee[]): number {
    let totalSalary = 0;
    for (const employee of employeeList) {
      totalSalary += employee.getSalary();
    }
    return totalSalary;
  }

  public printHighestSalary(employees: any[]): void {
    let highestSalary = employees[0].getSalary();
    let type = "";
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].getSalary() > highestSalary) {
        highestSalary = employees[i].getSalary();
        type = employees[i].getType();
      }
    }
    console.log(`The highest salary is ${highestSalary} with type ${type}`);
  }
}
