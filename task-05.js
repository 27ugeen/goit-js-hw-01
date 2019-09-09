'use strict';

const CANCELED_BY_USER = 'Отменено пользователем';
const BAD_DESTINATION = 'В вашей стране доставка не доступна';

const userSaid = prompt('Введите название страны:');

let message;
let country;
let price;

const china = 'китай';
const chile = 'чили';
const australia = 'австралия';
const india = 'индия';
const jamaica = 'ямайка';

const chinaPrice = 100;
const chilePrice = 250;
const australiaPrice = 170;
const indiaPrice = 80;
const jamaicaPrice = 120;

// const WELL_DONE = `Доставка в ${country} будет стоить ${price} кредитов`;

if (userSaid === null) {
  message = CANCELED_BY_USER;
} else {
  const userSaidValid = userSaid.toLowerCase();
  switch (userSaidValid) {
    case china:
      country = china;
      price = chinaPrice;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;

    case chile:
      country = chile;
      price = chilePrice;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;

    case australia:
      country = australia;
      price = australiaPrice;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;

    case india:
      country = india;
      price = indiaPrice;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;

    case jamaica:
      country = jamaica;
      price = jamaicaPrice;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;

    default:
      message = BAD_DESTINATION;
  }
}
console.log(message);
alert(message);
