const fs = require('fs');
const readline = require('readline');

const polybiusSquare = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'K'],
    ['L', 'M', 'N', 'O', 'P'],
    ['Q', 'R', 'S', 'T', 'U'],
    ['V', 'W', 'X', 'Y', 'Z']
];

function encrypt(text) {
    let encrypted = '';
    text = text.toUpperCase();
    for (let char of text) {
        if (char === ' ') {
            encrypted += ' '; // сохраняем пробелы
            continue;
        }
        for (let i = 0; i < polybiusSquare.length; i++) {
            const index = polybiusSquare[i].indexOf(char);
            if (index !== -1) {
                encrypted += (i + 1) + '' + (index + 1);
                break;
            }
        }
    }
    return encrypted;
}

// Функция расшифрования
function decrypt(encryptedText) {
    let decrypted = '';
    for (let i = 0; i < encryptedText.length; i += 2) {
        const row = parseInt(encryptedText[i]) - 1;
        const col = parseInt(encryptedText[i + 1]) - 1;
        if (isNaN(row) || isNaN(col)) {
            decrypted += encryptedText[i]; // сохраняем пробелы
            i--; // пропускаем символ, если он не является частью шифра
            continue;
        }
        decrypted += polybiusSquare[row][col];
    }
    return decrypted;
}

// Создание интерфейса для ввода данных
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Запрашиваем текст для шифрования у пользователя
rl.question('Введите текст для шифрования: ', (textToEncrypt) => {
    const encryptedText = encrypt(textToEncrypt);
    console.log('Зашифрованный текст:', encryptedText);

    // Создание файла с зашифрованным текстом
    fs.writeFileSync('encrypted.txt', encryptedText, 'utf8');
    console.log('Зашифрованный текст сохранён в файле encrypted.txt');

    // Чтение файла и расшифровка
    const readEncryptedText = fs.readFileSync('encrypted.txt', 'utf8');
    const decryptedText = decrypt(readEncryptedText);
    console.log('Расшифрованный текст:', decryptedText);

    // Закрываем интерфейс
    rl.close();
});
