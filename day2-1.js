// Question 1 (Filter unique array members using Set.)

const numbers = [1, 2, 3, 4, 2, 3, 5, 6, 1];
const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);

// Question 3: Write a program to implement inheritance upto 3 classes.The Class must contain private and public variables and static functions.

class Person {
  #address; // private variable
  _phone; // protected variable

  constructor(name, age, address, phone) {
    this.name = name;
    this.age = age;
    this.#address = address;
    this._phone = phone;
  }

  getAddress() {
    return this.#address;
  }

  static greet() {
    console.log("Hello");
  }
  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
    console.log(`Address: ${this.#address}, Phone: ${this._phone}`);
  }
}

class Employee extends Person {
  constructor(name, age, salary, address, phone) {
    super(name, age, address, phone);
    this.salary = salary;
  }
  display() {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}, Address: ${this.address}, Phone: ${this._phone}`
    );
  }
}

class Manager extends Employee {
  constructor(name, age, salary, address, phone, department) {
    super(name, age, salary, address, phone);
    this.department = department;
  }
  display() {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}, Address: ${this.address}, Phone: ${this._phone}, Department: ${this.department}`
    );
  }
}

// const person = new Person("John", 25, "Mumbai", 1234567890);
// person.display();

// const employee = new Employee("Jane", 30, 50000, "Noida", 9990016321);
// employee.display(); // access protected variable

// console.log(`Address: ${employee.getAddress()}`);

const manager = new Manager("Doe", 35, 100000, "Delhi", 9801234250, "HR");
manager.display(); // access protected variable

console.log(`Address: ${manager.getAddress()}`); // access private variable

// Static method
Person.greet();

// Question 6: Import a module for filtering unique elements in an array.

const { filterUnique } = require("./day2-2");
const numbers1 = [1, 2, 3, 4, 2, 3, 5, 6, 1];
console.log(filterUnique(numbers1), "filterUnique");

// Question 7: Write a program to flatten a nested array to single level using arrow functions.

const arr = [1, 2, [3, 4, [5, 6]], 7, 8, [9, 10]];
const flattenArray = (arr) => arr.flat(Infinity);
console.log(flattenArray(arr), "flattenArray");
