import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ApiService } from 'src/app/servicio/api.service';
import { FirebaseService } from 'src/app/servicio/firebase.service';
import { StorageService } from 'src/app/servicio/storage.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  email:string="";
  usuario:userModel[]=[];
  /*number=0 en caso de que sean solo numeros*/

  constructor(private firebase:FirebaseService, private router:Router, private activate:ActivatedRoute, private storage:StorageService, private apiservice:ApiService) {
    this.activate.queryParams.subscribe(params => {

      this.email=params['email'];
      console.log(this.email)
      //console.log(this.email, this.pass, this.valor);
    });

   }

   ngOnInit() {
    this.cargarUser();
  }

  async logout(){
    await this.firebase.logout();
    this.router.navigateByUrl("login");
  }

  async cargarUser(){
    let dataStorage = await this.storage.obtenerStorage();
    const req = await this.apiservice.obtenerUsuario(
      {
        p_correo: this.email,
        token:dataStorage[0].token
      }
    );
    this.usuario = req.data;
    console.log("DATA INICIO USUARIO", this.usuario);
  }
  async btnRegistrarVehiculo(){
    const navigationExtras:NavigationExtras = {
      queryParams: {email: this.email}
    };
    this.router.navigate(['/agregar-vehiculo'], navigationExtras);
  }

  async btnObtenerVehiculos(){
    this.vehiculos = await this.apiservice.obtenerVehiculo();
  }

}





}