import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Account } from "../models/account";
import { Observable } from "rxjs";
import { stringify } from "@angular/compiler/src/util";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  private headersObject: HttpHeaders;
  path = "/api";

  prepareHeader() {
    this.headersObject = new HttpHeaders();
    this.headersObject.append("Content-Type", "application/json");
    this.headersObject.append(
      "Authorization",
      "Basic " + btoa("user:password")
    );
    this.headersObject.append("Access-Control-Allow-Origin", "*");
    this.headersObject.append(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
  }

  constructor(private http: HttpClient) {}

  public findAll(): Observable<Account[]> {
    this.prepareHeader();
    const completePath = this.path + "/accounts";
    return this.http.get<Account[]>(completePath, {
      headers: this.headersObject
    });
  }

  public getAccount(accountNumber: number): Observable<Account> {
    this.prepareHeader();
    const completePath = this.path + "/accounts/get-account/" + accountNumber;
    return this.http.get<Account>(completePath, {
      headers: this.headersObject
    });
  }

  public saveAccount(account: Account) {
    this.prepareHeader();
    const completePath = this.path + "/accounts/add";
    return this.http
      .post<Account>("/api/accounts/add", account, {
        headers: this.headersObject
      })
      .subscribe();
  }
}
