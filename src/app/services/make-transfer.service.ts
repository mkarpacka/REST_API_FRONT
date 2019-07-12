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

  // public transferMoney(
  //   firstAccountNumber: string,
  //   secondAccountNumber: string,
  //   money: number
  // ): Observable<Transfer[]> {
  //   const completePath =
  //     "/api/accounts/transfer/" +
  //     firstAccountNumber +
  //     "/" +
  //     secondAccountNumber +
  //     "/" +
  //     money;
  //   console.log(completePath);
  //   return this.http.put<Transfer[]>(completePath, {
  //     headers: this.headersObject
  //   });
  // }

  public transferMoney(
    accountNumberFrom: string,
    accountNumberTo: string,
    money: number
  ) {
    this.prepareHeader();

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
        this.toastrService.success("Wykonano przelew");
      })
      .catch(error => {
        if (
          error instanceof HttpErrorResponse &&
          (error.status === 404 || error.status === 409)
        ) {
          if (error.status === 404) {
            this.toastrService.error(
              "Nie znaleziono nr konta! Nie wykonano przelewu"
            );
          } else if (error.status === 409) {
            this.toastrService.error(
              "Za mało środków na koncie! Nie wykonano przelewu"
            );
          }
        }
      })
      .catch((res: Response) => {
        this.toastrService.success("Nieznany błąd! Nie wykonano przelewu");
      });
  }
}
