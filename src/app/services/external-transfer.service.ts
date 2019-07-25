import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ExternalTransfer } from "../models/external-transfer";
import { Observable } from "rxjs";
import { Transfer } from "../models/transfer";

@Injectable({
  providedIn: "root"
})
export class ExternalTransferService {
  private headersObject: HttpHeaders;
  private externalTransferService: ExternalTransfer;
  path = "/api/accounts/transfers/";

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastrService: ToastrService
  ) {}

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

  public makeExternalTransfer(externalTransfer: ExternalTransfer) {
    this.prepareHeader();

    return this.http
      .post<ExternalTransfer>(
        "/api/transfer/external-transfer",
        externalTransfer,
        {
          headers: this.headersObject
        }
      )
      .subscribe();
  }
}
