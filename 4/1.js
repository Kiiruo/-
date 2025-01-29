const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function validateInput(age, birthYear) {
    const currentYear = new Date().getFullYear();
    
    if (age < 0) {
        throw new Error("Отрицательное значение возраста.");
    }
    
    if (birthYear > currentYear) {
        throw new Error("Год рождения больше текущего.");
    }
}

function promptUser() {
    rl.question('Введите ваш возраст и год рождения (например, "25 1995"): ', (input) => {
        const [ageStr, birthYearStr] = input.split(' ');
        const age = parseInt(ageStr);
        const birthYear = parseInt(birthYearStr);

        try {
            validateInput(age, birthYear);
            console.log(`Ваш возраст: ${age}, год рождения: ${birthYear}`);
        } catch (error) {
            console.error(`Ошибка: ${error.message}`);
        }

        // Повторный запрос на ввод
        promptUser();
    });
}

// Запуск программы
promptUser();
