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
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [AppComponent, AccountComponent, NavBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule {}
