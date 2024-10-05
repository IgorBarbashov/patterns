// Применить паттерн singleton к классу Earth.
// Чтобы получить экземпляр класса, необходимо реализовать метод getInstance.

export class Earth {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    public spin() {
        console.log('Кручусь верчусь');
    }

    public moveAroundTheSun() {
        console.log('И снова 3 сентября...');
    }
}
