import type { MapItems } from "@/types/command";

export const WEEKDAY: Array<string> = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sabádo",
];

export const TYPE_FOOD: MapItems = {
  drinks: "Bebidas",
  foods: "Lanches",
  servings: "Porções",
  salads: "Saladas",
};

export const OPTIONS_SELECTED_CURRENCY: Array<{
  value: string;
  option: string;
}> = [
  {
    value: "BRL",
    option: "🇧🇷 R$ BRL 💵",
  },
  {
    value: "EUR",
    option: "🇪🇺 £ EUR 💶",
  },
  {
    value: "USD",
    option: "🇺🇸 $ USD 💴",
  },
];
