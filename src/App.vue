<script setup lang="ts">
import { storeToRefs } from "pinia";
import { usePersonStore } from "@/stores/person-store";

import { ref, onMounted } from "vue";
import { WEEKDAY } from "@/utils/constants";

import HeaderUI from "./components/components-ui/HeaderUI.vue";

const storePerson = usePersonStore();
const { getPerson } = storeToRefs(storePerson);

const weekday = ref("");
const hours = ref("");

function getMinutes(min: number): string | number {
  return String(min).length > 1 ? min : `0${min}`;
}

function getHours(hour: number): string | number {
  return String(hour).length > 1 ? hour : `0${hour}`;
}

onMounted(() => {
  const today = new Date();

  hours.value = `${getHours(today.getHours())}:${getMinutes(
    today.getMinutes(),
  )}`;
  weekday.value = WEEKDAY[today.getDay()];
});
</script>

<template>
  <HeaderUI :user="getPerson.name" :hours="hours" :weekday="weekday" />
  <RouterView />
</template>
