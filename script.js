/**
 * Практична робота 9.1
 * Тема: Паттерни замикань
 * Варіант 1: Counter Factory
 */

/**
 * Базовий лічильник із приватним станом.
 */
function createCounter(initial = 0) {
    let count = initial;

    return {
        increment() {
            count++;
            return count;
        },

        decrement() {
            count--;
            return count;
        },

        get() {
            return count;
        }
    };
}

/**
 * Лічильник з мінімальним та максимальним значенням.
 */
function createLimitedCounter(min, max) {
    let count = min;

    return {
        increment() {
            if (count < max) {
                count++;
            }
            return count;
        },

        decrement() {
            if (count > min) {
                count--;
            }
            return count;
        },

        get() {
            return count;
        }
    };
}

/**
 * Лічильник зі змінним кроком.
 */
function createStepCounter(step = 1) {
    let count = 0;

    return {
        increment() {
            count += step;
            return count;
        },

        decrement() {
            count -= step;
            return count;
        },

        get() {
            return count;
        }
    };
}

/**
 * Лічильник з ім'ям та історією змін.
 */
function createNamedCounter(name, initial = 0) {
    let count = initial;
    const history = [];

    function addHistory(action) {
        history.push({
            counter: name,
            action: action,
            value: count,
            time: new Date().toLocaleString()
        });
    }

    return {
        increment() {
            count++;
            addHistory("increment");
            return count;
        },

        decrement() {
            count--;
            addHistory("decrement");
            return count;
        },

        get() {
            return count;
        },

        getName() {
            return name;
        },

        getHistory() {
            return [...history];
        }
    };
}

console.log("=== Практична робота 9.1 ===");
console.log("=== Counter Factory ===");

const counter = createCounter(5);
console.log("Початкове значення:", counter.get());
console.log("increment:", counter.increment());
console.log("decrement:", counter.decrement());

console.log("Прямого доступу до count немає:");
console.log(counter.count);

console.log("=== Limited Counter ===");

const limitedCounter = createLimitedCounter(0, 3);
console.log(limitedCounter.increment());
console.log(limitedCounter.increment());
console.log(limitedCounter.increment());
console.log(limitedCounter.increment());
console.log("Значення не перевищує максимум:", limitedCounter.get());

console.log("=== Step Counter ===");

const stepCounter = createStepCounter(5);
console.log("increment:", stepCounter.increment());
console.log("increment:", stepCounter.increment());
console.log("decrement:", stepCounter.decrement());

console.log("=== Named Counter ===");

const namedCounter = createNamedCounter("Лічильник користувача", 10);
console.log("Назва:", namedCounter.getName());
console.log("Початкове значення:", namedCounter.get());
console.log("increment:", namedCounter.increment());
console.log("increment:", namedCounter.increment());
console.log("decrement:", namedCounter.decrement());
console.log("Історія змін:");
console.log(namedCounter.getHistory());

console.log("Перевірка приватного стану:");
console.log(namedCounter.count);
console.log(namedCounter.history);