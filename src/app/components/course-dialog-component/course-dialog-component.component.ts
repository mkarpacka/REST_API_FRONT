import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { TouchSequence } from "selenium-webdriver";

@Component({
  selector: "app-course-dialog-component",
  templateUrl: "./course-dialog-component.component.html",
  styleUrls: ["./course-dialog-component.component.css"]
})
export class CourseDialogComponentComponent implements OnInit {
  firstAccountNumber: string;
  secondAccountNumber: string;
  money: number;
  toSave: boolean;
  description: string[];

  constructor(
    private dialogRef: MatDialogRef<CourseDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.firstAccountNumber = data.firstAccountNumber;
    this.secondAccountNumber = data.secondAccountNumber;
    this.money = data.money;
  }

  ngOnInit() {}

  save() {
    this.toSave = true;
    this.dialogRef.close(this.toSave);
  }

  close() {
    this.toSave = false;
    this.dialogRef.close();
  }
}
