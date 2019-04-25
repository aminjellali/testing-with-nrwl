import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { ComparatorModule } from '@widgets-project/comparator';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule,
    ComparatorModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
