import type { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import CocktailsContainer from "../components/DrinksContainer.tsx";

type Cocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

type Data = {
  drinks: Cocktail[];
}

type CocktailAPI = {
  drinks: Cocktail[];
}

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
    const webURL = new URL(req.url);
    let url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    try {
      const response = await Axios.get<CocktailAPI>(url);
      return ctx.render({ drinks: response.data.drinks });
    } catch (e) {
      return new Response ("Error de API")
    }
  }
}

export default (props: PageProps<Data>) => {
  const drinks = props.data.drinks;
  return (<CocktailsContainer drinks={drinks}/>)
}