import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccountComponent } from "./components/account/account.component";
import { AddAccountFormComponent } from "./components/add-account-form/add-account-form.component";
import { MakeTransferComponent } from "./components/make-transfer/make-transfer.component";
import { AccountDetailsComponent } from "./components/account-details/account-details.component";
import { EditAccountDetailsComponent } from "./components/edit-account-details/edit-account-details.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { ExternalTransferComponent } from "./components/external-transfer/external-transfer.component";

const routes: Routes = [
  { path: "accounts", component: AccountComponent },
  { path: "home", component: LandingPageComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "addaccount", component: AddAccountFormComponent },
  { path: "maketransfer", component: MakeTransferComponent },
  { path: "account/:id", component: AccountDetailsComponent },
  { path: "account/edit/:id", component: EditAccountDetailsComponent },
  { path: "external-transfer", component: ExternalTransferComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
