import { Component, OnInit } from "@angular/core";
import { Transfer } from "src/app/models/transfer";
import { AccountService } from "src/app/services/account.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MakeTransferService } from "src/app/services/make-transfer.service";
import { ToastrModule, ToastrService } from "ngx-toastr";

@Component({
  selector: "app-make-transfer",
  templateUrl: "./make-transfer.component.html",
  styleUrls: ["./make-transfer.component.css"]
})
export class MakeTransferComponent implements OnInit {
  transfers: Transfer[];
  transferForm: FormGroup;
  // transferService: MakeTransferService;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private transferService: MakeTransferService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.transferForm = this.formBuilder.group({
      firstNumber: [
        "",
        [
          Validators.required,
          Validators.minLength(26),
          Validators.maxLength(26),
          Validators.pattern("^[0-9]*$")
        ]
      ],
      secondNumber: [
        "",
        [
          Validators.required,
          Validators.minLength(26),
          Validators.maxLength(26),
          Validators.pattern("^[0-9]*$")
        ]
      ],
      money: ["", [Validators.required, Validators.pattern("^[0-9.]*$")]]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.transferForm.invalid) {
      this.toastr.error("everything is broken", "Major Error", {
        timeOut: 3000
      });
      return;
    }
    const transferToMake = new Transfer();
    transferToMake.firstAccountNumber = this.transferForm.value.firstNumber;
    transferToMake.secondAccountNumber =
      "" + this.transferForm.value.secondNumber;
    transferToMake.money = this.transferForm.value.money;

    this.transferService.transferMoney(
      transferToMake.firstAccountNumber,
      transferToMake.secondAccountNumber,
      transferToMake.money
    );
  }
}
