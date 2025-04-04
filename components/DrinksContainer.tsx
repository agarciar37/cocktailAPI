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
        <>
        <form method="get" style={{ display: "flex", justifyContent: "center" }}>
            <input type="text" name="strDrink" placeholder="Introduce un nombre a buscar"/>
            <button type="submit">Buscar</button>
        </form>
        <div class="cocktailContainer">
            {drinks.map((drink) => (<a href={`/cocktail/${drink.idDrink}`}><DrinkCard key={drink.idDrink} cocktail={drink} /></a>))}
        </div>
        </>
    );
}

export default CocktailsContainer;