import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Request } from './../../../node_modules/teeny-request/build/src/index.d';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor (private firebase:AngularFireAuth) { }

  async auth(email:string, password:string){
    const Request=await this.firebase.signInWithEmailAndPassword(email,password);
    return Request
  }
    
}
