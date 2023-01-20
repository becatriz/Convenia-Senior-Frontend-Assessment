<script setup lang="ts">

const emit = defineEmits(['input:modelValue']);

const props = defineProps({
  placeholder: {
    default: "Primeiro nome",
    type: String,
  },
  name: {
    default: "name",
    type: String,
  },
  id: {
    default: "input-name",
    type: String,
  },
  type: {
    default: "text",
    type: String,
  },
  value:{
    default: "",
    type: String,
  }
});

function emitEvent(event: Event) {
  emit('input:modelValue',(event.target as HTMLInputElement).value);
}

</script>
<template>
  <input
    :id="props.id"
    :type="props.type"
    :name="props.name"
    :value="props.value"
    :placeholder="props.placeholder"
    aria-label="input string"
    @input="event => emitEvent(event)"
  />
</template>

<style lang="scss" scoped>
input {
  width: 100%;
  padding: 1rem;
}
</style>
