<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { GetCurrencyConversionQuery } from "@/graphql/types/generated";

import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";

import { storeToRefs } from "pinia";
import { usePersonStore } from "@/stores/person-store";
import { useOrderStore } from "@/stores/order-store";
import { usePaymentsStore } from "@/stores/payment-store";
import { useCurrencyStore } from "@/stores/currency-store";

import CircleAction from "@/components/CircleAction.vue";
import ModalUI from "@/components/components-ui/ModalUI.vue";
import ButtonUI from "@/components/components-ui/ButtonUI.vue";
import SelectUI from "@/components/components-ui/SelectUI.vue";
import LoadingUI from "@/components/components-ui/LoadingUI.vue";

import router from "@/router";

import { OPTIONS_SELECTED_CURRENCY } from "@/utils/constants";

import { useToast } from "vue-toastification";

const toast = useToast();
const storeOrders = useOrderStore();
const storePerson = usePersonStore();
const storeCurrency = useCurrencyStore();

const { chosenOption } = storeToRefs(storeCurrency);
const { person } = storeToRefs(storePerson);
const { getCurrencyChosen } = storeToRefs(storeCurrency);
const { orders, orderTotalConfirmed, getOrders, getTotalAccount } =
  storeToRefs(storeOrders);

const { setPerson } = usePersonStore();
const { fetchPayments } = usePaymentsStore();
const { fetchOrders, setCodeTable, setConfirmedOrder, setTotalPartial } =
  useOrderStore();
const { setBaseCurrencyInfo, setChosenCurrency } = useCurrencyStore();

const personName = ref("");
const isOpenModal = ref(true);
const minNameValue = ref(3);
const isLoading = ref(false);
const currencyOptionsConversion = ref(OPTIONS_SELECTED_CURRENCY);

const variables = ref({
  baseCurrency: "BRL",
  convertCurrencies: ["USD", "EUR"],
});

const { onResult, onError, result, loading } =
  useQuery<GetCurrencyConversionQuery>(
    gql`
      query currencyConversion(
        $baseCurrency: String!
        $convertCurrencies: [String]!
      ) {
        currencyConversion(
          baseCurrency: $baseCurrency
          convertCurrencies: $convertCurrencies
        ) {
          baseCurrencyInfo {
            code
            symbol
          }
          conversions {
            currencyInfo {
              code
              symbol
            }
            rate
            timestamp
          }
        }
      }
    `,
    variables,
  );

function setNameValue(value: string): void {
  personName.value = value;
}

function handleClick() {
  setPerson({
    name: personName.value,
  });

  isOpenModal.value = false;
}

function handleUpdateCommand(codeTable: string): void {
  setCodeTable(codeTable);

  router.push({
    name: "order",
    params: {
      id: codeTable,
    },
  });
}

function handleCloseCommand(codeTable: string): void {
  setCodeTable(codeTable);

  router.push({
    name: "payments",
    params: {
      id: codeTable,
    },
  });
}

function handleChoseCurrency(value: string) {
  setChosenCurrency(value);

  setStatusIsLoading(true);

  setTotalOrderInTable();

  setStatusIsLoading(false);
}

async function getOrdersAndPayments() {
  setStatusIsLoading(true);

  await fetchPayments();
  await fetchOrders();

  setStatusIsLoading(false);
}

function setTotalOrderInTable() {
  orders.value.forEach((item) => {
    setCodeTable(item.code);
    setTotalPartial(getTotalAccount.value);
    setConfirmedOrder(getTotalAccount.value);
  });
}

function setStatusIsLoading(status: boolean) {
  isLoading.value = status;
}

onResult(async ({ data }) => {
  setStatusIsLoading(loading.value);

  setBaseCurrencyInfo(data.currencyConversion);

  await getOrdersAndPayments();
});

onError(async (data) => {
  setStatusIsLoading(loading.value);

  await getOrdersAndPayments();
  setBaseCurrencyInfo(null);
  setTotalPartial(getTotalAccount.value);
  if (data.name === "ApolloError") {
    toast.error(
      "Erro ao buscar listagem para conversão de moedas. Inicialize API para conectar.",
    );
    setStatusIsLoading(loading.value);
    return;
  }
  setStatusIsLoading(loading.value);
  toast.error("Ocorreu um erro para buscar listagem de moedas");
});

onMounted(() => {
  document.body.style.backgroundColor = "#FFFF";
});
</script>
<template>
  <main>
    <LoadingUI v-if="person.name" :is-loading="isLoading" />
    <div v-if="person.name" class="content-table">
      <div class="grid">
        <div class="row end">
          <SelectUI
            v-if="result"
            class="col s12"
            :items="currencyOptionsConversion"
            :default="chosenOption"
            @onchange="handleChoseCurrency"
          />
        </div>
      </div>
      <CircleAction
        :items="getOrders"
        :account="orderTotalConfirmed"
        :currency="getCurrencyChosen"
        @update:command="handleUpdateCommand"
        @close:command="handleCloseCommand"
      />
    </div>
    <ModalUI
      :is-open-modal="!person.name && isOpenModal"
      @input:model-value="setNameValue"
    >
      <template #footer>
        <ButtonUI
          :disabled="personName.length < minNameValue"
          @handle-click="handleClick"
        />
      </template>
    </ModalUI>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/DS/variables", "@/assets/DS/typography", "@/assets/DS/colors";

div {
  width: 100%;
  margin: 0 auto;
  color: color("neutral", "white");
}

.content-table {
  margin-top: 100px;

  &__selected-ui {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
