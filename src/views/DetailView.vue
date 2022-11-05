<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();

const pokemonName = route.params.name;
</script>

<template>
  <div>
    <h1>{{ pokemonName }}</h1>
  </div>
</template>
