import { Currency } from "./currency";
import { Transferstatus } from "./transferstatus.enum";

export class Transfer {
  id: number;
  firstAccount: Account;
  secondAccount: Account;
  money: number;
  currency: Currency;
  transferStatus: Transferstatus;
  transferStartedDate: Date;
  transferReceivedDate: Date;
}
