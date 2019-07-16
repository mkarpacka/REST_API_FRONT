import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { TouchSequence } from "selenium-webdriver";
import { AccountService } from "src/app/services/account.service";
import { Account } from "src/app/models/account";
import { ToastrService } from "ngx-toastr";
import { HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { EMPTY } from "rxjs";

@Component({
  selector: "app-course-dialog-component",
  templateUrl: "./course-dialog-component.component.html",
  styleUrls: ["./course-dialog-component.component.css"]
})
export class CourseDialogComponentComponent implements OnInit {
  firstAccountNumber: string;
  secondAccountNumber: string;
  firstAccount: Account;
  secondAccount: Account;
  money: number;
  toSave: boolean;
  description: string[];

  constructor(
    private dialogRef: MatDialogRef<CourseDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private accountService: AccountService,
    private toastr: ToastrService
  ) {
    this.firstAccountNumber = data.firstAccountNumber;
    this.secondAccountNumber = data.secondAccountNumber;
    this.money = data.money;
  }

  ngOnInit() {
    this.checkIfAccountsExist();
  }

  checkIfAccountsExist() {
    this.accountService
      .getAccount(this.firstAccountNumber)
      .pipe(
        catchError(err => {
          if (err.status === 404) {
            this.close();
            this.toastr.error(
              "First account does not exist",
              "Cannot make transfer",
              {
                timeOut: 5000
              }
            );
            return EMPTY;
          }
        })
      )
      .subscribe(account => {
        this.firstAccount = account;
      });

    this.accountService
      .getAccount(this.secondAccountNumber)
      .pipe(
        catchError(err => {
          if (err.status === 404) {
            this.close();
            this.toastr.error(
              "Second account number does not exist",
              "Cannot make transfer",
              {
                timeOut: 5000
              }
            );
            return EMPTY;
          }
        })
      )
      .subscribe(account => {
        this.secondAccount = account;
      });
  }

  save() {
    this.toSave = true;
    this.dialogRef.close(this.toSave);
  }

  close() {
    this.toSave = false;
    this.dialogRef.close();
  }
}
