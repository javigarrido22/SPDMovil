import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/servicio/api.service';
import { FirebaseService } from 'src/app/servicio/firebase.service';
import { StorageService } from 'src/app/servicio/storage.service';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.page.html',
  styleUrls: ['./estado.page.scss'],
})
export class EstadoPage implements OnInit {

  constructor(private firebase:FirebaseService, private router:Router, private activate:ActivatedRoute, private storage:StorageService, private apiservice:ApiService) {}

  id_estado: string='';
  id: string='';
  token:string = '';
  

  ngOnInit() {
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0){
      this.id_estado = event.target.files[0];
    }
  }

}
