/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const myName = 'Ivan'
const surname = 'Bielozertsev'
const profession = 'Developer'
const fullDescription = `My name is ${myName} ${surname} and I am a ${profession}`
console.log(fullDescription)

const myInfo = 'My name is ' + myName + ' ' + surname + ' and I am a ' + profession
console.log(myInfo)