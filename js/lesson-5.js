/*
=== 1.1 ПІДТЕМА «ОБ'ЄКТ» (Варіант 2: Завдання 2, 8) ===
Завдання 2: Створити об'єкт book (назва, автор, рік видання, жанр, кількість сторінок).
Вивести в консоль назву книги та ім'я автора через крапку.
Завдання 8: Створити об'єкт employee (name, position, salary) і змінну propertyName.
Отримати значення властивості через квадратні дужки.
*/
function runSubtopic1() {
    console.log("=== 1.1 Об'єкт ===");

    const book = {
        title: "Кобзар",
        author: "Тарас Шевченко",
        year: 1840,
        genre: "Поезія",
        pages: 720
    };
    console.log(`Назва: ${book.title}, Автор: ${book.author}`);

    const employee = {
        name: "Богдан",
        position: "Frontend Developer",
        salary: 2500
    };
    const propertyName = "position";
    console.log(`Властивість ${propertyName}:`, employee[propertyName]);
}

/*
=== 1.2 ПІДТЕМА «МЕТОДИ ОБ'ЄКТА» (Варіант 2: Завдання 2, 9) ===
Завдання 2: Створити об'єкт product (title, category, price, quantity).
Отримати масив значень через Object.values().
Завдання 9: Створити масив пар [['name', 'Іван'], ['age', 20], ['city', 'Київ']].
Перетворити на об'єкт через Object.fromEntries().
*/
function runSubtopic2() {
    console.log("=== 1.2 Методи об'єкта ===");

    const product = {
        title: "Ноутбук",
        category: "Електроніка",
        price: 35000,
        quantity: 7
    };
    console.log("Значення product:", Object.values(product));

    const entries = [
        ["name", "Іван"],
        ["age", 20],
        ["city", "Київ"]
    ];
    const person = Object.fromEntries(entries);
    console.log("Об'єкт з масиву пар:", person);
}

/*
=== 1.3 ПІДТЕМА «МАСИВ ОБ'ЄКТІВ» (Варіант 2: Завдання 2, 6) ===
Завдання 2: Масив із 5 студентів. Через for...of вивести ім'я, вік та групу кожного.
Завдання 6: Масив студентів (id, name, grade). Знайти студента за id циклом for та змінити оцінку.
*/
function runSubtopic3() {
    console.log("=== 1.3 Масив об'єктів ===");

    const studentsList = [
        { id: 1, name: "Олена", age: 19, group: "ІА-44" },
        { id: 2, name: "Богдан", age: 19, group: "ІА-44" },
        { id: 3, name: "Андрій", age: 20, group: "ІА-44" },
        { id: 4, name: "Марія", age: 19, group: "ІА-43" },
        { id: 5, name: "Іван", age: 21, group: "ІА-42" }
    ];

    for (const st of studentsList) {
        console.log(`Студент: ${st.name}, Вік: ${st.age}, Група: ${st.group}`);
    }

    const gradedStudents = [
        { id: 1, name: "Олена", grade: 85 },
        { id: 2, name: "Богдан", grade: 90 },
        { id: 3, name: "Андрій", grade: 74 }
    ];

    const targetId = 3;
    for (let i = 0; i < gradedStudents.length; i++) {
        if (gradedStudents[i].id === targetId) {
            gradedStudents[i].grade = 95;
        }
    }
    console.log("Оновлений масив студентів:", gradedStudents);
}

/*
=== 1.4 ПІДТЕМА «ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ» (Варіант 2: Завдання 2, 6, 9) ===
Завдання 2: Об'єкт user (name, email, phone). Перейменувати name -> userName, email -> userEmail.
Завдання 6: Масив books (3 книги). Отримати назви перших двох книг і автора першої книги.
Завдання 9: Об'єкт company (name + вкладений director). Отримати назву компанії та firstName як directorName.
*/
function runSubtopic4() {
    console.log("=== 1.4 Деструктуризація об'єктів ===");

    const user = {
        name: "Богдан",
        email: "bohdan@kpi.ua",
        phone: "+380991234567"
    };
    const { name: userName, email: userEmail } = user;
    console.log("Перейменовані змінні:", userName, userEmail);

    const books = [
        { title: "Тіні забутих предків", author: "Коцюбинський", year: 1911 },
        { title: "Тигролови", author: "Багряний", year: 1944 },
        { title: "Місто", author: "Підмогильний", year: 1928 }
    ];
    const [{ title: firstTitle, author: firstAuthor }, { title: secondTitle }] = books;
    console.log(`Книга 1: ${firstTitle} (${firstAuthor}), Книга 2: ${secondTitle}`);

    const company = {
        companyName: "TechSoft",
        director: {
            firstName: "Олександр",
            lastName: "Коваленко",
            position: "CEO"
        }
    };
    const { companyName, director: { firstName: directorName } } = company;
    console.log(`Компанія: ${companyName}, Директор: ${directorName}`);
}

/*
=== 1.5 ПІДТЕМА «CALLBACK-ФУНКЦІЇ» (Варіант 2: Завдання 2, 9) ===
Завдання 2: Функція calculate(a, b, operation) та 4 функції: додавання, віднімання, множення, ділення.
Завдання 9: Функція processArray(arr, callback) через for...of. Callback виводить квадрат кожного числа.
*/
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b !== 0 ? a / b : "Ділення на нуль"; }

