import type { FunctionalComponent } from "preact/src/index.d.ts";
import DrinkCard from "./DrinkCard.tsx";

type Cocktail = {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
}

type Props = {
    drinks: Cocktail[];
}

const CocktailsContainer: FunctionalComponent<Props> = (props) => {
    const drinks = props.drinks;

    return (
        <div class="drinksContainer">
            <h1>Cocktails</h1>
            <div>
                {drinks.map((drink) => (
                    <DrinkCard key={drink.idDrink} cocktail={drink} />
                ))}
            </div>
        </div>
    );
}

export default CocktailsContainer;