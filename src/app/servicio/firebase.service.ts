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

  async registrar(email: string, password: string, apellido: string, nombre: string){
    const request=await this.firebase.createUserWithEmailAndPassword(email,password);
    return request
  }

  async recuperar(email:string){
    const request=await this.firebase.sendPasswordResetEmail(email);
    return request
  }

  async logout(){
    await this.firebase.signOut();
  }

    
}
