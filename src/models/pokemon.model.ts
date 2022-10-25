export interface PokeApiData {
  sprites: { front_default: string };
  name: string;
  results: { url: string }[];
}

export interface PokemonData {
  name: string;
  img: string;
}
