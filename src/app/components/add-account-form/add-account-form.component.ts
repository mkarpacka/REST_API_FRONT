import { Component, OnInit } from "@angular/core";
import { Account } from "src/app/models/account";
import { AccountService } from "src/app/services/account.service";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { Router } from "@angular/router";
import { Currency } from "src/app/models/currency";

@Component({
  selector: "app-add-account-form",
  templateUrl: "./add-account-form.component.html",
  styleUrls: ["./add-account-form.component.css"]
})
export class AddAccountFormComponent implements OnInit {
  accountToSave: Account;
  accountForm: FormGroup;
  selectedCurrency: Currency;

  roles: Currency[];
  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router
  ) {}

  get f() {
    return this.accountForm.controls;
  }

  ngOnInit() {
    this.accountForm = this.formBuilder.group({
      number: [
        "",
        [
          Validators.required,
          Validators.minLength(26),
          Validators.maxLength(26)
        ]
      ],
      money: ["", [Validators.required]],
      currency: ["", [Validators.required]],
      owner: ["", [Validators.required]]
    });
  }

  onSubmit() {
    const accountToSave = new Account();
    accountToSave.number = this.accountForm.value.number;
    accountToSave.money = this.accountForm.value.money;
    accountToSave.currency = this.accountForm.value.currency;
    accountToSave.owner = this.accountForm.value.owner;

    console.log(accountToSave.currency);
    // accountService.saveAccount(this.accountToSave);

    // setTimeout(() => {
    //   this.router.navigate(["/accounts/"]);
    // }, 1000);
  }
}
