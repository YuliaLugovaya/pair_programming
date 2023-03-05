// Задача 1

/* Техническое задание

Напиши программу, которая будет переводить градусы Фаренгейта в температуру по Цельсию.
В переменной fahrenheitTemperature указаны градусы по Фаренгейту.
Формула расчёта выглядит так: Tc = 5/9 * (Tf - 32).
Результат вычислений запиши в переменную celsiusTemperature.

*/

let fahrenheitTemperature = 77;

function celsius(far) {
   return 5/9 * (far - 32);
}
console.log(celsius(fahrenheitTemperature));
