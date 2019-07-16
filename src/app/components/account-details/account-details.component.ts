import { Component, OnInit } from "@angular/core";
import { Account } from "src/app/models/account";
import { ActivatedRoute, Router } from "@angular/router";
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
  condition: boolean;
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
    private transferService: MakeTransferService,
    private router: Router
  ) {}

  ngOnInit() {
    this.condition = false;
    this.getAccount();
    this.getAllTransfers();
  }

  getAccount() {
    const id = this.route.snapshot.paramMap.get("id");
    this.accountService
      .getAccount(id)
      .subscribe(account => (this.account = account));
  }

  getTransfers() {
    this.transferService.findAll().subscribe(data => {
      this.transfers = data;
    });
  }

  getAllTransfers() {
    const number = this.route.snapshot.paramMap.get("id");
    this.transferService.getAccountTransfers(number).subscribe(data => {
      this.transfers = data;
      if (this.transfers.length <= 0) {
        this.condition = false;
      } else {
        this.condition = true;
      }
      console.log(this.condition);
    });
  }

  deleteAccount() {
    const number = +this.route.snapshot.paramMap.get("id");
    this.accountService.deletAccount(number);

    setTimeout(() => {
      this.router.navigate(["/accounts"]);
    }, 1000);
  }
}
