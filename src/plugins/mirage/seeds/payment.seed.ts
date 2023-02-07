/* eslint-disable @typescript-eslint/ban-types */
import type { Server } from "miragejs";

export default function (server: Server) {
  server.create("payment", {
    id: "2",
    total: 0,
    payments: [],
  });
  server.create("payment", {
    id: "3",
    total: 0,
    payments: [],
  });

  server.create("payment", {
    id: "4",
    total: 0,
    payments: [],
  });

  server.create("payment", {
    id: "5",
    total: 0,
    payments: [],
  });

  server.create("payment", {
    id: "6",
    total: 70,
    payments: [
      {
        date: new Date(),
        value: 20.0,
      },
      {
        date: new Date(),
        value: 50.0,
      },
    ],
  });

  server.create("payment", {
    id: "7",
    total: 0,
    payments: [],
  });

  server.create("payment", {
    id: "8",
    total: 0,
    payments: [],
  });

  server.create("payment", {
    id: "9",
    total: 95,
    payments: [
      {
        date: new Date(),
        value: 20.0,
      },
      {
        date: new Date(),
        value: 50.0,
      },
      {
        date: new Date(),
        value: 10.0,
      },
      {
        date: new Date(),
        value: 15.0,
      },
    ],
  });

  server.create("payment", {
    id: "10",
    total: 0,
    payments: [],
  });

  server.createList("payment", 1);
}
