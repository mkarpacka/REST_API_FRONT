import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Account } from "../models/account";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  private headersObject: HttpHeaders;

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
    return this.http.get<Account[]>("/api/accounts", {
      headers: this.headersObject
    });
  }

  // public save(user: Account) {
  //   return this.http.post<Account>(this.accountsUrl, user);
  // }
}
