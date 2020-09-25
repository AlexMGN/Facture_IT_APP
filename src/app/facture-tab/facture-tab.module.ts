import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FactureTabPageRoutingModule } from './facture-tab-routing.module';

import { FactureTabPage } from './facture-tab.page';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    FactureTabPageRoutingModule
  ],
  declarations: [FactureTabPage]
})
export class FactureTabPageModule {}
