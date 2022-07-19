import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// primNg
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';


@NgModule({
  exports: [
    CommonModule,
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    
  ]
})
export class PrimeNgModule { }
