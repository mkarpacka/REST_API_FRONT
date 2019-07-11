import { Currency } from "./currency";
import { Transferstatus } from "./transferstatus.enum";

export class Transfer {
  id: number;
  firstAccountNumber: string;
  secondAccountNumber: string;
  money: number;
  currency: Currency;
  transferStatus: Transferstatus;
  transferStartedDate: Date;
  transferRecievedDate: Date;
}
