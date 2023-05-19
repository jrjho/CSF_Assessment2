import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputUploadDetailsComponent } from './components/input-upload-details/input-upload-details.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayResultsComponent } from './components/display-results/display-results.component';


@NgModule({
  declarations: [
    AppComponent,
    InputUploadDetailsComponent,
    DisplayResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
