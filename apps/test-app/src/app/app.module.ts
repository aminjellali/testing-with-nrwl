import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { ComparatorModule } from './../../../../libs/comparator/src/lib/comparator.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    ComparatorModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
