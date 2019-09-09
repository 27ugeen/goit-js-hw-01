'use strict';

const CANCELED_BY_USER = 'Отменено пользователем!';
const WELCOME = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';

const ADMIN_PASSWORD = 'jqueryismyjam';
const userSaid = prompt('Введите пароль!');

let message;

if (userSaid === null) {
  message = CANCELED_BY_USER;
  console.assert(
    userSaid === null && message === CANCELED_BY_USER,
    'Error: ошибка при обработке null!'
  );
} else if (userSaid === ADMIN_PASSWORD) {
  message = WELCOME;
  console.assert(
    userSaid === ADMIN_PASSWORD && message === WELCOME,
    'Error: ошибка при обработке правильного пароля!'
  );
} else {
  message = ACCESS_DENIED;
  console.assert(
    userSaid !== ADMIN_PASSWORD &&
      message !== null &&
      message === ACCESS_DENIED,
    'Error: ошибка при обработке неправильного пароля!'
  );
}

console.log(message);
alert(message);
