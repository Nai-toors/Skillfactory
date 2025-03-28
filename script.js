// Пример данных
const person = {
    name: 'Иван',
    age: 30,
    city: 'Москва'
};

const fruits = ['яблоко', 'банан', 'апельсин'];

// Функция для вывода данных на страницу
function displayData() {
    const outputDiv = document.getElementById('output');
    
    // Вывод данных об объекте
    outputDiv.innerHTML += '<h2>Данные о человеке:</h2>';
    outputDiv.innerHTML += `<p>Имя: ${person.name}</p>`;
    outputDiv.innerHTML += `<p>Возраст: ${person.age}</p>`;
    outputDiv.innerHTML += `<p>Город: ${person.city}</p>`;

    // Вывод данных из массива
    outputDiv.innerHTML += '<h2>Список фруктов:</h2>';
    outputDiv.innerHTML += '<ul>';
    fruits.forEach(fruit => {
        outputDiv.innerHTML += `<li>${fruit}</li>`;
    });
    outputDiv.innerHTML += '</ul>';
}

// Вызов функции при загрузке страницы
window.onload = displayData;
