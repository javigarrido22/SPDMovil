import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { FirebaseService } from 'src/app/servicio/firebase.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  email: string =""
  pass: string=""
  valor: number=0
  /*number=0 en caso de que sean solo numeros*/

  constructor(public menucontroller:MenuController, private firebase:FirebaseService, private router:Router, private activate:ActivatedRoute) {
    this.activate.queryParams.subscribe(params => {

      this.email=params['email'];
      this.pass=params ['password'];
      this.valor=params['valor'];
      //console.log(this.email, this.pass, this.valor);
    });

   }

   ngOnInit() {
  }

  async logout () {
    await this.firebase.logout();
    this.router.navigateByUrl("login")
  }




}