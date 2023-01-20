<script setup lang="ts">
import ButtonGlobal from "@/components/ButtonGlobal.vue";

function handleGoBack() {
  history.back();
}
</script>

<template>
  <div class="card">
    <p>Novo Pagamento</p>
    <div class="cupom-fiscal">
      <table border="0" cellpadding="0" cellspacing="0">
        <tbody>
          <tr>
            <td>PEDIDO</td>
            <td>QTD</td>
            <td>HORÁRIO</td>
            <td>UND</td>
            <td>VALOR</td>
          </tr>
          <tr>
            <td>Cerveja</td>
            <td>2</td>
            <td>15:30</td>
            <td>R$ 10,00</td>
            <td>R$ 20,00</td>
          </tr>
        </tbody>
      </table>
      <div class="space"></div>
      <div class="total">
        <p>TOTAL PARCIAL</p>
        <p>R$ 38,00</p>
      </div>
      <tbody>
        <tr>
          <td>DATA</td>
          <td>PAGAMENTO</td>
        </tr>
        <tr>
          <td>02/08/2023 16:35</td>
          <td>- R$ 10,00</td>
        </tr>
      </tbody>
      <div class="space"></div>
      <div class="total">
        <p>TOTAL RESTANTE</p>
        <p>R$ 38,00</p>
      </div>
    </div>
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
.card {
  border: none;
}

.space {
  margin-top: 10px;
  border-bottom: 1px dotted black;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.total {
  text-align: end;
}

.cupom-fiscal {
  width: 400px;
  margin: 0 auto;
  background: color("grey", "200");
  padding: 1rem;

  @media #{$small-and-down} {
    width: 100%;
  }
}
</style>
