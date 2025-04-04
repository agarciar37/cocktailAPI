import type { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "axios";
import CocktailsContainer from "../components/DrinksContainer.tsx";

type Cocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

type Data = {
  drinks: Cocktail[];
};

type CocktailAPI = {
  drinks: Cocktail[];
};

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
    const webURL = new URL(req.url);
    const name = webURL.searchParams.get("strDrink"); // Obtiene el parámetro de búsqueda
    let url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    if (name) {
      // Si hay un nombre, usa el endpoint de búsqueda
      url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
    }

    try {
      const response = await Axios.get<CocktailAPI>(url);
      const drinks = response.data.drinks;
      if (!drinks) {
        return new Response("No se encontraron cócteles.", { status: 404 });
      }
      return ctx.render({ drinks });
    } catch (e) {
      console.error("Error al llamar a la API:", e);
      return new Response("Error de API", { status: 500 });
    }
  },
};

export default (props: PageProps<Data>) => {
  const drinks = props.data.drinks;
  return <CocktailsContainer drinks={drinks} />;
};
