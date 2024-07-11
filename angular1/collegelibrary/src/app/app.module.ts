import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import {HttpClientModule} from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule,} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ErrorpageComponent,
    TableComponent,
    RegistrationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
