import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/servicio/firebase.service';
import { StorageService } from 'src/app/servicio/storage.service';
import { UserModel } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

email="javi199822@gmail.com"
password="123456"
tokenID:any="";

  constructor(private firebase:FirebaseService, private router:Router, private AlertController:AlertController, private storage:StorageService) { }

  ngOnInit() {
  }

  async logIn (){
    try {
      let usuario=await this.firebase.auth(this.email, this.password)
      this.tokenID=await usuario.user?.getIdToken();
      console.log(usuario);
      console.log("token", await usuario.user?.getIdToken());
      const navigationextras:NavigationExtras = {
        queryParams: {email: this.email}
      };
      this.StorageTest();
      this.router.navigate(['/principal'],navigationextras);
    } catch (error){
      console.log(error);
      this.popAlert();
    }
    
  }
  

  async popAlert(){
    const alert = await this.AlertController.create ({
      header: 'Error',
      message: "Usuario o contraseña incorrecta",
      buttons: ['OK']

    })
    await alert.present();
  }

  async StorageTest(){
    const jsonToken:any={
      token:this.tokenID
    }
    this.storage.agregarStorage(jsonToken);
    console.log("OBTENER", await this.storage.obtenerStorage());
  }

}

/*Final clase*/
