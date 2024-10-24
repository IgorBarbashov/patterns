### Контракты Callback и Callback-last-error-first

---

`Callback hell` - это история выдуманная из пальца, если вы сами себе ее не создаете.
- Первая проблема - вложенность. Решение - использовать именованные `callback`
- Вторая проблема - обработка ошибок. Решение - переписать на именованные `callback` и в каждом из них первым делом обработать ошибку

---

Как обрабатывать `error first` - ставить в самом начале `callback` обработку ошибки.

```js
const namedCallback = (error, result) => {
    if (error) {
        // error handle
    }
    
    // result handle     
}; 
```
дальнейшее использование
```js
fs.readFile(fileName, 'utf-8', namedCallback);
```

---

Проблема - когда переписываем вложенный код на `named callback`, у нас меняется порядок объявления функций

Было:
```js
fs.readFile(fileName, encode, (readingError, data) => {
    parseData(data, (parsingError, parsedData) => {
        // ...
    });
});
```
Переписали на `named callback`:
```js
const parsingDataCallback = (pasingError, parsedData) => {
    if (pasingError) {
        // handle parsing error
    }
    // hadnle parsed data
};

const readingDataCallback = (readingError, data) => {
    if (readingError) {
        // handle reading error
    }
    parseData(data, parsingDataCallback);
};

fs.readFile(fileName, encode, readingDataCallback);
```
Поменялся порядок объявления функций - стало неудобно читать код. Вариант решения - создать модуль / класс (в примере объект с примесями - не самый лучший вариант) и наполнять его методами в естественном порядке:
```js
const steps = {};

steps.start = () => fs.readFile(fileName, encode, steps.readingDataCallback);

steps.readingDataCallback = (readingError, data) => {
    if (readingError) {
        // handle reading error
    }
    parseData(data, steps.parsingDataCallback);
};

steps.parsingDataCallback = (pasingError, parsedData) => {
    if (pasingError) {
        // handle parsing error
    }
    // hadnle parsed data
};

steps.start();
```

**Итог**: кода стало больше, но мы избавились от вложенности, на каждом шаге обрабатываем ошибки понятным образом, код стал лучше читаемым, поддерживаемым и тестируемым.
