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
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-add-account-form",
  templateUrl: "./add-account-form.component.html",
  styleUrls: ["./add-account-form.component.css"]
})
export class AddAccountFormComponent implements OnInit {
  accountForm: FormGroup;
  selectedCurrency: Currency;
  progressValue;
  roles: Currency[];
  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    private toastrService: ToastrService
  ) {
    this.accountForm = this.formBuilder.group({
      number: [
        "",
        [
          Validators.required,
          Validators.minLength(26),
          Validators.maxLength(26),
          Validators.pattern("^[0-9]*$")
        ]
      ],
      money: ["", [Validators.required]],
      currency: ["", [Validators.required]],
      owner: ["", [Validators.required]]
    });
  }

  ngOnInit() {
    this.progressValue = 0;
  }

  onSubmit() {
    if (this.accountForm.invalid) {
      this.toastrService.error("everything is broken", "Major Error", {
        timeOut: 3000
      });
      return;
    }

    const accountToSave = new Account();
    accountToSave.number = this.accountForm.value.number;
    accountToSave.money = this.accountForm.value.money;
    accountToSave.currency = this.accountForm.value.currency;
    accountToSave.owner = this.accountForm.value.owner;

    console.log(accountToSave.currency);
    this.accountService.saveAccount(accountToSave);

    setTimeout(() => {
      this.router.navigate(["/accounts"]);
    }, 1000);
  }
  public findInvalidControls() {
    let validControlsCounter = 0;
    const controls = this.accountForm.controls;
    for (const name in controls) {
      if (controls[name].valid) {
        validControlsCounter++;
      }
    }
    this.progressValue = (validControlsCounter / 4) * 100;
  }
}
