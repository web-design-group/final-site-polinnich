
function generateRandomString() {
// Генерация двух случайных букв (латинский алфавит)
const letter1 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
const letter2 = String.fromCharCode(65 + Math.floor(Math.random() * 26));

// Генерация случайного числа от 1 до 999
const number = Math.floor(Math.random() * 999) + 1;

return `${letter1}${letter2}-${number}`;
}

// Пример использования
var num = document.getElementById("ticket-number");
num.textContent = generateRandomString();