function calculate(a, b, operation) {
    return operation(a, b);
}

function processArray(arr, callback) {
    for (const item of arr) {
        callback(item);
    }
}

function printSquare(num) {
    console.log(`${num}^2 = ${num * num}`);
}

function runSubtopic5() {
    console.log("=== 1.5 Callback-функції ===");

    console.log("10 + 5 =", calculate(10, 5, add));
    console.log("10 - 5 =", calculate(10, 5, subtract));
    console.log("10 * 5 =", calculate(10, 5, multiply));
    console.log("10 / 5 =", calculate(10, 5, divide));

    console.log("Квадрати чисел [2, 4, 6]:");
    processArray([2, 4, 6], printSquare);
}

/*
=== 1.6 ПІДТЕМА «СТРІЛОЧНІ ФУНКЦІЇ» (Варіант 2: Завдання 2, 7) ===
Завдання 2: Стрілочна функція getSquare (скорочений запис) для обчислення квадрата числа.
Завдання 7: Стрілочна функція createGreeting(name = "Гість"), яка повертає привітання.
*/
const getSquare = x => x * x;
const createGreeting = (name = "Гість") => `Вітаємо, ${name}!`;

function runSubtopic6() {
    console.log("=== 1.6 Стрілочні функції ===");

    console.log("Квадрат 7:", getSquare(7));
    console.log(createGreeting("Богдан"));
    console.log(createGreeting());
}

/*
=== 1.7 ПІДТЕМА «СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ» (Варіант 2: Завдання 2, 4, 10) ===
Завдання 2: calculate() зі стрілочними функціями для додавання, віднімання та множення.
Завдання 4: setTimeout() через 2 секунди виводить "Навчання JavaScript продовжується!".
Завдання 10: HTML-форма реєстрації (name, email) та submitForm(data, onSuccess, onError).
*/
function runSubtopic7() {
    console.log("=== 1.7 Стрілочні функції як колбеки ===");

    console.log("Додавання:", calculate(12, 4, (a, b) => a + b));
    console.log("Віднімання:", calculate(12, 4, (a, b) => a - b));
    console.log("Множення:", calculate(12, 4, (a, b) => a * b));

    console.log("Очікуємо 2 секунди...");
    setTimeout(() => {
        console.log("Навчання JavaScript продовжується!");
    }, 2000);
}

function submitForm(userData, onSuccess, onError) {
    if (userData.name.trim() !== "" && userData.email.trim() !== "") {
        onSuccess(userData);
    } else {
        onError("Заповніть усі обов'язкові поля (Ім'я та Email)!");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const regForm = document.getElementById("reg-form");
    const regStatus = document.getElementById("reg-status");

    if (regForm) {
        regForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const userData = {
                name: document.getElementById("reg-name").value,
                email: document.getElementById("reg-email").value
            };

            submitForm(
                userData,
                (data) => {
                    const msg = `Успішна реєстрація: ${data.name} (${data.email})`;
                    console.log(msg);
                    regStatus.textContent = msg;
                    regStatus.style.color = "#16a34a";
                },
                (err) => {
                    console.error(err);
                    regStatus.textContent = err;
                    regStatus.style.color = "#dc2626";
                }
            );
        });
    }
});

/*
=== 1.8 ПІДТЕМА «ПЕРЕБИРАЮЧІ МЕТОДИ МАСИВУ» (Варіант 2: Завдання 2, 6, 9) ===
Завдання 2: Масив products (name, price). Через map() збільшити ціну кожного товару на 20%.
Завдання 6: Масив products (name, price, available). Через some() перевірити, чи є available === false.
Завдання 9: Масив students (name, subjects). Через flatMap() сформувати загальний масив усіх дисциплін.
*/
function runSubtopic8() {
    console.log("=== 1.8 Перебираючі методи масиву ===");

    const products = [
        { name: "Клавіатура", price: 1500 },
        { name: "Миша", price: 800 },
        { name: "Монітор", price: 9000 }
    ];
    const updatedProducts = products.map(p => ({ ...p, price: Math.round(p.price * 1.2) }));
    console.log("Початкові товари:", products);
    console.log("Товари (+20%):", updatedProducts);

    const stockProducts = [
        { name: "Ноутбук", price: 30000, available: true },
        { name: "Навушники", price: 2500, available: false },
        { name: "Мікрофон", price: 3200, available: true }
    ];
    const hasOutOfStock = stockProducts.some(p => p.available === false);
    console.log("Чи є товари відсутні на складі:", hasOutOfStock);

    const studentsSubjects = [
        { name: "Богдан", subjects: ["Web-розробка", "Java", "БД"] },
        { name: "Олена", subjects: ["Алгоритми", "Web-розробка"] },
        { name: "Андрій", subjects: ["Мережі", "Linux"] }
    ];
    const allSubjects = studentsSubjects.flatMap(s => s.subjects);
    console.log("Усі навчальні дисципліни:", allSubjects);
}