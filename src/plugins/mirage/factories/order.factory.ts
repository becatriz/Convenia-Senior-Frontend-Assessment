import { faker } from "@faker-js/faker";
import { Factory } from "miragejs";
import type { FactoryDefinition } from "miragejs/-types";

export default Factory.extend({
  id: "1",
  code: "1",
  status: "free",
  dateHour: new Date(),
  command: [
    {
      drinks: [
        {
          name: "Cerveja Preta",
          amount: 0,
          value: 5.0,
          date: faker.date.recent(),
        },
        {
          name: "Vinho",
          amount: 0,
          value: 20.0,
          date: faker.date.recent(),
        },
        {
          name: "Caipirinha",
          amount: 0,
          value: 8.0,
          date: faker.date.recent(),
        },
        {
          name: "Refrigerante",
          amount: 0,
          value: 5.0,
          date: faker.date.recent(),
        },
        {
          name: "Água",
          amount: 0,
          value: 2.5,
          date: faker.date.recent(),
        },
        {
          name: "Suco",
          amount: 0,
          value: 7.5,
          date: faker.date.recent(),
        },
      ],
      foods: [
        {
          name: "Espetinho",
          amount: 0,
          value: 8.0,
          date: new Date(),
        },
        {
          name: "Filé Milan",
          amount: 0,
          value: 25.0,
          date: new Date(),
        },
        {
          name: "Salmão",
          amount: 0,
          value: 35.0,
          date: new Date(),
        },
        {
          name: "Camarão",
          amount: 0,
          value: 45.0,
          date: new Date(),
        },
      ],
      servings: [
        {
          name: "Batata Frita",
          amount: 0,
          value: 20.0,
          date: new Date(),
        },
        {
          name: "Calabresa Frita",
          amount: 0,
          value: 15.0,
          date: new Date(),
        },
        {
          name: "Peixe Isca",
          amount: 0,
          value: 28.0,
          date: new Date(),
        },
      ],
      salads: [
        {
          name: "Sal. Agridoce",
          amount: 0,
          value: 6.0,
          date: faker.date.recent(),
        },
        {
          name: "Sal. Folhas",
          amount: 0,
          value: 10.0,
          date: faker.date.recent(),
        },
        {
          name: "Sal. Tropical",
          amount: 0,
          value: 20.0,
          date: faker.date.recent(),
        },
      ],
    },
  ],
}) as FactoryDefinition;
