import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartagePageRoutingModule } from './partage-routing.module';

import { PartagePage } from './partage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartagePageRoutingModule
  ],
  declarations: [PartagePage]
})
export class PartagePageModule {}
