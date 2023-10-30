'use strict';

// ЗАДАЧА 7
// НАПИШІТЬ ПРОГРАМУ, ЯКА ПРОВІРЯЄ ЛОГІН І ПАРОЛЬ, І ВИВОДИТЬ ПРИВІТАННЯ - ЯКЩО ВСЕ ДОБРЕ, АБО ВИДАЄ ПОМИЛКУ , ЩО НЕ ВІРНИЙ ЛОГІН

// const login = prompt("Введіть ваш логін")
// const parole = prompt("Введіть ваш пароль")

// if (login === "butava" && parole === "Kotyk@2023") {
// console.log ("Вітаємо у Нарнії")
// } else {
//     console.log ("Помилка: Невірний логін або пароль.")
// }

// ЗАДАЧА 8
// НАПИШІТЬ ПРОГРАМУ , ЯКА БУДЕ ЗАПИТУВАТИ У КОРИСТУВАЧА ПЕРІОД ПІДПИСКИ НА СЕРВІС ТА ПОКАЗУВАТИМЕ ЦІНУ ПІДПИСКИ(ВИКОРИСТАЙ IF..ELSE, ТА ПЕРЕПИШИ НА SWITCH)
// ЯКЩО ДЕНЬ - ціна 1.99
// ЯУЩО НЕДІЛЯ - ціна 5.99
// ЯКЩО МІСЯЦЬ - ціна 10.99
// ЯКЩО РІК - ціна 100.99

// const period = prompt("Введіть період підписки (ДЕНЬ, НЕДІЛЯ, МІСЯЦЬ або РІК):");
// let price;

// if (period.toUpperCase() === "ДЕНЬ") {
//     price = 1.99;
// } else if (period.toUpperCase() === "НЕДІЛЯ") {
//     price = 5.99;
// } else if (period.toUpperCase() === "МІСЯЦЬ") {
//     price = 10.99;
// } else if (period.toUpperCase() === "РІК") {
//     price = 100.99;
// } else {
//     price = "Невідомий період";
//   }

//   console.log("Ціна підписки:", price);

const period = prompt("Введіть період підписки (ДЕНЬ, НЕДІЛЯ, МІСЯЦЬ або РІК):");
let price;

switch (period.toUpperCase()) {
    case "ДЕНЬ":
        price = 1.99;
        break;
        case "НЕДІЛЯ":
            price = 5.99;
            break;
            case "МІСЯЦЬ":
                price = 10.99;
            break;
            case "РІК":
                price = 100.99;
            break;
    default:
        price = "Невідомий період";
}

console.log("Ціна підписки:", price);