function calculate(R1, R2, R3) {
    if (R1 === 0) {
        throw new Error("Ошибка в функции calculate: потеря разряда (деление на ноль)");
    }
    return Math.sin(R2) / (Math.PI * R1) + R3.re; // Возвращаем действительную часть R3
}

function main() {
    // Предустановленные значения для тестирования
    let R1 = 2.0; // задайте любое значение
    let R2 = 1.0; // задайте любое значение
    let R3 = { re: 3.0, im: 4.0 }; // задайте любое значение

    let choice;

    do {
        try {
            // Вычисление
            const result = calculate(R1, R2, R3);
            console.log(`Sin(R2) = ${Math.sin(R2)}`);
            console.log(`Результат: Sin(R2) / (pi * R1) + R3 = ${result}`);

        } catch (error) {
            console.error(error.message);
        }

        // Запрос на выход
        choice = prompt("Введите 'Q' для выхода из программы или любую другую клавишу для продолжения:");
    } while (choice !== 'Q' && choice !== 'q');
}

// Запуск программы
main();
