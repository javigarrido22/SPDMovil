import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ApiService } from 'src/app/servicio/api.service';
import { FirebaseService } from 'src/app/servicio/firebase.service';
import { StorageService } from 'src/app/servicio/storage.service';
import { UserModel } from 'src/app/models/usuario';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  email:string="";
  usuario:UserModel[]=[];
  vehiculos:any[]=[]; 

  /*number=0 en caso de que sean solo numeros*/


  constructor(private firebase:FirebaseService, private router:Router, private AlertController:AlertController, private activate:ActivatedRoute, private storage:StorageService, private apiservice:ApiService) {
    this.activate.queryParams.subscribe(params => {

      this.email=params['email'];
      console.log(this.email)
      //console.log(this.email, this.pass, this.valor);
    });

   }

   ngOnInit() {
    this.cargarUsuario();
  }

  async logout(){
    await this.firebase.logout();
    this.router.navigateByUrl("login");
  }

  async obtenerVehiculo(){
    let dataStorage = await this.storage.obtenerStorage();
    const vehiculos = await this.apiservice.obtenerVehiculo(
      {
        p_id: this.usuario[0].id_usuario,
        token: dataStorage[0].token
      }
    );
    console.log("DATA Obt. v Principal", vehiculos);
    if (vehiculos.data.length > 0) {
      const navigationExtras: NavigationExtras = {
        queryParams: {email: this.email}
      };
      this.router.navigate(['/lista-vehiculo'], navigationExtras);
    }else{
      this.popAlertNoVehiculos();
    }
  }

  async RegistrarVehiculo(){
    const navigationExtras: NavigationExtras = {
      queryParams: {email: this.email},
    };
    this.router.navigate(['/agregar-vehiculo'])
  }

  async RegistrarViajes(){
    let dataStorage = await this.storage.obtenerStorage();
    const vehiculos = await this.apiservice.obtenerVehiculo(
      {
        p_id: this.usuario[0].id_usuario,
        token: dataStorage[0].token
      }
    );
    console.log("DATA Obt. v Principal", vehiculos);
    if (vehiculos.data.length > 0) {
      const navigationExtras: NavigationExtras = {
        queryParams: {email: this.email}
      };
      this.router.navigate(['/viajes'], navigationExtras);
    }else{
      this.popAlertNoVehiculos();
    }
  }

  async cargarViajes() {
    let dataStorage = await this.apiservice.obtenerViaje();
  }

  async cargarUsuario(){
    let dataStorage = await this.storage.obtenerStorage();
    const req = await this.apiservice.obtenerUsuario(
      {
        p_correo:this.email,
        token:dataStorage[0].token
      }
    );
    this.usuario = req.data
    console.log("Datos inicio usuario ", this.usuario);
  }

  async btnRegistrarVehiculo(){
    const navigationExtras:NavigationExtras = {
      queryParams: {email: this.email}
    };
    this.router.navigate(['/agregar-vehiculo'], navigationExtras);
  }

  async btnObtenerVehiculos(){
    this.vehiculos = await this.apiservice.obtenerVehiculo();
  };
  
  async popAlertNoVehiculos(){
    const alert = await this.AlertController.create({
      header: 'Error',
      message: 'No existen vehiculos registrados',
      buttons: ['OK']
    })
    await alert.present();
  }

}