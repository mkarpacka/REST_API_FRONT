import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Account } from "../models/account";
import { stringify } from "@angular/compiler/src/util";
import { Route, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { EMPTY, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

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

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  public findAll(): Observable<Account[]> {
    this.prepareHeader();
    const completePath = this.path + "/accounts";
    return this.http.get<Account[]>(completePath, {
      headers: this.headersObject
    });
  }

  public getAccount(accountNumber: string): Observable<Account> {
    this.prepareHeader();
    const completePath = this.path + "/accounts/get-account/" + accountNumber;
    return this.http
      .get<Account>(completePath, {
        headers: this.headersObject
      })
      .pipe(
        catchError(err => {
          if (err.status === 404) {
            return throwError(err);
          }
        })
      );
  }

  public saveAccount(account: Account) {
    this.prepareHeader();
    const completePath = this.path + "/accounts/add";

    return this.http
      .post<Account>(completePath, account, {
        headers: this.headersObject
      })
      .subscribe();
  }

  public updateAccount(accountNumber: string, account: Account) {
    this.prepareHeader();

    return this.http
      .put("/api/accounts/update/" + accountNumber, account, {
        headers: this.headersObject
      })
      .subscribe();
  }

  public deletAccount(accountNumber: string) {
    this.prepareHeader();
    const completePath = this.path + "/accounts/delete/" + accountNumber;
    return this.http
      .delete<Account>(completePath, {
        headers: this.headersObject
      })
      .subscribe(a => a);
  }
}
