<script setup lang="ts">
import ButtonGlobal from "@/components/ButtonGlobal.vue";
import AccordionGlobal from "@/components/AccordionGlobal.vue";
import TableCollapseGlobal from "@/components/TableCollapseGlobal.vue";

function handleGoBack() {
  history.back();
}
</script>

<template>
  <div class="card">
    <p class="order__title">Novo Pedido</p>
    <AccordionGlobal v-for="(item, index) in [1, 2]" :key="index">
      <template #list>
        <TableCollapseGlobal />
      </template>
    </AccordionGlobal>
    <footer>
      <div class="order__total">
        <p>Mesa 1</p>
        <p>Total: R$ 32,00</p>
      </div>
      <div class="grid">
        <div class="row">
          <div class="col s12 m6">
            <ButtonGlobal
              @handle-click="handleGoBack"
              variant="tertiary"
              label="Cancelar"
            />
          </div>
          <div class="col s12 m6">
            <ButtonGlobal label="Confirmar" />
          </div>
        </div>
      </div>
    </footer>
  </div>
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
  width: 86%;
  margin: 0 auto;

  @media #{$small-and-down} {
    width: 100%;
  }
}
</style>
