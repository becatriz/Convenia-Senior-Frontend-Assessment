<script setup lang="ts">
const emit = defineEmits(["handleClick"]);

const props = defineProps({
  label: {
    default: "Entrar",
    type: String,
  },
  disabled: {
    default: false,
    type: Boolean,
  },
  variant: {
    default: "primary",
    type: String,
    validator(value: string) {
      return ["primary", "tertiary"].includes(value);
    },
  },
});

function emitEvent() {
  emit("handleClick");
}
</script>
<template>
  <button
    id="button-send"
    :class="`button button--${variant}`"
    :disabled="disabled"
    aria-label="send"
    @click="emitEvent"
  >
    {{ props.label }}
  </button>
</template>

<style lang="scss" scoped>
@import "../../assets/DS/variables", "../../assets/DS/typography",
  "../../assets/DS/colors";

.button {
  &--primary {
    text-align: center;
    padding: 1rem;
    border-radius: 6px;
    cursor: pointer;
    width: 100%;
    background: color("primary", "50");
    color: color("neutral", "white");
    @extend %label-os-12-600;

    &:hover {
      background: color("primary", "base");
    }
  }

  &--tertiary {
    text-align: center;
    padding: 1rem;
    border-radius: 6px;
    cursor: pointer;
    width: 100%;
    background: color("neutral", "white");
    border: 1px solid color("grey", "400");
    @extend %label-os-12-600;

    &:hover {
      background: color("primary", "50");
      color: color("neutral", "white");
    }
  }

  text-transform: uppercase;

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
}
</style>
