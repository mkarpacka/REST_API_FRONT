import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Account } from "../models/account";
import { Observable } from "rxjs";
import { Transfer } from "../models/transfer";

@Injectable({
  providedIn: "root"
})
export class MakeTransferService {
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

  public findAll(): Observable<Transfer[]> {
    this.prepareHeader();
    return this.http.get<Transfer[]>("/api/accounts/transfers", {
      headers: this.headersObject
    });
  }
}