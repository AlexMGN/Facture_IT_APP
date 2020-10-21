import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'home',
    component: TabsPage,
    children: [
      {
        path: 'professionnel',
        loadChildren: () => import('../professionel-tab/professionnel.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'particulier',
        loadChildren: () => import('../particulier-tab/particulier.module').then(m => m.Tab2PageModule)
      },
      {
        path: '/me',
        redirectTo: '/me/home/professionnel',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '/me',
    redirectTo: '/me/home/professionnel',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
