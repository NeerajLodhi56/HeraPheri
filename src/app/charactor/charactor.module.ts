import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BabuComponent } from './babu/babu.component';
import { RajuComponent } from './raju/raju.component';
import { ShamComponent } from './sham/sham.component';



@NgModule({
  declarations: [
    BabuComponent,
    RajuComponent,
    ShamComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BabuComponent,
    RajuComponent, 
    ShamComponent
  ]
})
export class CharactorModule { }
