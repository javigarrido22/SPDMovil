import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregaVehiculoPage } from './agrega-vehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: AgregaVehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregaVehiculoPageRoutingModule {}
