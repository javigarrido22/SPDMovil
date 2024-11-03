import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicio/api.service';
@Component({
  selector: 'app-listavehiculos',
  templateUrl: './listavehiculos.page.html',
  styleUrls: ['./listavehiculos.page.scss'],
})
export class ListavehiculosPage implements OnInit {

  constructor(private apiservice:ApiService) { }


  vehiculos:any[]=[]; 

  ngOnInit() {
    this.btnObtenerVehiculos();
  }

  async btnObtenerVehiculos(){
    this.vehiculos = await this.apiservice.obtenerVehiculo();
  }  


}
