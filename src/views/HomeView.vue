<script setup lang="ts">
import { storeToRefs } from "pinia";
import { usePersonStore } from "@/stores/person-store";
import { ref } from "vue";
import CircleGlobal from "@/components/CircleGlobal.vue";
import ModalGlobal from "@/components/ModalGlobal.vue";
import ButtonGlobal from "@/components/ButtonGlobal.vue";
import router from "@/router";

const storePerson = usePersonStore();
const { getPerson } = storeToRefs(storePerson);
const { setPerson } = usePersonStore();

const personName = ref("");
const isOpenModal = ref(true);
const minNameValue = ref(3);

function setNameValue(value: string): void {
  personName.value = value;
}

function handleClick() {
  setPerson({
    name: personName.value,
  });

  isOpenModal.value = false;
}

function handleUpdateCommand(): void {
  router.push({
    name: "order",
    params: {
      id: "1",
    },
  });
}

function handleCloseCommand(): void {
  router.push({
    name: "payments",
    params: {
      id: "1",
    },
  });
}
</script>
<template>
  <main>
   <div v-if="getPerson.name" class="content-table">
    <CircleGlobal @update:command="handleUpdateCommand"  @close:command="handleCloseCommand"/>
   </div>
    <ModalGlobal
      @input:modelValue="setNameValue"
      :is-open-modal="!getPerson.name && isOpenModal"
    >
      <template #footer>
        <ButtonGlobal
          @handleClick="handleClick"
          :disabled="personName.length < minNameValue"
        />
      </template>
    </ModalGlobal>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/DS/variables", "@/assets/DS/typography", "@/assets/DS/colors";

div {
  width: 100%;
  margin: 0 auto;
  color: color("neutral", "white");
}

.content-table{
  margin-top: 100px;
}
</style>
