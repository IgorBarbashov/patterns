### Контракт Thenable (promise-like)

---

В самом простом виде `thenable` - это объект у которого есть метод `then`.

Такой объект мы можем ожидать в `async` функции с помощью `await`.

Пример фабрики `thenable`:

```js
const getUser = (id) => {
    return {
        then(onFullfiled) {
            setTimeout(() => {
                onFullfiled({id, name: 'Hello'});
            }, 1000);
        }
    };
};

const start = async () => {
    const obj = await getUser(15);
    console.log(obj); 
};

start(); // ждет секунду и выводит в консоль { id: 15, name: 'Hello' }
```
В отличие от `Promise`, который выполняется один раз, `thenable` будет выполнять свой `then` столько раз сколько мы его вызовем.

---

В метод `then` контракта `thenable` приходят два `callback` - `then(onFullfiled, onRejected)`

---

`Thenable` можно `chain`-ить.

Для этого в `thenable` объекте в конце метода `then` надо сделать `return this;`