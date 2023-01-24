export type ItemPayments = {
  date: Date;
  value: number;
};

export type Payments = {
  id: string;
  total: number;
  payments: Array<ItemPayments>;
};
