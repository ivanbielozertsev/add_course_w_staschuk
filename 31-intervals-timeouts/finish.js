/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */

// setTimeout(() => console.log("Сообщение номер 1"), 0)
// setInterval(() => console.log())

setTimeout(() => console.log('Сообщение номер 1'), 0)
let i = 1
let interval = setInterval(() => {
    i = i + 1
    console.log('Сообщение номер ' + i)
    }, 2000)

setTimeout(() => clearInterval(interval), 10000)