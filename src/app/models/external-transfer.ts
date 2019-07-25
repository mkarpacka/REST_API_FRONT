import { Currency } from "./currency";

export class ExternalTransfer {
  id: number;
  externalAccount: string;
  toAccount: string;
  amount: number;
  currency: Currency;
  bankName: string;
}
