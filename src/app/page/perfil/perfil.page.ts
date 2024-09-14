import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/servicio/firebase.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private firebase:FirebaseService, private router:Router, private activate:ActivatedRoute) { }

  ngOnInit() {
  }

  async logout () {
    await this.firebase.logout();
    this.router.navigateByUrl("login")
  }

}
