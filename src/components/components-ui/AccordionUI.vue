<script setup lang="ts">
const props = defineProps({
  title: {
    default: "",
    type: String,
  },
  isOpen: {
    default: false,
    type: Boolean,
  },
});
</script>

<template>
  <div class="summary--disabled">
    <details :open="props.isOpen">
      <summary id="summary-details">
        <div>{{ props.title }}</div>
      </summary>
      <div>
        <slot name="list"></slot>
      </div>
    </details>
  </div>
</template>
<style lang="scss" scoped>
@import "../../assets/DS/variables", "../../assets/DS/typography",
  "../../assets/DS/colors";

@keyframes open {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

details[open] summary ~ * {
  animation: open 0.6s ease-in-out;
}

details summary {
  @extend %paragraph-os-16-400;
  margin-top: 20px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-size: 16px;
  font-weight: 300;
  padding-bottom: 6px;
}

details summary:after {
  content: "\2303";
  color: color("neutral", "black");
  font-size: 16px;
  line-height: 0;
  right: 0;
  transform-origin: center;
  transition: 200ms linear;
  transform: rotate(180deg);
  font-weight: 900;
  margin-bottom: 10px;
}
details[open] summary:after {
  transform: rotate(360deg);
}
</style>
