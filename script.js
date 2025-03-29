// Задание 6.6.1
const tenet = "Довод"; // Сантимент
let count = 0;
let answer = "";

const arr1 = Array.from(tenet.toLocaleLowerCase());

for (let i = 0; i < arr1.length; i += 1) {
  if (arr1[i] === arr1[arr1.length - i - 1]) {
    count += 1;
  }
}
if (count === arr1.length) {
  answer += `Слово ${tenet} является паиндромом`;
} else {
  answer += `Слово ${tenet} не является палиндромом`;
}

function displayData(answer, elementId) {
  const outputDiv = document.getElementById(elementId);
  outputDiv.innerHTML += answer;
}
displayData(answer, "output");

// Задание 6.6.2
const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];

const unique = Array.from(new Set(arr)).join(', ');
unique.slice(0, unique.length); // для удаления последнего пробела, хоть он и не показывается

displayData(unique, "output2");

// Задание 6.6.3
const userInput = prompt("Введите любое число:");
const num = Number(userInput);

let numberArray = [];
for (let i = 0; i <= num; i++) {
  numberArray.push(i);
}

displayData(numberArray, "output3");

// Задание 6.6.4
for (let i = 0; i < 3; i += 1) {
  if (i % 2 === 0) {
    console.log('X O X');
  } else {
    console.log('O X O');
  }
}

// Задание 6.6.5
const obj = {
  some: 'some',
  dom: 'text',
  arr: [1, 2, 3, 4, 5],
  tom: 'there'
};

const arrValues = Object.values(obj);
const fullArr = [];

for (let i = 0; i < arrValues.length; i++) {
  if (Array.isArray(arrValues[i]) === true) {
    for (let j = 0; j < arrValues[i].length; j++) {
      fullArr.push(arrValues[i][j]);
    }
  } else {
    fullArr.push(arrValues[i])
  }
}

console.log(fullArr)




// for (var key in obj)  { 
//   arrValues.push(obj[key]);
// }

// displayData(arrValues, "output4");

// var arrValues1 = [].concat(obj.some, obj.dom, obj.arr, obj.tom);
// console.log(arrValues1);
