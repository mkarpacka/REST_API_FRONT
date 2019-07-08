import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccountComponent } from "./components/account/account.component";

const routes: Routes = [
  { path: "accounts", component: AccountComponent },
  { path: "", redirectTo: "accounts", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
