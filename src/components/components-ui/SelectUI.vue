<!-- eslint-disable @typescript-eslint/no-empty-function -->
<script setup lang="ts">
const emit = defineEmits(["onchange"]);

const props = defineProps({
  items: {
    default: () => [],
    type: Array<{ value: string; option: string }>,
  },
  name: {
    default: "currency",
    type: String,
  },
  default: {
    default: "",
    type: String,
  },
});

function handleEmitChange(event: Event) {
  emit("onchange", (event.target as HTMLInputElement).value);
}
</script>

<template>
  <div class="select">
    <select
      id="select-ui"
      class="select__item"
      :name="props.name"
      @change="(event) => handleEmitChange(event)"
    >
      <option
        v-for="item in props.items"
        id="select-ui-option"
        :key="item.value"
        :value="item.value"
        :selected="props.default === item.value"
      >
        {{ item.option }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
select {
  outline: none;
}
.select {
  &__item {
    padding: 10px;
    max-width: 200px;
    width: 100%;
    background: #f6f6f6;
    border-radius: 5px;
  }
}
</style>
