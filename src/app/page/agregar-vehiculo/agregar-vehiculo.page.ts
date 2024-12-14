import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/servicio/api.service';
import { StorageService } from 'src/app/servicio/storage.service';
import { UserModel } from 'src/app/models/usuario';
import { FirebaseService } from 'src/app/servicio/firebase.service';

@Component({
  selector: 'app-agregar-vehiculo',
  templateUrl: './agregar-vehiculo.page.html',
  styleUrls: ['./agregar-vehiculo.page.scss'],
})
export class AgregarVehiculoPage implements OnInit {

  constructor(private apiservice:ApiService, private storage:StorageService, private activate:ActivatedRoute, private router:Router, private firebase:FirebaseService ) {
    this.activate.queryParams.subscribe(params => {
      this.email = params ['email'];
      console.log(this.email)
    })
   }


  email: string="";
  user:UserModel[]=[];
  id_usuario:number=142;
  patente:string="";
  marca:string="";
  modelo:string="";
  anio:number=0;
  color:string="";
  tipo_combustible:string="";

  token:string='eyJhbGciOiJSUzI1NiIsImtpZCI6ImU2YWMzNTcyNzY3ZGUyNjE0ZmM1MTA4NjMzMDg3YTQ5MjMzMDNkM2IiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vamF2aWVyYW1vcmFsZXMyMjA5OTgiLCJhdWQiOiJqYXZpZXJhbW9yYWxlczIyMDk5OCIsImF1dGhfdGltZSI6MTczMDU4NjA4NiwidXNlcl9pZCI6InhvTkUwR05FOXBVYXJPSE9vc1JINGN1SjZMNDIiLCJzdWIiOiJ4b05FMEdORTlwVWFyT0hPb3NSSDRjdUo2TDQyIiwiaWF0IjoxNzMwNTg2MDg2LCJleHAiOjE3MzA1ODk2ODYsImVtYWlsIjoiamF2aTE5OTgyMkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiamF2aTE5OTgyMkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.SHyCHmGSR9BjF2kla_xV-Amf9OpNlMFQHQFqfYGgrUBDjeMGGcstSwa7EJVll33CXNSsrm5LDth39O9E7_J205obNk8GGj5p4rEIk_TIs_9ylQ719YYFq_BhMnsonpqjw-z5upyYqEmRGBcBwciu1zxv7LBgdtjP0UEvv1wkHi1SrXxRaWHXXNE5ZsBJADgKo9_9te71L9qNalDMwXPg1QWDkFiRX1hxpdUOT1koxIy0Gj6WdSndS2oZlzmi_k5ckVmq5oxJk5gq6H8oDC1OvSF5tHt8gZTt_2UuUKgFJb-DNXqHj1znGVyKNi2PfbaJsuA11kDuwAp2eB3NNYczJg';
  
  archivoImagen: File | null = null;

  ngOnInit() {
    this.cargarUsuario();
  }

  async registrarVehiculo () {
    console.log('metodo Registro');
    try {
      let dataStorage = await this.storage.obtenerStorage();
      console.log('data storage');
      if (this.archivoImagen) {
        const request = await this.apiservice.agregarVehiculo(
          {
            p_id_usuario: this.id_usuario,
            p_patente: this.patente,
            p_marca: this.marca,
            p_modelo: this.modelo,
            p_anio: this.anio,
            p_color: this.color,
            p_tipo_combustible: this.tipo_combustible,
            token: dataStorage[0].token,

          },
          this.archivoImagen
        );
        console.log('agrega vehiculo');
      }
      this.router.navigateByUrl('principal');
    } catch (error) {
      console.log(error);
    }
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0){
      this.archivoImagen = event.target.files[0];
    }
  }

  async cargarUsuario(){
    let dataStorage = await this.storage.obtenerStorage();
    const req = await this.apiservice.obtenerUsuario(
      {
        p_correo: this.email,
        token:dataStorage[0].token
      }
    );
    this.user = req.data;
    console.log("Datos inicio usuario", this.user);
  }

}
