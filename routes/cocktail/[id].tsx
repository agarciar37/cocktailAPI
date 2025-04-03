import axios from "axios";
import type { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import DrinkContainer from "../../components/DrinkContainer.tsx";

type Cocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

type Data = {
  drink: Cocktail;
};

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const { id } = ctx.params;
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    try {
      const response = await axios.get(url);
      const drink: Cocktail = response.data.drinks[0]; // Cambiado para acceder al primer elemento
      return ctx.render({ drink });
    } catch (e) {
      return new Response("Error de API");
    }
  },
};

const Page = (props: PageProps<Data>) => (
  <DrinkContainer drink={props.data.drink} />
);

export default Page;