import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servicio/firebase.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(private firebase:FirebaseService) { }

  ngOnInit() {
  }

  async logout () {
    await this.firebase.logout();
  }

}
