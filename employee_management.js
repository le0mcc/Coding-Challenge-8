// Employee Management System
// Task 1: Create an employee class
class Employee {
    constructor(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    };
    // return a string of name, position, and salary
    getDetails() {
        console.log(`${this.name} works as a ${position} and has a salary of $${salary}`);
    }
};