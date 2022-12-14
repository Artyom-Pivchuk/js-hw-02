// Задача 27: фильтрация массива чисел 2.0

/*
Задание

Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

Тесты

Объявлена функция filterArray(numbers, value)
Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]*/


// Тесты

function filterArray(numbers, value) {
    let newArray = [];
    
    for (let number of numbers) {
        if (number > value) {
            newArray.push(number);
        }
    }

    return console.log(newArray)
}

filterArray([1, 2, 3, 4, 5], 3);
filterArray([1, 2, 3, 4, 5], 4);
filterArray([1, 2, 3, 4, 5], 5);
filterArray([12, 24, 8, 41, 76], 38);
filterArray([12, 24, 8, 41, 76], 20);