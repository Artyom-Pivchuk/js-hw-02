// Задача 11

/* Задача: гравировка украшений
Задание
Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов
и цены за слово. Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку,
состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).
Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

Тесты

Объявлена функция calculateEngravingPrice(message, pricePerWord)
Вызов calculateEngravingPrice("JavaScript is in my blood", 10) возвращает 50
Вызов calculateEngravingPrice("JavaScript is in my blood", 20) возвращает 100
Вызов calculateEngravingPrice("Web-development is creative work", 40) возвращает 160
Вызов calculateEngravingPrice("Web-development is creative work", 20) возвращает 80
 */

function calculateEngravingPrice(message, pricePerWord) {
    return message.split(" ").length*pricePerWord
}

// Тесты

console.log('Вызов calculateEngravingPrice("JavaScript is in my blood", 10) возвращает:', calculateEngravingPrice("JavaScript is in my blood", 10));
console.log('Вызов calculateEngravingPrice("JavaScript is in my blood", 20) возвращает:', calculateEngravingPrice("JavaScript is in my blood", 20));
console.log('Вызов calculateEngravingPrice("Web-development is creative work", 40) возвращает:', calculateEngravingPrice("Web-development is creative work", 40));
console.log('Вызов calculateEngravingPrice("Web-development is creative work", 20) возвращает:', calculateEngravingPrice("Web-development is creative work", 20));