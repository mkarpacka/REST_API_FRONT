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
  path = "/api/accounts/";

  prepareHeader() {
    this.headersObject = new HttpHeaders();
    this.headersObject.append("Content-Type", "application/json");
    this.headersObject.append(
      "Authorization",
      "Basic " + btoa("user:password")
    );
  }

  constructor(private http: HttpClient) {}

  public findAll(): Observable<Account[]> {
    this.prepareHeader();
    return this.http.get<Account[]>(this.path, {
      headers: this.headersObject
    });
  }

  public getAccount(accountNumber: number): Observable<Account> {
    this.prepareHeader();
    const completePath = this.path + "/get-account/" + accountNumber;
    return this.http.get<Account>(completePath, {
      headers: this.headersObject
    });
  }

  // public save(user: Account) {
  //   return this.http.post<Account>(this.accountsUrl, user);
  // }
}
