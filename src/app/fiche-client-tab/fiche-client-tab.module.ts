import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FicheClientTabPageRoutingModule } from './fiche-client-tab-routing.module';

import { FicheClientTabPage } from './fiche-client-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FicheClientTabPageRoutingModule
  ],
  declarations: [FicheClientTabPage]
})
export class FicheClientTabPageModule {}
