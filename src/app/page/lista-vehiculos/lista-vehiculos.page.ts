import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicio/api.service';

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.page.html',
  styleUrls: ['./lista-vehiculos.page.scss'],
})
export class ListaVehiculosPage implements OnInit {

  constructor(private apiservice:ApiService) { }


  vehiculos:any[]=[]; 

  ngOnInit() {
    this.btnObtenerVehiculos();
  }

  async btnObtenerVehiculos(){
    console.log('boton')
    const req = await this.apiservice.obtenerVehiculo();
    this.vehiculos=req.data;
    console.log('data')
  }
  


}
