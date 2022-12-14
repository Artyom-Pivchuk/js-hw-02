// Задача 5

/* 
Задание
Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.
Имя переменной	Значение переменной

firstElement	первый элемент массива
secondElement	второй элемент массива
lastElement	последний элемент массива

Тесты

Объявлена переменная firstElement
Значение переменной firstElement это строка "apple"
Объявлена переменная secondElement
Значение переменной secondElement это строка "plum"
Объявлена переменная lastElement
Значение переменной lastElement это строка "orange" 

Доступ к элементам по индексу
Для доступа к значению элемента массива применяют синтаксис квадратных скобок массив[индекс].
Между именем переменной массива и квадратными скобками не должно быть пробела.

Внимание

Индексация элементов массива начинается с нуля.
const planets = ["Earth", "Mars", "Venus"];
planets[0]; // "Earth"
planets[2]; // "Venus"
*/


const fruits = ["apple", "plum", "pear", "orange"];

const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

// Тесты

console.log(firstElement);
console.log(secondElement);
console.log(lastElement);
