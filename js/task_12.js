// Задача 12

/* Метод массива join()
Метод массивов join(delimeter) позволяет соединить элементы массива в строку. В строке элементы 
будут разделены символом или группой символов указанных в delimeter. То есть это операция обратная 
методу строк split(delimeter).
const words = ["JavaScript", "is", "amazing"];
console.log(words.join("")); // 'JavaScriptisamazing'
console.log(words.join(" ")); // 'JavaScript is amazing'
console.log(words.join("*")); // 'JavaScript*is*amazing'

Задание

Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения
элементов массива array c разделителем delimeter - строку.

Тесты

Объявлена функция makeStringFromArray(array, delimeter)
Вызов makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") возвращает "Mango hurries to the train"
Вызов makeStringFromArray(["M", "a", "n", "g", "o"], "")) возвращает "Mango"
Вызов makeStringFromArray(["top", "picks", "for", "you"], "_") возвращает "top_picks_for_you"
*/

function makeStringFromArray(array, delimeter) {
    const string = array.join(delimeter);
    return string
}

console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));