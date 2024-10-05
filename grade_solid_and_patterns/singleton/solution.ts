export class Earth {
    private static instance: Earth | null = null;
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;

        if (Earth.instance === null) {
            Earth.instance = this;
        }
    }

    public spin() {
        console.log('Кручусь верчусь');
    }

    public moveAroundTheSun() {
        console.log('И снова 3 сентября...');
    }

    public static getInstance() {
        return Earth.instance;
    }
}