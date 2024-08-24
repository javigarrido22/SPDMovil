import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { FirebaseService } from 'src/app/servicio/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

email=""
password=""

  constructor(private firebase:FirebaseService, private router:Router) { }

  ngOnInit() {
  }

  async logIn (){
    try {
      let usuario=await this.firebase.auth(this.email, this.password)
      console.log(usuario);
      this.router.navigateByUrl('principal');
    } catch (error){
      console.log(error);
    }
    
  }

}

/*Final clase*/
