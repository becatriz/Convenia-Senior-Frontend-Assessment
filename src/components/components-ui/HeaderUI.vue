<script setup lang="ts">
import { useMediaQuerys } from "../../composables/mediaQuery";

const { smallScreenAndDown } = useMediaQuerys();

const props = defineProps({
  user: {
    default: "",
    type: String,
  },
  hours: {
    default: "",
    type: String,
  },
  weekday: {
    default: "",
    type: String,
  },
});
</script>
<template>
  <div
    :class="[
      'header',
      {
        grid: !smallScreenAndDown(),
      },
    ]"
  >
    <div class="row header__content">
      <span class="header__user col m6">
        <span v-if="props.user" id="user-name" class="header__greeting"
          >Olá</span
        >
        {{ props.user }}</span
      >
      <div>
        <p class="header__info">{{ props.weekday }}</p>
        <p class="header__info">{{ props.hours }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/DS/variables", "../../assets/DS/typography",
  "../../assets/DS/colors";

.header {
  background: color("primary", "base");
  padding-left: 10px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  &__greeting {
    margin-right: 6px;
  }

  &__user {
    @extend %paragraph-os-16-700;
    @media #{$small-and-down} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__content {
    color: color("neutral", "white");
    @extend %paragraph-os-12-600;
    position: relative;
  }

  &__info {
    text-align: center;
  }
}
</style>
