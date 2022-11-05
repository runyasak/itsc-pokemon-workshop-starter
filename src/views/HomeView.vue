<script setup lang="ts">
import { onMounted, ref } from "vue";
import PokemonCard from "@/components/PokemonCard.vue";
import { getPokemons } from "@/services/pokemon.service";
import type { Pokemon } from "@/models/pokemon.model";
import { useRouter } from "vue-router";

const router = useRouter();

const pokemons = ref<Pokemon[]>();

onMounted(async () => {
  // console.log("start !!");

  const result = await getPokemons();
  pokemons.value = result.data;

  // console.log("finish !!");
  // console.log(result);
  // getPokemons().then((value) => {
  //   pokemons.value = value.data;
  // });
});

const onNavigateDetail = (pokemonName: string) =>
  router.push({ name: "detail", params: { name: pokemonName } });
</script>

<template>
  <div class="container mw-[1024px] mx-auto">
    <div class="text-center text-4xl">Welcome to Pokemon workshop !</div>

    <PokemonCard
      v-for="pokemon of pokemons"
      :key="pokemon.name"
      :name="pokemon.name"
      :img="pokemon.img"
      @click-button="onNavigateDetail($event)"
    ></PokemonCard>
  </div>
</template>
