<script setup lang="ts">
import { onMounted, ref } from "vue";

import ButtonUI from "@/components/components-ui/ButtonUI.vue";
import CardUI from "@/components/components-ui/CardUI.vue";
import Coupon from "@/components/CouponAccount.vue";
import TotalAccount from "@/components/TotalAccount.vue";

import { useToast } from "vue-toastification";

import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useOrderStore } from "@/stores/order-store";
import { usePaymentsStore } from "@/stores/payment-store";
import { useCurrencyStore } from "@/stores/currency-store";
import type { Items, MapItems, TypeItems } from "@/types/command";
import LoadingUI from "@/components/components-ui/LoadingUI.vue";

const toast = useToast();

const route = useRoute();
const storeOrders = useOrderStore();
const storePayments = usePaymentsStore();
const storeCurrency = useCurrencyStore();
const { getCommand, getTotalAccount, getOrderTotalPartial, getOrders } =
  storeToRefs(storeOrders);
const { getPaymentsById } = storeToRefs(storePayments);
const { getCurrencyChosen } = storeToRefs(storeCurrency);

const { createPayments } = usePaymentsStore();
const { updateOrder } = useOrderStore();

const paramsID = ref("");
const isLoading = ref(false);
const paymentsValue = ref(0);

function handleGoBack() {
  history.back();
}

function getItemsByCommand(): TypeItems[][][] {
  return getCommand.value.map((item) => {
    const keys = Object.keys(item);

    return keys.map((key) => item[key as keyof MapItems]);
  });
}

function getAllItems() {
  const items = JSON.parse(JSON.stringify(getItemsByCommand())).flat();

  return items.flat().reduce((acc: Array<TypeItems>, item: TypeItems) => {
    if (item.amount >= 1) {
      return [...acc, item];
    }
    return [...acc];
  }, []) as Array<TypeItems>;
}

function handlePayment(value: number) {
  paymentsValue.value = value;
}

async function handlePaymentValue() {
  const value = paymentsValue.value
    ? paymentsValue.value
    : getTotalAccount.value.total;

  if (value <= 0) {
    toast.error("Valor incorreto para realizar pagamento");
    return;
  }

  if (!checkValuePayments(Number(value))) return;

  await createPayments(payload(Number(value)));

  handlePayment(0);

  setIsLoading(false);
}

async function checkValuePayments(value: number) {
  setIsLoading(true);
  const total = Number(value - getTotalAccount.value.total).toFixed(2);

  if (value > getTotalAccount.value.total) {
    toast.success(
      `Pagamento efetuado com sucesso!. Troco do cliente: ${
        getCurrencyChosen.value?.symbol || "R$"
      } ${total}`,
    );

    await updateOrder(getPayload());

    handleGoBack();

    return false;
  }

  if (value === getTotalAccount.value.total) {
    await updateOrder(getPayload());

    handleGoBack();

    toast.success("Pagemento efetuado com suceso!!!");

    return true;
  }

  toast.success("Pagemento parcial efetuado com suceso!!!");

  await updateOrder(
    getOrders.value.filter((value) => value.code === paramsID.value),
  );
}

function getPayload(): Array<Items> {
  getOrders.value.forEach((value) => {
    if (value.code === paramsID.value) {
      value.status = "closed";
    }
  });

  return getOrders.value.filter((value) => value.code === paramsID.value);
}

function payload(value: number) {
  return {
    id: paramsID.value,
    total: value,
    payments: [
      {
        date: new Date(),
        value,
      },
    ],
  };
}

function setIsLoading(status: boolean) {
  isLoading.value = status;
}

onMounted(() => {
  setIsLoading(true);
  document.body.style.backgroundColor = "	#808080";
  paramsID.value = route.params["id"] as string;

  setIsLoading(false);
});
</script>

<template>
  <LoadingUI :is-loading="isLoading" />
  <div class="payments-view">
    <CardUI title="Novo Pagamento">
      <template #body>
        <Coupon
          :account="getAllItems()"
          :partial-total="getOrderTotalPartial?.total"
          :total-rest="getTotalAccount.total"
          :payments="getPaymentsById"
          :currency="getCurrencyChosen"
        />
      </template>
      <template #footer>
        <footer>
          <TotalAccount
            :is-input="true"
            :title="`Mesa ${paramsID}`"
            :total="getTotalAccount.total"
            :symbol="getCurrencyChosen?.symbol || 'R$'"
            @input="handlePayment"
          />
          <div class="grid">
            <div class="row center">
              <div class="col s12 m5">
                <ButtonUI
                  variant="tertiary"
                  label="Cancelar"
                  @handle-click="handleGoBack"
                />
              </div>
              <div class="col s12 m5">
                <ButtonUI label="Pagar" @handle-click="handlePaymentValue" />
              </div>
            </div>
          </div>
        </footer>
      </template>
    </CardUI>
  </div>
</template>

<style lang="scss">
.payments-view > .container {
  .card {
    border: none;
  }
}
</style>
