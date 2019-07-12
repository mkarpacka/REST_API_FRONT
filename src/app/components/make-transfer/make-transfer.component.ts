import { Component, OnInit } from "@angular/core";
import { Transfer } from "src/app/models/transfer";
import { AccountService } from "src/app/services/account.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MakeTransferService } from "src/app/services/make-transfer.service";

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
    private router: Router
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
      money: ["", [Validators.required]]
    });
  }

  ngOnInit() {}

  onSubmit() {
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
