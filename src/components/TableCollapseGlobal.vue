<script setup lang="ts">
import MinMaxGlobal from "./MinMaxGlobal.vue";
</script>

<template>
  <table border="0" cellpadding="0" cellspacing="0">
    <tbody>
      <tr>
        <td>Vinho</td>
        <td>R$ 98.00</td>
        <td>
          <div>
            <MinMaxGlobal />
          </div>
        </td>
      </tr>
      <tr>
        <td>Cerveja</td>
        <td>R$ 18.00</td>
        <td>
          <div>
            <MinMaxGlobal />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
@import "../assets/DS/variables", "../assets/DS/typography",
  "../assets/DS/colors";

table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 6px;
  @extend %paragraph-os-12-600;
}

tr {
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  border-bottom: 1px solid color("grey", "500");
  padding: 8px;

  &:hover {
    background: color("grey", "200");
  }
}
</style>
