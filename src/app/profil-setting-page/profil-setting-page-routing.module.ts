import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilSettingPagePage } from './profil-setting-page.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilSettingPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilSettingPagePageRoutingModule {}
