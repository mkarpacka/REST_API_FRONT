import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccountComponent } from "./components/account/account.component";
import { AddAccountFormComponent } from "./components/add-account-form/add-account-form.component";
import { MakeTransferComponent } from "./components/make-transfer/make-transfer.component";

const routes: Routes = [
  { path: "accounts", component: AccountComponent },
  { path: "", redirectTo: "accounts", pathMatch: "full" },
  { path: "addaccount", component: AddAccountFormComponent },
  { path: "maketransfer", component: MakeTransferComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
