// Задание 7.7.1

function printInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}`)
}

const person = {
  name: 'Paul',
  age: '22'
}

console.log(printInfo.call(person))

// Задание 7.7.2

function calculate(a, b, operator) {
  const operations = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => x / y,
  };

  if (operator in operations) {
    return operations[operator](a, b);
  }
}

console.log(calculate(2, 3, "+"));

// Задание 7.7.3

const users = [
  { name: "Алексей", age: 25 },
  { name: "Мария", age: 17 },
  { name: "Иван", age: 20 },
  { name: "Екатерина", age: 16 },
  { name: "Дмитрий", age: 30 },
  { name: "Ольга", age: 19 },
  { name: "Михаил", age: 5 },
];

const arrAgeAbove18 = users.filter((users) => users.age >= 18);
const arrNames = users.map((users) => users.name);

console.log(arrAgeAbove18);
console.log(arrNames);

// Задание 7.7.4

const person1 = {
  fullName: "Paul Bibikov",
};

function setFullName(name1) {
  this.fullName = name1;
}

const setPersonFullName = setFullName.bind(person1);

setPersonFullName("John Smith");

console.log(person1);

// Задание 7.7.5

const arr = [1, 2, 5, 56, 3, -12, 128, 1, 1, 2];
let uniqeArr = [];

const getSorted = (arr) => {
  uniqeArr = new Set(arr);
  return Array.from(uniqeArr).sort((a, b) => a - b);
}

console.log(getSorted(arr));
