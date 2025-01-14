class Queue {
    constructor(limit = 5) {
        this.limit = limit;  // Максимальный размер очереди
        this.items = [];     // Массив для хранения элементов очереди
    }

    // Метод для вставки элемента в очередь
    enqueue(item) {
        if (this.isFull()) {
            throw new Error("Ошибка: Переполнение очереди. Невозможно добавить элемент.");
        }
        if (typeof item !== 'string') {
            throw new Error("Ошибка: Элемент должен быть строкой.");
        }
        this.items.push(item);
        console.log(`Элемент "${item}" добавлен в очередь.`);
    }

    // Метод для удаления элемента из очереди
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Ошибка: Очередь пуста. Невозможно удалить элемент.");
        }
        const removedItem = this.items.shift();
        console.log(`Элемент "${removedItem}" удален из очереди.`);
        return removedItem;
    }

    // Метод для проверки, пуста ли очередь
    isEmpty() {
        return this.items.length === 0;
    }

    // Метод для проверки, полна ли очередь
    isFull() {
        return this.items.length >= this.limit;
    }

    // Метод для получения текущего состояния очереди
    display() {
        if (this.isEmpty()) {
            console.log("Очередь пуста.");
        } else {
            console.log("Текущие элементы в очереди: ", this.items.join(', '));
        }
    }
}

// Пример использования класса Queue
try {
    const queue = new Queue(3); // Создаем очередь с максимальным размером 3

    // Добавление элементов в очередь
    queue.enqueue("Первый");
    queue.enqueue("Второй");
    queue.enqueue("Третий");

    // Показать текущее состояние очереди
    queue.display();

    // Попытка вставить элемент в полную очередь
    queue.enqueue("Четвертый"); // Это вызовет ошибку

} catch (error) {
    console.error(error.message);
}

try {
    const queue = new Queue(3); // Создаем новую очередь с максимальным размером 3

    // Попытка удаления элемента из пустой очереди
    queue.dequeue(); // Это вызовет ошибку

} catch (error) {
    console.error(error.message);
}
