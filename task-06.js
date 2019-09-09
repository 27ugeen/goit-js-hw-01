'use strict';

let input;
let total = 0;
let message;

while (true) {
  input = prompt('Введите число:');
  const sum = `Общая сумма чисел равна ${total}`;

  if (input === null) {
    message = sum;
    break;
  }

  let inputNumber = Number(input);

  total += inputNumber;
  message = sum;
}
console.log(message);
alert(message);
