// Задача 3

/* Техническое задание
Напиши программу, которая определяет сколько цифр в одном числе.
Само число записано в переменную number.
Найди количество цифр в этом числе и запиши результат в переменную quantity.
*/

// Первое решение
// let number = 123;
// let quantity = 0;

// function length(number) {
//     return number.toString().length
// }
// console.log(length(number))

// Второе решение
let number = 123;
let quantity = 0;

function length(number) {
    quantity = number.toString().length;
    return quantity;
}

console.log(length(number))

