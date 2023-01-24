<!-- eslint-disable @typescript-eslint/no-empty-function -->
<script setup lang="ts">
import type { TypeItems } from "@/types/command";
import type { CurrencyCurrent } from "@/types/currency";
import type { ItemPayments } from "@/types/payments";
import { getFormattedHour, getFormattedDateWithHour } from "@/utils/formatDate";
import { getFormattedValue } from "@/utils/formattedValue";
import type { PropType } from "vue";

const props = defineProps({
  account: {
    default: () => [],
    type: Array<TypeItems>,
  },

  partialTotal: {
    default: 0,
    type: Number,
  },

  totalRest: {
    default: 0,
    type: Number,
  },

  payments: {
    default: () => [],
    type: Array<ItemPayments>,
  },
  currency: {
    default: () => {},
    type: Object as PropType<CurrencyCurrent>,
  },
});
</script>

<template>
  <div class="coupon">
    <table class="table">
      <thead>
        <tr style="width: 100%">
          <th>PEDIDO</th>
          <th class="coupon__value">QTD</th>
          <th class="coupon__item">HORÁRIO</th>
          <th class="coupon__item">UND.</th>
          <th class="coupon__value">VALOR</th>
        </tr>
      </thead>
      <tbody v-for="item in props.account" :key="item.name">
        <tr>
          <td class="coupon__item-name">{{ item.name }}</td>
          <td class="coupon__amount">{{ item.amount }}</td>
          <td class="coupon__hour">
            {{ getFormattedHour(item.date as unknown as Date) }}
          </td>
          <td class="coupon__und">
            {{ props.currency?.symbol || "R$" }}
            {{ item.value.toFixed(2) }}
          </td>
          <td class="coupon__value">
            {{ props.currency?.symbol || "R$" }}
            {{
              (item.value * item.amount * (props.currency?.rate || 1)).toFixed(
                2,
              )
            }}
          </td>
        </tr>
      </tbody>
    </table>

    <div class="space"></div>

    <section class="total">
      <p>TOTAL PARCIAL</p>
      <p>
        {{ props.currency?.symbol || "R$" }}
        {{ props.partialTotal.toFixed(2) }}
      </p>
    </section>

    <div class="space"></div>

    <div class="payments">
      <table class="table">
        <tbody>
          <tr>
            <td>DATA</td>
            <td>PAGAMENTOS</td>
          </tr>
          <tr v-for="(item, index) in props.payments" :key="index">
            <td class="payments__date">
              {{ getFormattedDateWithHour(item.date) }}
            </td>
            <td class="payments__total">
              - {{ props.currency?.symbol || "R$" }}
              {{ item.value.toFixed(2) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="space"></div>

    <section class="total">
      <p>TOTAL RESTANTE</p>
      <p>
        {{ props.currency?.symbol || "RS" }}
        {{ totalRest.toFixed(2) }}
      </p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/DS/variables", "../assets/DS/typography",
  "../assets/DS/colors";

table {
  th {
    @extend %font-weight-500;
    text-align: start;
    line-height: 160%;
    width: 100%;
  }
  tr {
    display: flex;
    justify-content: space-between;
  }
}

.coupon {
  width: 50%;
  margin: 0 auto;
  background: color("grey", "200");
  padding: 1rem;

  @media #{$small-and-down} {
    width: 100%;
  }
  &__value {
    width: 15%;
    text-align: end;
  }

  &__item-name {
    width: 25%;
  }

  &__item {
    text-align: center;
  }

  &__amount {
    width: 5%;
    text-align: center;
  }

  &__hour {
    width: 15%;
    text-align: left;
  }

  &__und {
    text-align: end;
    width: 15%;
  }
}

.space {
  margin-top: 10px;
  border-bottom: 1px dotted black;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.total {
  @extend %paragraph-os-12-500;
  line-height: 1;
  text-align: end;
  margin-top: 10px;
}

.payments {
  table tr {
    display: flex;
  }

  &__total {
    padding-left: 10px;
  }
}
</style>
