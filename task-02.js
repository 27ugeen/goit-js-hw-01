'use strict';

const total = 100;
const ordered = 50;

if (ordered > total) {
  console.log('На складе недостаточно твоаров!');
} else if (ordered <= 0) {
  console.log('Неверное количество товаров! Попробуйте еще раз.');
} else {
  console.log('Заказ оформлен, с вами свяжется менеджер.');
}
