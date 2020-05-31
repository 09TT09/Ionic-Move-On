import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParametrePage } from './parametre.page';

const routes: Routes = [
  {
    path: '',
    component: ParametrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParametrePageRoutingModule {}
