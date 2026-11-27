/*
ЗАВДАННЯ 1 (Парні номери):
Збережіть введене значення часу (год:хвил) (використати метод prompt()) у змінну hour.
Вивести це значення у Console, використовуючи шаблонний рядок.
Перевірити до якої чверті години відноситься введене значення.
Відповідь вивести за допомогою alert().
*/
function runTask1() {
    const hour = prompt("Введіть час у форматі год:хвил (наприклад, 10:30):");
    console.log(`Введене значення часу: ${hour}`);

    if (!hour || !/^\d{1,2}:\d{2}$/.test(hour.trim())) {
        alert("Некоректний формат часу! Використовуйте год:хвил.");
        return;
    }

    const [h, m] = hour.trim().split(":").map(Number);

    if (h < 0 || h > 23 || m < 0 || m > 59) {
        alert("Некоректний час! Години: 0-23, хвилини: 0-59.");
        return;
    }

    let quarter;
    if (m >= 0 && m < 15) {
        quarter = "Перша чверть години";
    } else if (m >= 15 && m < 30) {
        quarter = "Друга чверть години";
    } else if (m >= 30 && m < 45) {
        quarter = "Третя чверть години";
    } else {
        quarter = "Четверта чверть години";
    }

    alert(quarter);
}

/*
ЗАВДАННЯ 2 (Парні номери):
Змінна day може набувати одне із 7 значень: '1', '2'... '6', '7' (запитуй через prompt).
Якщо вона має значення '1', то у змінну finish запише понеділок, '2' – вівторок і так далі.
Розв'яжіть завдання через switch-case з дефолтним значенням.
Значення змінної finish виведіть в консоль.
*/
function runTask2() {
    const day = prompt("Введіть номер дня тижня (1-7):");
    let finish;

    switch (day) {
        case "1":
            finish = "понеділок";
            break;
        case "2":
            finish = "вівторок";
            break;
        case "3":
            finish = "середа";
            break;
        case "4":
            finish = "четвер";
            break;
        case "5":
            finish = "п'ятниця";
            break;
        case "6":
            finish = "субота";
            break;
        case "7":
            finish = "неділя";
            break;
        default:
            finish = "Некоректне значення дня тижня";
    }

    console.log(`Результат (Завдання 2): ${finish}`);
    alert(finish);
}

/*
ЗАВДАННЯ 3 (Парні номери):
Є декілька користувачів User1, User2, User3, з відповідними паролями.
Запитувати логін (prompt) і виводити результат в консоль шаблонним рядком.
Якщо User1/User2/User3 -> prompt запитує пароль -> при вдалій ідентифікації alert «Hello, UserX».
Якщо нічого не ввели або Cancel -> prompt знову просить ввести логін.
В іншому випадку -> alert "I don't know you".
*/
function runTask3() {
    const users = {
        User1: "1111",
        User2: "2222",
        User3: "3333"
    };

    let login = "";
    while (!login || login.trim() === "") {
        login = prompt("Введіть логін (User1, User2 або User3):");
    }

    login = login.trim();
    console.log(`Введений логін: ${login}`);

    if (users.hasOwnProperty(login)) {
        const password = prompt(`Введіть пароль для ${login}:`);
        if (password === users[login]) {
            alert(`Hello, ${login}`);
        } else {
            alert("Невірний пароль!");
        }
    } else {
        alert("I don't know you");
    }
}

/*
ЗАВДАННЯ 4 (Парні номери):
Оголоси функцію getShippingMessage(country, price, deliveryFee), яка повертає рядок:
"Shipping to <country> will cost <totalPrice> credits".
*/
function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}

function runTask4() {
    console.log("--- Завдання 4 ---");
    console.log(getShippingMessage("Australia", 120, 50));
    console.log(getShippingMessage("Germany", 80, 20));
    console.log(getShippingMessage("Sweden", 100, 20));
}

/*
ЗАВДАННЯ 5 (Парні номери):
Оголоси функцію makeTransaction(quantity, pricePerDroid, customerCredits).
Якщо сума перевищує customerCredits -> "Insufficient funds!",
інакше -> "You ordered <quantity> droids worth <totalPrice> credits!".
*/
function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalPrice = quantity * pricePerDroid;
    if (totalPrice > customerCredits) {
        return "Insufficient funds!";
    }
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

