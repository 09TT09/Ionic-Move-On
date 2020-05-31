import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartagePage } from './partage.page';

const routes: Routes = [
  {
    path: '',
    component: PartagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartagePageRoutingModule {}
