### Metarhia community Weekly call #174

**Patterns - Task1 - Review**

1. `Object.fromEntries()` эффективнее, чем создавать объект через `reduce()`, т.к. мы сразу создаем объект определенной формы, а с `reduce()` мы меняем его форму на каждой итерации присоединяя новое поле
2. Если метод класса не зависит от `this`, сделать его статическим или вообще вынести из класса
3. в `native node` в `import` указывать расширение файла, чтобы было меньше запросов на диск
4. [30:20] - Создание итератора тяжелее чем несколько вызовов Math.max()
5. [40:30] - Стрелочные функции легче и лучше оптимизируются