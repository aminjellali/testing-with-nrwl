import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { E2eComponent } from './e2e/e2e.component';
import { ComparatorModule } from '@widgets-project/comparator';

@NgModule({
  declarations: [AppComponent, E2eComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, ComparatorModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
