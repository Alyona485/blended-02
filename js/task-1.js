'use strict';

// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

let a = 10;
if (a === 10) {
  console.log('Вірно');
} else {
  console.log('Невірно');
}

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі.

let num = 2; // Змініть значення для перевірки інших випадків
let result;

switch (num) {
  case 1:
    result = 'зима';
    break;
  case 2:
    result = 'весна';
    break;
  case 3:
    result = 'літо';
    break;
  case 4:
    result = 'осінь';
    break;
  default:
    result = 'невідомо';
}

console.log(result);

// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10

function formatTime(minutes) {
  let hours = Math.floor(minutes / 60);
  let remainingMinutes = minutes % 60;

  let formattedHours = hours.toString().padStart(2, '0');
  let formattedMinutes = remainingMinutes.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
}

let minutesInput = 70; // Отримайте це значення від користувача
console.log(formatTime(minutesInput));
