import { defineStore } from "pinia";
import type { Person } from "@/types/person";

interface IPerson {
  person: Person;
}

export const usePersonStore = defineStore("person-store", {
  state: (): IPerson => ({
    person: { name: "" },
  }),
  actions: {
    setPerson(person: Person) {
      this.person = person;
    },
  },
  getters: {
    getPerson: (state) => state.person,
  },
});
