<script setup lang="ts">
const props = defineProps<{
  img: string;
  name: string;
  buttonText?: string;
}>();

const emits = defineEmits<{
  (e: "clickButton", name: string): void;
}>();

const renderButtonText = props.buttonText ? props.buttonText : "View Detail";
</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure>
      <img :src="props.img" alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ props.name }}</h2>
      <div class="card-actions justify-end">
        <button
          class="btn btn-primary"
          @click="emits('clickButton', props.name)"
        >
          {{ renderButtonText }}
        </button>
      </div>
    </div>
  </div>
</template>
