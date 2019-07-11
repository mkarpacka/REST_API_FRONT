import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Account } from "../models/account";
import { Observable } from "rxjs";
import { Transfer } from "../models/transfer";
import { AccountService } from "./account.service";

@Injectable({
  providedIn: "root"
})
export class MakeTransferService {
  private headersObject: HttpHeaders;
  private accountService: AccountService;
  private accountWithId: Account;
  path = "/api/accounts/transfers/";

  prepareHeader() {
    this.headersObject = new HttpHeaders();
    this.headersObject.append("Content-Type", "application/json");
    this.headersObject.append(
      "Authorization",
      "Basic " + btoa("user:password")
    );
  }
  constructor(private http: HttpClient) {}

  public findAll(): Observable<Transfer[]> {
    this.prepareHeader();
    return this.http.get<Transfer[]>(this.path, {
      headers: this.headersObject
    });
  }

  public getAccountTransfers(accountNumber: string): Observable<Transfer[]> {
    const completePath = this.path + accountNumber;
    return this.http.get<Transfer[]>(completePath, {
      headers: this.headersObject
    });
  }

  public transferMoney(
    firstAccountNumber: string,
    secondAccountNumber: string,
    money: number
  ): Observable<Transfer[]> {
    const completePath =
      "/api/accounts/transfer/" +
      firstAccountNumber +
      "/" +
      secondAccountNumber +
      "/" +
      money;
    console.log(completePath);
    return this.http.put<Transfer[]>(completePath, {
      headers: this.headersObject
    });
  }
}
