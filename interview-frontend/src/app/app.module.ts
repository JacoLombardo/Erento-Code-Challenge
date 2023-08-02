import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CityFormComponent } from './city-form/city-form.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  declarations: [AppComponent, CityFormComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
