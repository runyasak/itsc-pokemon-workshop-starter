<script setup lang="ts">
import type { PokemonData } from "@/models/pokemon.model";

const props = defineProps<{ pokemon: PokemonData }>();

const emit = defineEmits<{
  (e: "clickDetail", name: string): void;
}>();
</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure>
      <img
        :src="props.pokemon.img"
        :alt="props.pokemon.name"
        width="100"
        height="100"
      />
    </figure>
    <div class="card-body">
      <div class="card-title capitalize text-center">
        {{ props.pokemon.name }}
      </div>
      <div class="card-actions justify-end">
        <button
          class="btn btn-primary text-white"
          @click="emit('clickDetail', props.pokemon.name)"
        >
          View Detail
        </button>
      </div>
    </div>
  </div>
</template>
