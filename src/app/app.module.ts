import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AccountComponent } from "./components/account/account.component";
import { AccountService } from "./services/account.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, AccountComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule {}
