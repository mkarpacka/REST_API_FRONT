import { Component, OnInit } from "@angular/core";
import { Transfer } from "src/app/models/transfer";
import { AccountService } from "src/app/services/account.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MakeTransferService } from "src/app/services/make-transfer.service";
import { ToastrModule, ToastrService } from "ngx-toastr";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { CourseDialogComponentComponent } from "../course-dialog-component/course-dialog-component.component";
import { ExternalTransfer } from "src/app/models/external-transfer";
import { ExternalTransferService } from "src/app/services/external-transfer.service";
import { Currency } from "src/app/models/currency";

@Component({
  selector: "app-external-transfer",
  templateUrl: "./external-transfer.component.html",
  styleUrls: ["./external-transfer.component.css"]
})
export class ExternalTransferComponent implements OnInit {
  transfers: Transfer[];
  transferForm: FormGroup;
  toAccountTemplate: string;

  constructor(
    private formBuilder: FormBuilder,
    private externalTransferService: ExternalTransferService,
    private transferService: MakeTransferService,
    private router: Router,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {
    this.transferForm = this.formBuilder.group({
      externalAccount: [
        "",
        [
          Validators.required,
          Validators.minLength(26),
          Validators.maxLength(26),
          Validators.pattern("^[0-9]*$")
        ]
      ],
      toAccount: [
        "",
        [
          Validators.required,
          Validators.minLength(26),
          Validators.maxLength(26),
          Validators.pattern("^[0-9]*$")
        ]
      ],
      amount: [
        "",
        [Validators.required, Validators.pattern("^[0-9]*([.][0-9]{1,2})?$")]
      ]
    });
    this.toAccountTemplate = "12345678901234567890123451";
  }

  ngOnInit() {}

  onSubmit() {
    const externalTransferToMake = new ExternalTransfer();
    externalTransferToMake.externalAccount = this.transferForm.value.externalAccount;
    externalTransferToMake.toAccount = this.toAccountTemplate;
    externalTransferToMake.amount = this.transferForm.value.amount;
    externalTransferToMake.bankName = "Magda72";
    externalTransferToMake.currency = Currency.PLN;
    console.log(
      externalTransferToMake.externalAccount +
        " " +
        externalTransferToMake.toAccount +
        " " +
        externalTransferToMake.amount
    );

    this.externalTransferService.makeExternalTransfer(externalTransferToMake);
  }
}
