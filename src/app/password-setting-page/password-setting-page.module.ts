import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordSettingPagePageRoutingModule } from './password-setting-page-routing.module';

import { PasswordSettingPagePage } from './password-setting-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordSettingPagePageRoutingModule
  ],
  declarations: [PasswordSettingPagePage]
})
export class PasswordSettingPagePageModule {}
