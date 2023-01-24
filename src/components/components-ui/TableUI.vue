<script setup lang="ts">
const props = defineProps({
  title: {
    default: "",
    type: String,
  },
  value: {
    default: "",
    type: String,
  },
});
</script>

<template>
  <table class="table" border="0" cellpadding="0" cellspacing="0">
    <tbody>
      <tr>
        <td style="width: 15%">{{ props.title }}</td>
        <td style="width: 15%">{{ props.value }}</td>
        <td>
          <div class="space-slot">
            <slot name="component"></slot>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
@import "../../assets/DS/variables", "../../assets/DS/typography",
  "../../assets/DS/colors";

.space-slot {
  margin-top: -8px;
}

table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 6px;
  @extend %paragraph-os-14-400;
}

tr {
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  margin-left: 6px;
  margin-right: 6px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
</style>
