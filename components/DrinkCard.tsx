import type { FunctionalComponent } from "preact/src/index.d.ts";

type Props = {
    cocktail: {
        strDrink: string;
        strDrinkThumb: string;
    };
}

const DrinkCard: FunctionalComponent<Props> = (props) => {
    const {strDrink, strDrinkThumb} = props.cocktail;

    return (
        <div class="drinkCard">
            <img src={strDrinkThumb} alt={strDrink}/>
            <h2 class="text-xl font-bold">{strDrink}</h2>
        </div>
    )
}

export default DrinkCard;