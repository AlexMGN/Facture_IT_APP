import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilSettingPagePageRoutingModule } from './profil-setting-page-routing.module';

import { ProfilSettingPagePage } from './profil-setting-page.page';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ProfilSettingPagePageRoutingModule
  ],
  declarations: [ProfilSettingPagePage]
})
export class ProfilSettingPagePageModule {}
