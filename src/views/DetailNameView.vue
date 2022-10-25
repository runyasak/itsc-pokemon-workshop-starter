<script setup lang="ts">
import type { PokemonDetailData } from "@/models/pokemon.model";
import { getPokemonByName } from "@/services/pokemon.service";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const { params } = useRoute();

const router = useRouter();

const pokemon = ref<PokemonDetailData>();

onMounted(async () => {
  pokemon.value = await getPokemonByName(params.name as string);
});
</script>

<template>
  <div class="container mw-[1024px] mx-auto flex flex-col items-center gap-8">
    <span class="link self-start cursor-pointer" @click="router.back()">
      Back
    </span>

    <div class="card shadow-xl">
      <figure>
        <img
          :src="pokemon?.img"
          :alt="pokemon?.name"
          width="200"
          height="200"
        />
      </figure>
    </div>

    <div class="text-4xl capitalize">
      {{ pokemon?.name }}
    </div>

    <div class="flex text-2xl gap-4 capitalize">
      <div class="font-bold">Ability:</div>
      {{ pokemon?.abilities.join(", ") }}
    </div>

    <div class="flex text-2xl gap-4 capitalize">
      <div class="font-bold">Types:</div>
      {{ pokemon?.types.join(", ") }}
    </div>
  </div>
</template>
