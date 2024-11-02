import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { provideHttpClient } from '@angular/common/http';
import { PhotoComponent } from './component/photo/photo.component';


/*
import { FirebaseAppConfig } from './../../node_modules/@firebase/app-types/index.d';
import { FirebaseAppConfig } from './../../node_modules/@firebase/app-compat/dist/esm/src/public-types.d';
import { environment } from 'src/environments/environment';
AngularFireModule.initializeApp(environment.FirebaseAppConfig)
*/
@NgModule({
  declarations: [AppComponent,PhotoComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireAuthModule, AngularFireModule.initializeApp(environment.firebaseConfig)],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
