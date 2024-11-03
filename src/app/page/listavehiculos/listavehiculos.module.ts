import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListavehiculosPageRoutingModule } from './listavehiculos-routing.module';

import { ListavehiculosPage } from './listavehiculos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListavehiculosPageRoutingModule
  ],
  declarations: [ListavehiculosPage]
})
export class ListavehiculosPageModule {}
