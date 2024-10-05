// Employee Management System
// Task 1: Create an employee class
class Employee {
  constructor(name, salary, position, department) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department;
  }
  // return a string of name, position, and salary
  getDetails() {
    return `${this.name} works as a ${this.position} and has a salary of $${this.salary}.`;
  }
}

// Task 2: Create a department class
class Department {
  constructor(name, employees) {
    this.name = name;
    this.employees = employees;
  };
  addEmployee(employee) {
    this.employees.push(employee);
  };
  getDepartmentSalary() {
    const total = this.employees.reduce((sum, employee) => sum + employee.salary, 0);
    return total;
  };
};