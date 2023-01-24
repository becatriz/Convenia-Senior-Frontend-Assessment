/* eslint-disable @typescript-eslint/ban-types */
import type { Server } from "miragejs";
import { faker } from "@faker-js/faker";

export default function (server: Server) {
  server.createList("order", 1);
  server.create("order", {
    id: "2",
    code: "2",
    status: "active",
    dateHour: faker.date.recent(),
    command: [
      {
        drinks: [
          {
            name: "Cerveja Preta",
            amount: 2,
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
            amount: 3,
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
            amount: 5,
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
            amount: 1,
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
            amount: 1,
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
            amount: 1,
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
  } as Object);

  server.create("order", {
    id: "3",
    status: "active",
    code: "3",
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
            amount: 1,
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
            amount: 2,
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
            amount: 1,
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
            amount: 1,
            value: 20.0,
            date: faker.date.recent(),
          },
        ],
      },
    ],
  } as Object);

  server.create("order", {
    id: "4",
    code: "4",
    status: "active",
    dateHour: faker.date.recent(),
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
            amount: 5,
            value: 8.0,
            date: faker.date.recent(),
          },
          {
            name: "Refrigerante",
            amount: 1,
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
  } as Object);

  server.create("order", {
    id: "5",
    code: "5",
    status: "free",
    dateHour: faker.date.recent(),
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
  } as Object);

  server.create("order", {
    id: "6",
    code: "6",
    status: "closed",
    dateHour: faker.date.recent(),
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
  } as Object);

  server.create("order", {
    id: "7",
    code: "7",
    status: "active",
    dateHour: faker.date.recent(),
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
            amount: 5,
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
            amount: 1,
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
  } as Object);

  server.create("order", {
    id: "8",
    code: "8",
    status: "free",
    dateHour: faker.date.recent(),
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
  } as Object);

  server.create("order", {
    id: "9",
    code: "9",
    status: "closed",
    dateHour: faker.date.recent(),
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
  } as Object);

  server.create("order", {
    id: "10",
    code: "10",
    status: "active",
    dateHour: faker.date.recent(),
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
            amount: 2,
            value: 5.0,
            date: faker.date.recent(),
          },
          {
            name: "Água",
            amount: 1,
            value: 2.5,
            date: faker.date.recent(),
          },
          {
            name: "Suco",
            amount: 1,
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
            amount: 2,
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
            amount: 1,
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
            amount: 1,
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
  } as Object);
}
