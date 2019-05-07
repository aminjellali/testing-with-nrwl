import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TogglableMenuComponent } from './togglable-menu/togglable-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  declarations: [TogglableMenuComponent],
  exports: [TogglableMenuComponent]
})
export class ComparatorModule {}
