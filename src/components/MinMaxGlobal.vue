<script setup lang="ts">
const MIN_ITEM = 1;

const emit = defineEmits(["handleRemoveItem", "handleAddItem"]);

const props = defineProps({
  amount: {
    default: 1,
    type: Number,
  },
});
</script>

<template>
  <div class="wrapper">
    <div
      :class="[
        'wrapper__min',
        { 'wrapper__min--disabled': props.amount === MIN_ITEM },
      ]"
      @click="emit('handleRemoveItem')"
    >
      -
    </div>
    <div class="wrapper__amount">{{ props.amount }}</div>
    <div class="wrapper__max" @click="emit('handleAddItem')">+</div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/DS/variables", "../assets/DS/typography",
  "../assets/DS/colors";
.wrapper {
  display: flex;

  &__amount {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 1px;
  }

  &__max,
  &__min {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid color("neutral", "black");
    cursor: pointer;
    text-align: center;

    &:hover {
      background: color("primary", "50");
      opacity: 0.6;
    }

    &--disabled {
      background: color("grey", "50");
      opacity: 0.5;
      pointer-events: none;

      &:hover {
        background: none;
      }
    }
  }
}
</style>
