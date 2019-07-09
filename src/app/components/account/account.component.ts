import { Component, OnInit } from "@angular/core";
import { AccountService } from "src/app/services/account.service";
import { Account } from "src/app/models/account";
import { Router } from "@angular/router";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"]
})
export class AccountComponent implements OnInit {
  accounts: Account[];
  displayedColumns: string[] = [
    "number",
    "balance",
    "currency",
    "owner",
    "details"
  ];
  expandedElement: any;

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit() {
    this.accountService.findAll().subscribe(data => {
      this.accounts = data;
    });
  }

  onRowClick(account) {
    console.log("row clicked " + account.owner);
    this.router.navigateByUrl("/alltransfers");
  }
}