function runTask5() {
    console.log("--- Завдання 5 ---");
    console.log(makeTransaction(5, 3000, 23000));
    console.log(makeTransaction(3, 1000, 15000));
    console.log(makeTransaction(10, 5000, 8000));
    console.log(makeTransaction(8, 2000, 10000));
}

/*
ЗАВДАННЯ 6 (Парні номери):
Напиши функцію makeArray(firstArray, secondArray, maxLength).
Створює новий масив з елементів firstArray та secondArray.
Якщо довжина > maxLength, повертає копію довжиною maxLength, інакше весь масив.
*/
function makeArray(firstArray, secondArray, maxLength) {
    const combined = firstArray.concat(secondArray);
    if (combined.length > maxLength) {
        return combined.slice(0, maxLength);
    }
    return combined;
}

function runTask6() {
    console.log("--- Завдання 6 ---");
    console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
    console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
    console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
    console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
}

/*
ЗАВДАННЯ 7 (Варіант 2):
1. Створити одновимірний масив, кількість елементів якого задана користувачем.
Знайти суму елементів з парними індексами, максимальний елемент та його індекс,
мінімальний елемент та його індекс серед елементів з непарними індексами. Застосувати функції.
2. Упорядкувати масив у порядку зростання. Надрукувати вхідний та вихідний масив. Застосувати функції.
*/
function generateArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 100) - 20);
    }
    return arr;
}

function analyzeArray(arr) {
    let evenIndexSum = 0;
    let maxOdd = -Infinity;
    let maxOddIndex = -1;
    let minOdd = Infinity;
    let minOddIndex = -1;

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            evenIndexSum += arr[i];
        } else {
            if (arr[i] > maxOdd) {
                maxOdd = arr[i];
                maxOddIndex = i;
            }
            if (arr[i] < minOdd) {
                minOdd = arr[i];
                minOddIndex = i;
            }
        }
    }

    return { evenIndexSum, maxOdd, maxOddIndex, minOdd, minOddIndex };
}

function sortAscending(arr) {
    return [...arr].sort((a, b) => a - b);
}

function runTask7() {
    const count = Number(prompt("Введіть кількість елементів масиву (наприклад, 10):"));
    if (!Number.isInteger(count) || count <= 1) {
        alert("Введіть ціле число більше 1!");
        return;
    }

    const inputArr = generateArray(count);
    const stats = analyzeArray(inputArr);
    const sortedArr = sortAscending(inputArr);

    console.log("--- Завдання 7 (Варіант 2) ---");
    console.log("Вхідний масив:", inputArr);
    console.log(`Сума елементів з парними індексами: ${stats.evenIndexSum}`);
    console.log(`Максимум серед непарних індексів: ${stats.maxOdd} (індекс ${stats.maxOddIndex})`);
    console.log(`Мінімум серед непарних індексів: ${stats.minOdd} (індекс ${stats.minOddIndex})`);
    console.log("Відсортований масив (за зростанням):", sortedArr);
}

/*
ЗАВДАННЯ 8 (Парні номери):
Є двовимірний масив додатніх і від’ємних чисел (ініціалізувати генератором випадкових чисел).
Вивести у Console браузера.
Збережіть перший і останній елементи масиву в окремі змінні.
Вставити 25 після другого елемента масиву.
Вивести у Console браузера.
*/
function runTask8() {
    const rows = 3;
    const cols = 4;
    const matrix = [];

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(Math.floor(Math.random() * 41) - 20);
        }
        matrix.push(row);
    }

    console.log("--- Завдання 8 ---");
    console.log("Початковий двовимірний масив:", JSON.parse(JSON.stringify(matrix)));

    const firstElement = matrix[0][0];
    const lastElement = matrix[rows - 1][cols - 1];
    console.log(`Перший елемент: ${firstElement}, Останній елемент: ${lastElement}`);

    matrix[0].splice(2, 0, 25);
    console.log("Масив після вставки 25 після другого елемента першого рядка:", matrix);
}