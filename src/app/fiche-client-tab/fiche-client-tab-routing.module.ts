import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FicheClientTabPage } from './fiche-client-tab.page';

const routes: Routes = [
  {
    path: 'client',
    component: FicheClientTabPage,
    children: [
      {
        path: 'factures',
        loadChildren: () => import('../facture-tab/facture-tab.module').then(m => m.FactureTabPageModule)
      },
      {
        path: 'devis',
        loadChildren: () => import('../devis-tab/devis-tab.module').then(m => m.DevisTabPageModule)
      },
      {
        path: '/fiche',
        redirectTo: '/fiche/client/factures',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '/fiche',
    redirectTo: '/fiche/client/factures',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FicheClientTabPageRoutingModule {}
