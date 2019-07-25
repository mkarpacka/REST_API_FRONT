import { Component, OnInit } from "@angular/core";
import { AccountService } from "src/app/services/account.service";
import { Account } from "src/app/models/account";
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"]
})
export class AccountComponent implements OnInit {
  accounts;
  displayedColumns: string[] = [
    "number",
    "balance",
    "currency",
    "owner",
    "details"
  ];
  expandedElement: any;
  isVisible: boolean;

  constructor(private accountService: AccountService, private router: Router) {
    this.isVisible = false;
  }

  ngOnInit() {
    this.accountService.findAll().subscribe(data => {
      this.accounts = new MatTableDataSource(data);
    });
  }

  applyFilter(filterValue: string) {
    this.accounts.filter = filterValue.trim().toLowerCase();
  }

  onRowClick(account) {
    console.log("row clicked " + account.owner);
    this.router.navigateByUrl("/alltransfers");
  }

  startLoadingSpinner() {
    this.isVisible = true;
    setTimeout(() => {
      this.isVisible = false;
    }, 2000);
  }
}
