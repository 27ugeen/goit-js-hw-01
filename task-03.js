'use strict';

const CANCELED_BY_USER = 'Отменено пользователем!';
const WELCOME = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';

const ADMIN_PASSWORD = 'jqueryismyjam';
const userSaid = prompt('Введите пароль!');

let message;

if (userSaid === null) {
  message = CANCELED_BY_USER;
} else if (userSaid === ADMIN_PASSWORD) {
  message = WELCOME;
} else {
  message = ACCESS_DENIED;
}

console.log(message);
alert(message);
