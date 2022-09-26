// Задача 1

// Задание - Запиши условие в инструкции if так, чтобы функция работала правильно.

// Тесты для проверки - Объявлена функция checkAge(age).
// В выражении проверки возраста использован оператор >=
// Вызов checkAge(20) возвращает "You are an adult"
// Вызов checkAge(8) возвращает "You are a minor"
// Вызов checkAge(14) возвращает "You are a minor"
// Вызов checkAge(38) возвращает "You are an adult"
// В теле функции есть только одна инструкция if
// В теле функции нет инструкции else или else if

function checkAge(age) {
  if (age >= 18) { // Change this line
    return "You are an adult";
    }
    
  return "You are a minor";
}

// Тесты

console.log('Вызов checkAge(20) возвращает:', checkAge(20));
console.log('Вызов checkAge(8) возвращает:', checkAge(8));
console.log('Вызов checkAge(14) возвращает:', checkAge(14));
console.log('Вызов checkAge(38) возвращает:', checkAge(38));