import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevisTabPage } from './devis-tab.page';

const routes: Routes = [
  {
    path: '',
    component: DevisTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevisTabPageRoutingModule {}
