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
  // create addEmployee method to push employee to the department
  addEmployee(employee) {
    this.employees.push(employee);
  };
  // calculate total salary for all employees in a department
  getDepartmentSalary() {
    const total = this.employees.reduce((sum, employee) => sum + employee.salary, 0);
    return total;
  };
  // Task 4: Handle bonuses for managers
  calculateTotalSalaryWithBonus() {
    const totalWithBonus = this.employees.reduce((sum, employee) => {
        let total = 0;
        if (employee instanceof Manager) {
            total = sum + employee.salary + employee.bonus;
        }
        else {
            total = sum + employee.salary;
        };
        return total;
    }, 0);
    return totalWithBonus;
  };
};

//Task 3: Create a manager class that inherits from employee
class Manager extends Employee {
    constructor(name, salary, position, department, bonus) {
        super(name, salary, position, department);
        this.bonus = bonus;
    };
    // Return details with bonus added
    getDetails() {
        return `${this.name} works as a ${this.position} and has a salary of $${this.salary} with a bonus of $${this.bonus}.`;
    };
};

// Task 5: Create and manage departments and employees
// Create departments
const sales = new Department("Sales", []);
const it = new Department("IT", []);

// Create employees and managers
const megan = new Employee("Megan", 50000, "Employee", "Sales");
const julia = new Manager("Julia", 60000, "Sales Team Manager", "Sales", 5000);
const robert = new Employee("Bob", 60000, "Developer", "IT");
const albert = new Manager("Albert", 90000, "IT Manager", "IT", 5000);

// Add employees to departments
sales.addEmployee(megan);
sales.addEmployee(julia);
it.addEmployee(robert);
it.addEmployee(albert);

// Calculate total salary for each department
console.log(`Total salary for Sales: $${sales.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Sales: $${sales.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary for IT: $${it.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for IT: $${it.calculateTotalSalaryWithBonus()}`);
