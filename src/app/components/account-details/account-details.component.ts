import { Component, OnInit } from "@angular/core";
import { Account } from "src/app/models/account";
import { ActivatedRoute } from "@angular/router";
import { AccountService } from "src/app/services/account.service";
import { MakeTransferService } from "src/app/services/make-transfer.service";
import { Transfer } from "src/app/models/transfer";

@Component({
  selector: "app-account-details",
  templateUrl: "./account-details.component.html",
  styleUrls: ["./account-details.component.css"]
})
export class AccountDetailsComponent implements OnInit {
  account: Account;
  transfers: Transfer[];
  displayedColumns: string[] = [
    "From account",
    "To account",
    "balance",
    "currency",
    "transferStartedDate",
    "transferRecievedDate",
    "status"
  ];

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private transferService: MakeTransferService
  ) {}

  ngOnInit() {
    this.getAccount();
    this.getAllTransfers();
  }

  getAccount() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.accountService
      .getAccount(id)
      .subscribe(account => (this.account = account));
    console.log("account: " + this.accountService.getAccount(id));
  }

  getTransfers() {
    this.transferService.findAll().subscribe(data => {
      this.transfers = data;
    });
  }

  getAllTransfers() {
    const number = +this.route.snapshot.paramMap.get("id");
    this.transferService.getAccountTransfers(number).subscribe(data => {
      this.transfers = data;
    });
  }
}
