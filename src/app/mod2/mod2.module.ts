import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Mod2Component } from './mod2.component';

@NgModule({
  declarations: [Mod2Component],
  imports: [CommonModule, FormsModule],
  exports: [Mod2Component],
})
export class Mod2Module {}
