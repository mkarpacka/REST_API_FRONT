import { Component, OnInit } from "@angular/core";
import { Transfer } from "src/app/models/transfer";
import { MakeTransferService } from "src/app/services/make-transfer.service";

@Component({
  selector: "app-transfer-list",
  templateUrl: "./transfer-list.component.html",
  styleUrls: ["./transfer-list.component.css"]
})
export class TransferListComponent implements OnInit {
  transfers: Transfer[];
  constructor(private makeTransferService: MakeTransferService) {}

  ngOnInit() {
    this.makeTransferService.findAll().subscribe(data => {
      this.transfers = data;
    });
  }
}
