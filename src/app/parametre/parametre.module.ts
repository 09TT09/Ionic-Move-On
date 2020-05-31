import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParametrePageRoutingModule } from './parametre-routing.module';

import { ParametrePage } from './parametre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParametrePageRoutingModule
  ],
  declarations: [ParametrePage]
})
export class ParametrePageModule {}
