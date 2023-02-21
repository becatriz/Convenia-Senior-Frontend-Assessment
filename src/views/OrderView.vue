<script setup lang="ts">
import { onMounted, ref, toRaw } from "vue";
import { storeToRefs } from "pinia";
import { useOrderStore } from "@/stores/order-store";
import { usePaymentsStore } from "@/stores/payment-store";
import { useCurrencyStore } from "@/stores/currency-store";

import ButtonUI from "@/components/components-ui/ButtonUI.vue";
import AccordionUI from "@/components/components-ui/AccordionUI.vue";
import TableUI from "@/components/components-ui/TableUI.vue";
import CardUI from "@/components/components-ui/CardUI.vue";
import TotalAccount from "@/components/TotalAccount.vue";
import InputMinPlusUI from "@/components/components-ui/InputMinPlusUI.vue";

import { useToast } from "vue-toastification";
import { useRoute } from "vue-router";

import type { Command, Items, MapItems } from "@/types/command";
import { TYPE_FOOD } from "@/utils/constants";
import { getFormattedValue } from "@/utils/formattedValue";
import LoadingUI from "@/components/components-ui/LoadingUI.vue";

const toast = useToast();
const route = useRoute();
const storeOrders = useOrderStore();
const storeCurrency = useCurrencyStore();
const { getCommand, getTotalAccount, getOrders } = storeToRefs(storeOrders);
const { getCurrencyChosen } = storeToRefs(storeCurrency);
const { setCommand, updateOrder } = useOrderStore();
const { createPayments } = usePaymentsStore();

const paramsID = ref("");
const isLoading = ref(false);
const clonedOrder = ref<Array<Command>>([]);

function handleGoBack() {
  history.back();
}

function handleAddItem({ label, item }: { label: string; item: string }) {
  clonedOrder.value = structuredClone(toRaw(getCommand.value));

  clonedOrder.value.forEach((value) => {
    const items = value[label as keyof MapItems];

    items.forEach((val) => {
      if (val.name === item) {
        val.amount++;
      }
    });
  });

  setCommand(clonedOrder.value);
  getTotalAccount;
}

function handleRemoveItem({ label, item }: { label: string; item: string }) {
  clonedOrder.value = structuredClone(toRaw(getCommand.value));

  clonedOrder.value.forEach((value) => {
    const items = value[label as keyof MapItems];

    items.forEach((val) => {
      if (val.name === item) {
        val.amount--;
      }
    });
  });
  setCommand(clonedOrder.value);
  getTotalAccount;
}

async function handleConfirmedUpdate(): Promise<void> {
  setNewValuesForOrders();

  handleGoBack();

  if (clonedOrder.value.length) {
    await updateOrder(getPayload());
    toast.success("Comanda atualizada com sucesso!");
  }
}

function setNewValuesForOrders(): void {
  getOrders.value.forEach((value) => {
    if (value.code === paramsID.value) {
      if (value.status === "free") {
        value.status = "active";
      }
      value.command = clonedOrder.value;
    }
  });
}

function getPayload(): Array<Items> {
  return getOrders.value.filter((value) => value.code === paramsID.value);
}

function setIsLoading(status: boolean) {
  isLoading.value = status;
}

onMounted(async () => {
  setIsLoading(true);

  document.body.style.backgroundColor = "	#808080";

  paramsID.value = route.params["id"] as string;

  getOrders.value.forEach(async (value) => {
    if (value.code === paramsID.value) {
      if (value.status == "closed") {
        value.status = "free";
        await createPayments({
          id: paramsID.value,
          total: 0,
          payments: [],
        });
      }
    }
  });
  await updateOrder(getPayload());

  setIsLoading(false);
});
</script>

<template>
  <LoadingUI :is-loading="isLoading" />
  <CardUI title="Novo Pedido">
    <template #body>
      <div v-for="(item, index) in getCommand" :key="index">
        <AccordionUI
          v-for="label in Object.keys(item)"
          :key="label"
          :title="TYPE_FOOD[label as keyof MapItems]"
        >
          <template #list>
            <div
              v-for="(line, indexLine) in item[label as keyof MapItems]"
              :key="indexLine"
            >
              <TableUI
                :title="line.name"
                :value="`${getCurrencyChosen?.symbol} ${getFormattedValue(
                  line.value,
                  getCurrencyChosen?.rate,
                )}`"
              >
                <template #component>
                  <InputMinPlusUI
                    :amount="line.amount"
                    @handle-add-item="
                      handleAddItem({
                        label,
                        item: line.name,
                      })
                    "
                    @handle-remove-item="
                      handleRemoveItem({
                        label,
                        item: line.name,
                      })
                    "
                  />
                </template>
              </TableUI>
            </div>
          </template>
        </AccordionUI>
      </div>
    </template>
    <template #footer>
      <footer>
        <TotalAccount
          :title="`Mesa ${paramsID}`"
          :total="getTotalAccount.total"
          :symbol="getCurrencyChosen?.symbol || 'R$'"
        />
        <div class="footer-btn">
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
                <ButtonUI
                  label="Confirmar"
                  @handle-click="handleConfirmedUpdate"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </template>
  </CardUI>
</template>

<style lang="scss" scoped>
@import "../assets/DS/variables", "../assets/DS/typography",
  "../assets/DS/colors";

.order {
  &__title {
    text-align: center;
    @extend %heading-os-18-600;
  }
  &__total {
    display: flex;
    justify-content: space-between;
    @extend %paragraph-os-16-400;
  }
}

footer {
  margin: 0 auto;

  @media #{$small-and-down} {
    width: 100%;
  }
}
</style>
