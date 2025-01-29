class Queue {
    constructor(maxSize) {
        this.maxSize = maxSize; // Максимальный размер очереди
        this.queue = []; // Массив для хранения очереди
    }

    // Метод для добавления элемента в очередь
    enqueue(item) {
        if (this.queue.length >= this.maxSize) {
            throw new Error("Ошибка: Переполнение очереди");
        }
        if (typeof item !== 'string') {
            throw new Error("Ошибка: Элемент должен быть строкой");
        }
        this.queue.push(item);
    }

    // Метод для удаления элемента из очереди
    dequeue() {
        if (this.queue.length === 0) {
            throw new Error("Ошибка: Очередь пуста");
        }
        return this.queue.shift(); // Удаляет и возвращает первый элемент очереди
    }

    // Метод для получения текущего размера очереди
    size() {
        return this.queue.length;
    }

    // Метод для получения всех элементов очереди
    getElements() {
        return this.queue.slice(); // Возвращает копию массива очереди
    }
}

// Пример использования класса Queue с предустановленными строками
try {
    const myQueue = new Queue(3); // Создание очереди с максимальным размером 3

    // Предустановленные строки для использования
    myQueue.enqueue("Первый элемент");
    myQueue.enqueue("Второй элемент");
    myQueue.enqueue("Третий элемент");
    
    console.log("Текущие элементы очереди:", myQueue.getElements());
    console.log("Размер очереди:", myQueue.size());

    // Попытка добавить еще один элемент, что вызовет ошибку переполнения
    myQueue.enqueue("Четвертый элемент"); // Это вызовет ошибку
} catch (error) {
    console.error(error.message);
}

try {
    const myQueue = new Queue(3);
  
    // Добавляем элементы в очередь
    myQueue.enqueue("Элемент A");
    myQueue.enqueue("Элемент B");
    console.log(myQueue.dequeue()); // Удаляет "Элемент A"
    console.log(myQueue.dequeue()); // Удаляет "Элемент B"
    
    // Попытка удалить элемент из пустой очереди, что вызовет ошибку
    console.log(myQueue.dequeue()); // Это вызовет ошибку
} catch (error) {
    console.error(error.message);
}
