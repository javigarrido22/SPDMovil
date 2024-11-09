import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrincipalPage } from './principal.page';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';

describe('PrincipalPage', () => {
  let component: PrincipalPage;
  let fixture: ComponentFixture<PrincipalPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports:[AngularFireAuthModule, AngularFireModule.initializeApp(environment.firebaseConfig)],
      providers:[provideHttpClient,{provide:ActivatedRoute, useValue:{queryParams:of({email:'email@gmail.com'})}}]
    })
    fixture = TestBed.createComponent(PrincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
