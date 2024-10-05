// Спроектировать сеть ресторанов по трём направлениям кухни: японской, итальянской и африканской.
// В меню каждого ресторана должно быть четыре блюда: закуска, суп, горячее и десерт.

// Тут ваша реализация
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