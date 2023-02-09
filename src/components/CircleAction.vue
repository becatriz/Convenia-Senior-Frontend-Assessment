<!-- eslint-disable @typescript-eslint/no-empty-function -->
<script setup lang="ts">
import type { Items } from "@/types/command";
import type { CurrencyCurrent } from "@/types/currency";
import type { TotalOrder } from "@/types/totalOrder";
import { getFormattedHour } from "@/utils/formatDate";
import { getFormattedValue } from "@/utils/formattedValue";
import { ref, type PropType } from "vue";

const emit = defineEmits(["update:command", "close:command"]);
const codeTable = ref("");

const props = defineProps({
  items: {
    default: () => [],
    type: Array<Items>,
  },

  account: {
    default: () => [],
    type: Array<TotalOrder>,
  },

  currency: {
    default: () => {},
    type: Object as PropType<CurrencyCurrent>,
  },
});

function handleEmitUpdate(codeTable: string): void {
  emit("update:command", codeTable);
}

function handleEmitClosed(codeTable: string): void {
  emit("close:command", codeTable);
}

function setTable(code: string): void {
  codeTable.value = code;
}

function getValue(item: Items): string {
  const total = getTotalAccount(item.code)?.toFixed(2) ?? 0;

  if (item.status === "free") {
    return `Mesa ${item.code}`;
  }
  return `${props.currency?.symbol} ${total}`;
}

function getTotalAccount(code: string): number | undefined {
  const item = props.account.find((item) => item.code === code);

  return item?.total;
}
</script>

<template>
  <div class="grid container">
    <div class="row center">
      <div
        v-for="(item, index) in props.items"
        :key="index"
        class="wrapper"
        @click="setTable(item.code)"
      >
        <div
          :class="`circle fill-${item.status}`"
          @click="handleEmitUpdate(item.code)"
        >
          <p v-if="item.status !== 'free'" class="circle__hour">
            {{ getFormattedHour() }}
          </p>
          <p
            :class="[
              'circle__value',
              {
                'circle__value--free': item.status == 'free',
              },
            ]"
          >
            {{ getValue(item) }}
          </p>
          <p v-if="item.status != 'free'" class="circle__title">
            Mesa {{ item.code }}
          </p>
        </div>

        <div
          :class="[
            'circle__smaller__down',
            {
              'circle__smaller__down--visible': item.status !== 'active',
              'circle__smaller__down--update': codeTable === item.code,
            },
          ]"
          @click="handleEmitUpdate(item.code)"
        >
          <span>+</span>
        </div>
        <div
          :class="[
            'circle__smaller__right',
            {
              'circle__smaller__right--visible': item.status !== 'active',
            },
          ]"
          @click="handleEmitClosed(item.code)"
        >
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
  "closed": color("support", "error"),
  "free": color("support", "success"),
  "active": color("support", "warn"),
);

.container {
  margin-top: 200px;
  cursor: pointer;

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
  border-radius: 50%;

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
    padding-top: 10px;
    width: 140px;

    &--free {
      height: 100px;
      padding-top: 40px;
    }
  }

  &__smaller__down {
    background: lightblue;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-top: -26px;
    margin-left: 50px;
    cursor: pointer;
    transition: 0.6s;

    &--visible {
      visibility: hidden;
    }

    &--update {
      background: color("primary", "base");
    }

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
    margin-top: -120px;
    margin-left: 105px;
    cursor: pointer;
    margin-bottom: 100px;
    transition: 0.6s;

    &--visible {
      visibility: hidden;
    }

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
