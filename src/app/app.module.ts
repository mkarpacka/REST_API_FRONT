import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
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
import {
  BrowserAnimationsModule,
  NoopAnimationsModule
} from "@angular/platform-browser/animations";
import { MatSelectModule } from "@angular/material/select";
import { MatCardModule } from "@angular/material/card";
import { TransferListComponent } from "./components/transfer-list/transfer-list.component";
import { AccountDetailsComponent } from "./components/account-details/account-details.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MakeTransferService } from "./services/make-transfer.service";
import { EditAccountDetailsComponent } from "./components/edit-account-details/edit-account-details.component";
import { ToastrModule } from "ngx-toastr";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { registerLocaleData } from "@angular/common";
import localePl from "@angular/common/locales/pl";
registerLocaleData(localePl);
@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NavBarComponent,
    AddAccountFormComponent,
    MakeTransferComponent,
    TransferListComponent,
    AccountDetailsComponent,
    EditAccountDetailsComponent
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
    MatCardModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatProgressSpinnerModule
  ],
  providers: [
    AccountService,
    MakeTransferService,
    { provide: LOCALE_ID, useValue: "pl-PL" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
