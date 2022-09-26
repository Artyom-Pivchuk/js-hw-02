/*
Задача: склад товаров 3.0
Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате.
Она принимает два параметра, значения которых будут задаваться во время её вызова.

available - доступное количество товаров на складе
ordered - количество единиц товара в заказе

Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

function checkStorage(available, ordered) {
  // Change code below this line
  let message;
  if (ordered === 0) {
    message = "Your order is empty!";
  } else if (ordered > available) {
    message = "Your order is too large, not enough goods in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }
  return message;
  // Change code above this line
}
*/

function checkStorage(available, ordered) {
    // Change code below this line
    let message;
    if (ordered === 0) {
        return "Your order is empty!";
    } else if (ordered > available) {
        return "Your order is too large, not enough goods in stock!";
    }
    return "The order is accepted, our manager will contact you";
    // Change code above this line
}
    
    
// Тесты

console.log('Вызов функции checkStorage(200, 100) возвращает:', checkStorage(200, 100));
console.log('Вызов функции checkStorage(200, 0) возвращает:', checkStorage(200, 0));
console.log('Вызов функции checkStorage(200, 300) возвращает:', checkStorage(200, 300));