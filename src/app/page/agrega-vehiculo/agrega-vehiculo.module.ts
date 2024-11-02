import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregaVehiculoPageRoutingModule } from './agrega-vehiculo-routing.module';

import { AgregaVehiculoPage } from './agrega-vehiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregaVehiculoPageRoutingModule
  ],
  declarations: [AgregaVehiculoPage]
})
export class AgregaVehiculoPageModule {}
