export interface PokeApiData {
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  sprites: { front_default: string };
  name: string;
  results: { url: string }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
}

export interface PokemonData {
  name: string;
  img: string;
}

export interface PokemonDetailData extends PokemonData {
  abilities: string[];
  types: string[];
}
