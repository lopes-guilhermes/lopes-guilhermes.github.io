import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GltButtonComponent } from './glt-button/glt-button.component';



@NgModule({
  declarations: [
    GltButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GltButtonComponent
  ]
})
export class SharedModule { }
