import type { FunctionalComponent } from "preact/src/index.d.ts";

type Cocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

type Props = {
  drink: Cocktail; // Cambiado de `drinks` a `drink`
};

const DrinkContainer: FunctionalComponent<Props> = (props) => {
  const drink = props.drink; // Ajustado para reflejar la propiedad singular
  return (
    <div class="cocktailCard">
      <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      <h2>{drink.idDrink}</h2>
      <h1>{drink.strDrink}</h1>
    </div>
  );
};

export default DrinkContainer;