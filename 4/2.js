const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Функция для вычисления заданного выражения
function computeFunction(R1, R2, R3) {
    const pi = Math.PI;
    const sinR2 = Math.sin(R2);
    // Проверка на возможность переполнения (при использовании ограниченных чисел)
    const result = (sinR2 / pi) * R1 + R3.real; // Используем только реальную часть комплексного числа

    // Обработка неизмеримого результата
    if (!isFinite(result)) {
        throw new Error("Результат вычисления переполнен или не определен.");
    }

    return result;
}

// Функция для парсинга комплексного числа
function complexParser(complexStr) {
    const regex = /(-?\d+(\.\d+)?)\s*\+\s*(-?\d+(\.\d+)?)i/; // Формат: a + bi
    const match = complexStr.match(regex);

    if (!match) {
        throw new Error("Некорректный формат комплексного числа. Например, '2 + 3i'.");
    }

    return {
        real: parseFloat(match[1]),
        imaginary: parseFloat(match[3])
    };
}

// Функция для запроса данных от пользователя
function promptUser() {
    console.log("Функция: Sin(R2) / π * R1 + R3");
    rl.question('Введите R1, R2 (вещественные) и R3 (комплексное, например "2 + 3i") или Q для выхода: ', (input) => {
        // Проверка на выход
        if (input.toUpperCase() === 'Q') {
            console.log('Выход из программы.');
            rl.close();
            return;
        }

        // Разделение входных данных
        const inputs = input.split(' ');
        const R1 = parseFloat(inputs[0]);
        const R2 = parseFloat(inputs[1]);
        const R3 = inputs[2] ? complexParser(inputs[2]) : { real: 0, imaginary: 0 }; // Комплексное число

        try {
            const result = computeFunction(R1, R2, R3);
            console.log(`Результат: Sin(${R2}) / π * ${R1} + (${R3.real} + ${R3.imaginary}i) = ${result}`);
        } catch (error) {
            console.error(`Ошибка в функции: ${error.message}`);
        }

        // Повторный запрос на ввод
        promptUser();
    });
}

// Запуск программы
promptUser();
