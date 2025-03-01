// Block scoping

var a = 1;

const sum = () => {
  var a = 2;
  console.log(a, "inside");
};

sum();
console.log(a, "outside");

//  Desructuring
// 1. Array Destructuring

const numbers = [1, 2, 3];
const [x, y, z] = numbers;
console.log(x, y, z);

// 2. Object Destructuring
const person = {
  name: "Raushan",
  age: 25,
  address: "Mumbai",
  phone: 1234567890,
  company: {
    name: "ABC",
    location: "delhi",
  },
};

// First way: destructuring seperately.
const { name: personName, age, address, phone, company } = person;
const { name: companyName, location } = company;
console.log(personName, age, address, phone, companyName, location);

// Second way: destructuring togather.
// const {
//   name: personName,
//   age,
//   address,
//   phone,
//   company: { name: companyName, location },
// } = person;

// console.log(personName, age, address, phone, companyName, location);

// Spread Operator

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const numbers3 = [7, 8, 9];

const allNumbers = [...numbers1, ...numbers2, ...numbers3];
console.log(allNumbers);

// Default Arguments in Functions

const add = (a = 0, b = 0) => {
  console.log(a + b, "add");
};

add(2, 3);
add(2);
add();

// Template String/Literal
console.log(`Name: ${personName}, Age: ${age}, Address: ${address}`);

// Swapping variables

let x1 = 10;
let y1 = 20;

[x1, y1] = [y1, x1];
console.log(x1, y1);

// Destructuring in loops
const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Doe", age: 35 },
];

for (const { name, age } of users) {
  console.log(name, age);
}

//  Destructuring in function arguments

const display = ({ name, age }) => {
  console.log(`Name: ${name}, Age: ${age}`);
};
const person1 = { name: "John", age: 25 };
display(person1);

// Rest operator in destructuring

const [a1, b1, ...other] = [1, 2, 3, 4, 5];
console.log(a1, b1, other);

// Rest operator in function arguments
const sum1 = (...args) => {

  console.log(args);
};

sum1(1, 2, 3, 4, 5);

// 4. Default Values
// 5. Rest Operator
// 6. Destructuring in function arguments
// 7. Swapping variables
// 8. Ignoring values
// 9. Destructuring in loops
// 10. Destructuring in function arguments
