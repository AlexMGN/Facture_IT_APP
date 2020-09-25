import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordSettingPagePage } from './password-setting-page.page';

const routes: Routes = [
  {
    path: '',
    component: PasswordSettingPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordSettingPagePageRoutingModule {}
