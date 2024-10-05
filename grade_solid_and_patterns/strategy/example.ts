interface IData { // Интерфейс данных
    code: string;
}

interface IStrategy { // Интерфейс стратегии
    make: (data: IData) => void;
}

const defaultStrategy = { // Дефолтная стратегия
    make: (data: IData) => {
        return `Responce code - ${data.code}`;
    }
};

class Component {
    private strategy: IStrategy = defaultStrategy;

    public setStrategy(strategy: IStrategy) { // Компонент знает, что ему передадут стратегию, соответствующую интерфейсу IStrategy
        this.strategy = strategy;
    }

    public async getServerData() {
        const data = await getData(); // получаем данные с сервера, используя сторонний метод
        return this.strategy.make(data); // Применяем стратегию
    }
}

// Client code

const component = new Component();

const newStrategy = { // Создаём новую стратегию
    make: (data: IData) => {
        data.code === '200' ? 'Success' : 'Error';
    }
};

component.setStrategy(newStrategy); // Передаём стратегию в компонент
const data = component.getServerData();