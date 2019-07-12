import { Component, OnInit } from "@angular/core";
import { AccountService } from "src/app/services/account.service";
import { ActivatedRoute } from "@angular/router";
import { Account } from "src/app/models/account";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-edit-account-details",
  templateUrl: "./edit-account-details.component.html",
  styleUrls: ["./edit-account-details.component.css"]
})
export class EditAccountDetailsComponent implements OnInit {
  account: Account;
  acccountToUpdate: Account;
  newOwner: string;

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.getAccount();
  }

  updateAccount() {
    const id = +this.route.snapshot.paramMap.get("id");
    if (this.newOwner != null) {
      this.account.owner = this.newOwner;
      console.log(id);
      this.accountService.updateAccount(id, this.account);
    }
  }

  getAccount() {
    const id = this.route.snapshot.paramMap.get("id");
    this.accountService
      .getAccount(id)
      .subscribe(account => (this.account = account));
  }
}
