// Опишіть своїми словами, що таке метод об'єкту
// метод об'єкту це своєрідна функція яка належить об'єкту або класу
// Який тип даних може мати значення властивості об'єкта?
// найбільш важлива частина об'єкту це його властивості. об'єкт являє собою набір вдастивостей, де кожна властивість складається з ключа та значення зв'язаного з цим ключем
// ключ може бути тільки у строки, а значення може містити любий тип даних
// Об'єкт це посилальний тип даних. Що означає це поняття?
// це означає що змінна не зберігає даних. вона містить лише посилання на місце зберігання в пам'яті
// як квиток в кіно, що має тільки посилання де знаходиться місце

// Завдання
// Реалізувати функцію створення об'єкта "юзер". 
// Завдання має бути виконане на чистому Javascript без використання бібліотек типу jQuery або React.

// Технічні вимоги:
// Написати функцію createNewUser(), яка буде створювати та повертати об'єкт newUser.
// При виклику функція повинна запитати ім'я та прізвище.
// Використовуючи дані, введені юзером, створити об'єкт newUser з властивостями firstName та lastName.
// Додати в об'єкт newUser метод getLogin(), який повертатиме першу літеру імені юзера, з'єднану з прізвищем, все в нижньому регістрі (наприклад, Ivan Kravchenko → ikravchenko).
// Створити юзера за допомогою функції createNewUser(). Викликати у цього юзера функцію getLogin(). Вивести у консоль результат виконання функції.

function createNewUser(){
    const name = prompt("your name?")
    const lastname = prompt("your lastname?")
    return {
        name, 
        lastname, 
        getLogIn(){
            return (this.name[0] + this.lastname).toLowerCase()
        }
    }
}
const newUser = createNewUser()
console.log(newUser)
console.log(newUser.getLogIn())