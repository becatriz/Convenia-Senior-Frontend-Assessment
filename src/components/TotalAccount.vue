<!-- eslint-disable @typescript-eslint/no-empty-function -->
<script setup lang="ts">
const emit = defineEmits(["input"]);

const props = defineProps({
  isInput: {
    default: false,
    type: Boolean,
  },
  title: {
    default: "",
    type: String,
  },
  total: {
    default: 0,
    type: Number,
  },
  symbol: {
    default: "R$",
    type: String,
  },
});

function emitEvent(event: Event) {
  emit("input", (event.target as HTMLInputElement).value);
}
</script>

<template>
  <div class="total-count">
    <p>{{ props.title }}</p>
    <div v-if="props.isInput">
      <span>{{ props.symbol }}</span>
      <input
        v-if="props.isInput"
        type="number"
        :value="total.toFixed(2)"
        @input="(event) => emitEvent(event)"
      />
    </div>
    <p v-else>Total: {{ props.symbol }} {{ total.toFixed(2) }}</p>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/DS/variables", "../assets/DS/typography",
  "../assets/DS/colors";
.total-count {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  @extend %paragraph-os-16-400;
}

input {
  width: 60px;
  height: 20px;
  background: color("grey", "200");
  outline: none;
  border: 0;
  margin-top: 20px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
}

span {
  margin-right: 10px;
}
</style>
