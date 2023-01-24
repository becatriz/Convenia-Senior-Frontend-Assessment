export type TypeItems = {
  amount: number;
  name: string;
  value: number;
  date?: string;
};

export type Drinks = TypeItems;

export type Foods = TypeItems;

export type Servings = TypeItems;

export type Salads = TypeItems;

export type Command = {
  payments?: number;
  drinks: Array<Drinks>;
  foods: Array<Foods>;
  servings: Array<Servings>;
  salads: Array<Salads>;
};

export type Items = {
  dateHour: string;
  code: string;
  status: string;
  command: Array<Command>;
};

export type MapItems = {
  drinks: string;
  foods: string;
  servings: string;
  salads: string;
};
