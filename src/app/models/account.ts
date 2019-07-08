import { Currency } from "./currency";

export class Account {
  id: number;
  number: string;
  money: number;
  currency: Currency;
  owner: string;
}
