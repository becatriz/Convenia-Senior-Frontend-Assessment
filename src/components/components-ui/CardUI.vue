<script setup lang="ts">
const props = defineProps({
  title: {
    default: "",
    type: String,
  },
});
</script>

<template>
  <div class="container">
    <div class="card">
      <p class="card__title">{{ props.title }}</p>
      <slot name="body" />
      <slot name="footer" />
    </div>
  </div>
</template>
