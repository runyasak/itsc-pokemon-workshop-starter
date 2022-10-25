<script setup lang="ts">
import type { PokemonData } from "@/models/pokemon.model";
import { getPokemons } from "@/services/pokemon.service";
import { onBeforeMount, ref } from "vue";

const pokemons = ref<PokemonData[]>();

onBeforeMount(async () => {
  const getPokemonsResult = await getPokemons();
  pokemons.value = getPokemonsResult;
});
</script>

<template>
  <div class="container mw-[1024px] mx-auto">
    <div class="flex gap-4 justify-center flex-wrap">
      <div
        v-for="pokemon of pokemons"
        :key="pokemon.name"
        class="card w-96 bg-base-100 shadow-xl"
      >
        <figure>
          <img
            :src="pokemon.img"
            :alt="pokemon.name"
            width="100"
            height="100"
          />
        </figure>
        <div class="card-body">
          <div class="card-title capitalize text-center">
            {{ pokemon.name }}
          </div>
          <div class="card-actions justify-end">
            <button class="btn btn-primary text-white">View Detail</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
