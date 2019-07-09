import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AccountComponent } from "./components/account/account.component";
import { AccountService } from "./services/account.service";
import { HttpClientModule } from "@angular/common/http";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import {
  MatMenuModule,
  MatIconModule,
  MatTableModule
} from "@angular/material";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { AddAccountFormComponent } from "./components/add-account-form/add-account-form.component";
import { MakeTransferComponent } from "./components/make-transfer/make-transfer.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSelectModule } from "@angular/material/select";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NavBarComponent,
    AddAccountFormComponent,
    MakeTransferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule {}
