<script setup lang="ts"></script>

<template>
  <div class="summary">
    <details open>
      <summary>
        <div>Bebidas</div>
      </summary>
      <div>
        <slot name="list"></slot>
      </div>
    </details>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/DS/variables", "../assets/DS/typography",
  "../assets/DS/colors";

@keyframes open {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.summary {
  @extend %paragraph-os-16-400;
}

details[open] summary ~ * {
  animation: open 0.6s ease-in-out;
}

details summary {
  padding: 0.5rem 0;
  border-bottom: 1px solid black;
  position: relative;
  cursor: pointer;
  font-size: 16px;
  font-weight: 300;
}

details summary:after {
  content: "^";
  color: color("neutral", "black");
  position: absolute;
  font-size: 16px;
  line-height: 0;
  right: 0;
  transform-origin: center;
  transition: 200ms linear;
  transform: rotate(180deg);
  font-weight: 900;
  margin-right: 10px;
  margin-top: -10px;
}
details[open] summary:after {
  transform: rotate(360deg);
  font-size: 16px;
}

</style>
