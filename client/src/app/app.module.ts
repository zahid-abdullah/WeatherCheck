import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WeatherInfoComponent } from './weatherInfo/weatherInfo.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";  

@NgModule({
  declarations: [
    AppComponent,
    WeatherInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    NgxSpinnerModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
