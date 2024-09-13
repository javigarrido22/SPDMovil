import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servicio/firebase.service';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  email: string=""
  pass: string=""
  valor: number=0
  /*number=0 en caso de que sean solo numeros*/

  constructor(public menucontroler: MenuController,private firebase:FirebaseService, private router:Router, private activate:ActivatedRoute) {
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
    this.router.navigateByUrl('../../login');
  }

  openMenu() {
    console.log('open menu');
    this.menucontroler.toggle('principal');
  }


}
