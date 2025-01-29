function generateRandomArray(size) {
    const array = [];
    for (let i = 0; i < size; i++) {
        // Генерация чисел в диапазоне от -10 до 10
        const randomNum = (Math.random() * 20 - 10).toFixed(2); // округляем до 2 знаков
        array.push(parseFloat(randomNum));
    }
    return array;
}

function findMinPositiveElements(arr) {
    const positiveNumbers = arr.filter(num => num > 0);
    
    if (positiveNumbers.length === 0) {
        return []; // Если нет положительных чисел, возвращаем пустой массив
    }
    
    const minPositive = Math.min(...positiveNumbers);
    return positiveNumbers.filter(num => num === minPositive);
}

// Генерируем массив
const arraySize = 20; // Вы можете изменить размер массива
const randomArray = generateRandomArray(arraySize);
console.log('Сгенерированный массив:', randomArray);

// Находим минимальные положительные элементы
const minPositiveElements = findMinPositiveElements(randomArray);
console.log('Минимальные положительные элементы:', minPositiveElements);
