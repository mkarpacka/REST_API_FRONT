import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Account } from "../models/account";
import { Observable } from "rxjs";
import { Transfer } from "../models/transfer";
import { AccountService } from "./account.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

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
  constructor(
    private http: HttpClient,
    private router: Router,
    private toastrService: ToastrService
  ) {}

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

  public getOutgoingAccountTransfers(
    accountNumber: string
  ): Observable<Transfer[]> {
    const completePath = this.path + "outgoing/" + accountNumber;
    return this.http.get<Transfer[]>(completePath, {
      headers: this.headersObject
    });
  }

  public getIncomingAccountTransfers(
    accountNumber: string
  ): Observable<Transfer[]> {
    const completePath = this.path + "incoming/" + accountNumber;
    return this.http.get<Transfer[]>(completePath, {
      headers: this.headersObject
    });
  }

  public transferMoney(
    accountNumberFrom: string,
    accountNumberTo: string,
    money: number
  ) {
    this.prepareHeader();
    if (accountNumberFrom != accountNumberTo) {
      this.http
        .put(
          "api/accounts/transfer/" +
            accountNumberFrom +
            "/" +
            accountNumberTo +
            "/" +
            money,
          { headers: this.headersObject }
        )
        .toPromise()
        .then((res: Response) => {
          this.toastrService.success("Transfer has been made.");
        })
        .catch(error => {
          if (
            error instanceof HttpErrorResponse &&
            (error.status === 404 || error.status === 409)
          ) {
            if (error.status === 404) {
              this.toastrService.error(
                "Account number not found! Transfer has not been made."
              );
            } else if (error.status === 409) {
              this.toastrService.error(
                "Not enough money! Transfer has not been made."
              );
            }
          }
        })
        .catch((res: Response) => {
          this.toastrService.success("Error! Transfer has not been made.");
        });
    } else {
      this.toastrService.error("Account numbers are the same");
    }
  }
}
