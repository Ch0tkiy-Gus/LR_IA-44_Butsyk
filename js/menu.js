/*
ЗАВДАННЯ 9 (Варіант 2):
Динамічне меню. Сформувати багаторівневе меню (горизонтальне та вертикальне),
пункти меню взяти із статичного масиву. При натисканні на визначений пункт меню
має завантажуватися відповідна HTML-сторінка. Меню має бути присутнім на всіх сторінках.
*/
const menuItems = [
    { title: "Головна (Завдання 1-8)", url: "index.html" },
    {
        title: "Розділи (Завдання 9)",
        url: "task9.html",
        submenu: [
            { title: "Про меню", url: "task9.html" },
            { title: "Новини", url: "news.html" },
            { title: "Контакти", url: "contacts.html" }
        ]
    },
    { title: "Новини", url: "news.html" },
    { title: "Контакти", url: "contacts.html" }
];

function buildMenuList(items) {
    const ul = document.createElement("ul");
    items.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = item.title;
        a.href = item.url;
        li.appendChild(a);

        if (item.submenu && item.submenu.length > 0) {
            li.classList.add("has-submenu");
            li.appendChild(buildMenuList(item.submenu));
        }

        ul.appendChild(li);
    });
    return ul;
}

document.addEventListener("DOMContentLoaded", () => {
    const hMenu = document.getElementById("horizontal-menu");
    const vMenu = document.getElementById("vertical-menu");

    if (hMenu) hMenu.appendChild(buildMenuList(menuItems));
    if (vMenu) vMenu.appendChild(buildMenuList(menuItems));
});