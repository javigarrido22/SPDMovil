import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/servicio/firebase.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  email="";
  password="";
  nombre="";
  apellido="";

  constructor(private firebase:FirebaseService, private router:Router) { }

  ngOnInit() {
  }

  async Registro(){
    const usuario=await this.firebase.registrar(this.email,this.password, this.apellido, this.nombre);
    console.log(usuario);
    this.router.navigateByUrl("login");

  }



}
