import axios from "axios";
import type { Pokemon } from "@/models/pokemon.model";

export const getPokemons = () =>
  axios.get<Pokemon[]>("https://pokedex-workshop-api.vercel.app/api/pokemons");
