<script setup lang="ts">
import PokemonCard from "@/components/PokemonCard.vue";
import type { PokemonData } from "@/models/pokemon.model";
import { getPokemons } from "@/services/pokemon.service";
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const pokemons = ref<PokemonData[]>();

onBeforeMount(async () => {
  const getPokemonsResult = await getPokemons();
  pokemons.value = getPokemonsResult;
});

const onClickDetail = (pokemonName: string) =>
  router.push({ name: "detail-name", params: { name: pokemonName } });
</script>

<template>
  <div class="container mw-[1024px] mx-auto">
    <div class="flex gap-4 justify-center flex-wrap">
      <PokemonCard
        v-for="pokemon of pokemons"
        :key="pokemon.name"
        :pokemon="pokemon"
        @clickDetail="onClickDetail"
      ></PokemonCard>
    </div>
  </div>
</template>
