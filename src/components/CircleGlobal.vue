<script setup lang="ts">
const emit = defineEmits(["update:command", "close:command"]);

type StatusProps = {
  active: string;
  free: string;
  closed: string;
};

type ItemsProps = {
  hours: String;
  value: String;
  table: String;
  status: Array<StatusProps>;
};

const props = defineProps({
  items: {
    default: () => [],
    type: Array<ItemsProps>,
  },
});

function handleEmitUpdate(): void {
  emit("update:command");
}

function handleEmitClosed(): void {
  emit("close:command");
}

</script>

<template>
  <div class="grid container">
    <div class="row middle">
      <div
        class="wrapper"
        v-for="(item, index) in [1, 2, 3, 5, 6, 7]"
        :key="index"
      >
        <div :class="`circle fill-${'free'}`">
          <p v-if="true" class="circle__hour">14:00</p>
          <p
            :class="[
              'circle__value',
              {
                'circle__value--free': false,
              },
            ]"
          >
            Mesa 1
          </p>
          <p v-if="true" class="circle__title">Mesa 1</p>
        </div>
        <div class="circle__smaller__down" @click="handleEmitUpdate">
          <span>+</span>
        </div>
        <div class="circle__smaller__right" @click="handleEmitClosed">
          <span>$</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/DS/variables", "../assets/DS/typography",
  "../assets/DS/colors";
$circle-colors: (
  "closed": color("support", "warn"),
  "free": color("support", "success"),
  "active": color("support", "info"),
);

.container {
  margin-top: 200px;

  @media #{$small-and-down} {
    margin-top: 10px;
  }
}

.wrapper {
  margin-left: 40px;

  @media #{$small-and-down} {
    margin-left: 0px;
  }
}

.circle {
  width: 140px;
  height: 140px;

  position: absolute;

  @each $color, $i in $circle-colors {
    &.fill-#{$color} {
      background-color: $i;
    }
  }

  &__title {
    color: color("neutral", "white");
    @extend %paragraph-os-12-500;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -10px;
  }

  &__hour {
    color: color("neutral", "white");
    @extend %paragraph-os-12-500;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__value {
    color: color("neutral", "white");
    @extend %heading-os-18-600;
    display: flex;
    align-items: center;
    justify-content: center;

    &--free {
      height: 100px;
    }
  }

  &__smaller__down {
    background: lightblue;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    position: relative;
    margin-top: 110px;
    margin-left: 50px;
    cursor: pointer;
    transition: 0.6s;

    &:hover {
      background: color("primary", "base");
    }

    > span {
      font-size: 50px;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
    }
  }

  &__smaller__right {
    background: lightblue;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    position: relative;
    margin-top: -100px;
    margin-left: 105px;
    cursor: pointer;
    margin-bottom: 100px;
    transition: 0.6s;

    &:hover {
      background: color("primary", "base");
    }

    > span {
      font-size: 22px;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
    }
  }
}
</style>
