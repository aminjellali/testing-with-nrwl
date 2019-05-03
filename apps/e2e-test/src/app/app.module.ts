import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { extendedFunc } from './../../../../libs/my-utils/src'; //libs/e2e-component-utils/src/index.ts;

import { AppComponent } from './app.component';
import { E2eComponent } from './e2e/e2e.component';

@NgModule({
  declarations: [AppComponent, E2eComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
