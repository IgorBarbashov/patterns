class Dish {
    public ingredient: string;

    constructor(ingredient: string) {
        this.ingredient = ingredient;
    }
}

interface IAbstractRestaurant {
    makeSnack(): Dish;

    makeSoup(): Dish;

    makeMainCourse(): Dish;

    makeDessert(): Dish;
}

class JapaneseRestaurant implements IAbstractRestaurant {
    public makeSnack() {
        return new Dish('seaweed');
    };

    public makeSoup() {
        return new Dish('salmon');
    };

    public makeMainCourse() {
        return new Dish('shrimp');
    };

    public makeDessert() {
        return new Dish('rice');
    }
};

class AfricanRestaurant implements IAbstractRestaurant {
    public makeSnack() {
        return new Dish('roach');
    };

    public makeSoup() {
        return new Dish('ants');
    };

    public makeMainCourse() {
        return new Dish('crocodile');
    };

    public makeDessert() {
        return new Dish('mango');
    }
};

class ItalianRestaurant implements IAbstractRestaurant {
    public makeSnack() {
        return new Dish('tomatoes');
    };

    public makeSoup() {
        return new Dish('mushroom');
    };

    public makeMainCourse() {
        return new Dish('chicken');
    };

    public makeDessert() {
        return new Dish('nuts');
    }
};

// А тут ваш код будет вызываться
export function makeDinner(restaurant: IAbstractRestaurant): string {
    const snackIngredients = restaurant.makeSnack().ingredient;
    const soupIngredients = restaurant.makeSoup().ingredient;
    const mainCourseIngredients = restaurant.makeMainCourse().ingredient;
    const dessertIngredients = restaurant.makeDessert().ingredient;

    return `${snackIngredients} ${soupIngredients} ${mainCourseIngredients} ${dessertIngredients}`;
}

const japaneseRestaurant = new JapaneseRestaurant();
console.log(makeDinner(japaneseRestaurant)); //seaweed salmon shrimp rice

const africanRestaurant = new AfricanRestaurant();
console.log(makeDinner(africanRestaurant)); //roach ants crocodile mango

const italianRestaurant = new ItalianRestaurant();
console.log(makeDinner(italianRestaurant)); //tomatoes mushroom chicken nuts