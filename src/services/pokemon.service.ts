import type { PokeApiData, PokemonData } from "@/models/pokemon.model";
import axios from "axios";

export const getPokemonByName = (name: string): Promise<PokemonData> =>
  axios
    .get<PokeApiData>(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(({ data }) => ({
      img: data.sprites.front_default,
      name: data.name,
    }));

export const getPokemons = async (): Promise<PokemonData[]> => {
  const { data } = await axios.get<PokeApiData>(
    "https://pokeapi.co/api/v2/pokemon?limit=100"
  );
  const getImgs = data.results.map((value) => axios.get(value.url));
  const fetchResult = await Promise.all(getImgs);
  return fetchResult.map(({ data }) => ({
    img: data.sprites.front_default,
    name: data.name,
  }));
};
