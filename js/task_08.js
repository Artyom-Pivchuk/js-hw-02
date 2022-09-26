// Задача 8
/*
Задание
Объяви две перемнные:

Имя переменной - Ожидаемое значение
lastElementIndex - Индекс последнего элемента масcива fruits через длина_массива - 1
lastElement	- Значение последнего элемента массива

Тесты
Объявлена переменная lastElementIndex
Значение переменной lastElementIndex это число 3
Объявлена переменная lastElement
Значение переменной lastElementIndex это строка "banana"
 */

const fruits = ["apple", "plum", "pear", "orange"];
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[fruits.length - 1];

// Тесты

console.log("lastElementIndex = ", lastElementIndex);
console.log("lastElement = ", lastElement);