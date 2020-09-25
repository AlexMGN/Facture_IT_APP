import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevisTabPageRoutingModule } from './devis-tab-routing.module';

import { DevisTabPage } from './devis-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevisTabPageRoutingModule
  ],
  declarations: [DevisTabPage]
})
export class DevisTabPageModule {}
