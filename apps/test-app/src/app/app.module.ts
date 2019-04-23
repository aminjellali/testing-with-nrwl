import { ComparatorModule } from './../../../../libs/comparator/src/lib/comparator.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    ComparatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
