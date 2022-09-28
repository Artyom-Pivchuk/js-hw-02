// Задача 21: поиск самого длинного слова

/*
Задание
Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из 
слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

Тесты

Объявлена функция findLongestWord(string)
Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
Вызов функции findLongestWord("Google do a roll") возвращает Google
Вызов функции findLongestWord("May the force be with you") возвращает force
Вызов функции findLongestWord() со случайной строкой возвращает правильное значение 
*/

function findLongestWord(string) {
    const words = string.split(" ");
    let longestWord = words[0];

    for (let word of words) {  

        if (word.length > longestWord.length) {
            longestWord = word; 
        }

    }
    return longestWord
}

// Тесты
console.log("Вызов функции findLongestWord(The quick brown fox jumped over the lazy dog) возвращает:", findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log("Вызов функции findLongestWord(Google do a roll) возвращает:", findLongestWord("Google do a roll"));
console.log("Вызов функции findLongestWord(May the force be with you) возвращает:", findLongestWord("May the force be with you"));