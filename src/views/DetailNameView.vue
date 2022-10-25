<script setup lang="ts">
import { useRoute } from "vue-router";

const { params } = useRoute();
</script>

<template>
  {{ params.name }}
</template>
