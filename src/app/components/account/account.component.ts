import { Component, OnInit } from "@angular/core";
import { AccountService } from "src/app/services/account.service";
import { Account } from "src/app/models/account";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"]
})
export class AccountComponent implements OnInit {
  accounts: Account[];
  displayedColumns: string[] = ["number", "balance", "currency", "owner"];

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accountService.findAll().subscribe(data => {
      this.accounts = data;
    });
  }

  onRowClick() {
    console.log("row clicked");
  }
}
