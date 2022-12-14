// Задача 10

/* Метод строк split()
Метод split(delimeter) позволяет превратить строку в массив, «разбив» его 
по разделителю delimeter. Если разделитель это пустая строка, то получится массив 
отдельных символов. Разделителем может быть один или несколько символов.
const name = "Mango";
console.log(name.split("")); // ["M", "a", "n", "g", "o"]
const message = "JavaScript essentials";
console.log(message.split(" ")); // ["JavaScript", "essentials"]
*/


/*Задание
Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words
результат разделения строки message по разделителю delimeter - массив строк.

Тесты

Объявлена функция splitMessage(message, delimeter)
Вызов splitMessage("Mango hurries to the train", " ") возвращает ["Mango", "hurries", "to", "the", "train"]
Вызов splitMessage("Mango", "") возвращает ["M", "a", "n", "g", "o"]
Вызов splitMessage("best_for_week", "_") возвращает ["best", "for", "week"] 
*/

function splitMessage(message, delimeter) {
  let words;
  
  words = message.split(delimeter);
  
  return words;
}

// Тесты

console.log('Вызов splitMessage("Mango hurries to the train", " ") возвращает:', splitMessage("Mango hurries to the train", " "));
console.log('Вызов splitMessage("Mango", "") возвращает:', splitMessage("Mango", ""));
console.log('Вызов splitMessage("best_for_week", "_") возвращает:', splitMessage("best_for_week", "_"));