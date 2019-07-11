import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccountComponent } from "./components/account/account.component";
import { AddAccountFormComponent } from "./components/add-account-form/add-account-form.component";
import { MakeTransferComponent } from "./components/make-transfer/make-transfer.component";
import { TransferListComponent } from "./components/transfer-list/transfer-list.component";
import { AccountDetailsComponent } from "./components/account-details/account-details.component";
import { EditAccountDetailsComponent } from "./components/edit-account-details/edit-account-details.component";

const routes: Routes = [
  { path: "accounts", component: AccountComponent },
  { path: "", redirectTo: "accounts", pathMatch: "full" },
  { path: "addaccount", component: AddAccountFormComponent },
  { path: "maketransfer", component: MakeTransferComponent },
  { path: "alltransfers", component: TransferListComponent },
  { path: "account/:id", component: AccountDetailsComponent },
  { path: "account/edit/:id", component: EditAccountDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
