import { Component, OnInit } from "@angular/core";
import { Transfer } from "src/app/models/transfer";

@Component({
  selector: "app-make-transfer",
  templateUrl: "./make-transfer.component.html",
  styleUrls: ["./make-transfer.component.css"]
})
export class MakeTransferComponent implements OnInit {
  transfers: Transfer[];
  constructor() {}

  ngOnInit() {}
}
