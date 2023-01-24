<script setup lang="ts">
const props = defineProps({
  isLoading: {
    default: false,
    type: Boolean,
  },
});
</script>

<template>
  <div v-if="props.isLoading" class="loader-container">
    <div class="loader"></div>
  </div>
</template>

<style lang="scss" scoped>
.loader-container {
  background: #e0e6ec;
  opacity: 0.8;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.loader {
  animation: is-rotating 1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #51d4db;
  height: 50px;
  width: 50px;
}

@keyframes is-rotating {
  to {
    transform: rotate(1turn);
  }
}
</style>
