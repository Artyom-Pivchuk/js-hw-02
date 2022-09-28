// Задача 26

/*
Задание

Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

Тесты

Объявлена функция calculateTotalPrice(order)
Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
Вызов функции calculateTotalPrice([]) возвращает 0
Вызов функции calculateTotalPrice() со случайным массивом чисел возвращает правильную сумму */


function calculateTotalPrice(order) {
    let total = 0;

    for (let element of order) {
        total = total + element;
    }

    return console.log(total)
}

// Тесты
calculateTotalPrice([12, 85, 37, 4]);
calculateTotalPrice([164, 48, 291]);
calculateTotalPrice([412, 371, 94, 63, 176]);
calculateTotalPrice([]);