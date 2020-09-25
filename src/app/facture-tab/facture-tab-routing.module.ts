import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FactureTabPage } from './facture-tab.page';

const routes: Routes = [
  {
    path: '',
    component: FactureTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactureTabPageRoutingModule {}
