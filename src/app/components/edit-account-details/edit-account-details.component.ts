import { Component, OnInit } from "@angular/core";
import { AccountService } from "src/app/services/account.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Account } from "src/app/models/account";
import { FormsModule } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

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
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getAccount();
  }

  updateAccount() {
    const id = +this.route.snapshot.paramMap.get("id");
    if (this.newOwner != null) {
      this.account.owner = this.newOwner;
      this.accountService.updateAccount(id, this.account);
      this.router.navigateByUrl("/account/" + this.account.number);
      this.toastr.success("Account details changed");
    }
  }

  getAccount() {
    const id = this.route.snapshot.paramMap.get("id");
    this.accountService
      .getAccount(id)
      .subscribe(account => (this.account = account));
  }
}
