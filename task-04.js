'use strict';

const credits = 23580;
const pricePerDroid = 3000;

const CANCELED_BY_USER = 'Отменено пользователем';
const LOW_CREDITS = 'Недостаточно средств на счету!';

const userSaid = prompt('Сколько дроидов вы хотите купить?');

let message;
let totalPrice;

const userSaidNumber = Number(userSaid);

const balance = credits - userSaidNumber * pricePerDroid;

const WELL_DONE = `Вы купили ${userSaidNumber} дроидов, на счету осталось ${balance} кредитов.`;
const BAD_INPUT = `Некорректный ввод, на счету осталось ${credits} кредитов.`;

if (userSaid === null) {
  message = CANCELED_BY_USER;
} else {
  totalPrice = userSaidNumber * pricePerDroid;
  if (totalPrice > credits) {
    message = LOW_CREDITS;
  } else if (totalPrice < credits && totalPrice > 0) {
    message = WELL_DONE;
  } else {
    message = BAD_INPUT;
  }
}

console.log(message);
alert(message);
