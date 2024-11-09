import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarPage } from './recuperar.page';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

describe('RecuperarPage', () => {
  let component: RecuperarPage;
  let fixture: ComponentFixture<RecuperarPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[AngularFireAuthModule, AngularFireModule.initializeApp(environment.firebaseConfig)]
    })
    fixture = TestBed.createComponent(RecuperarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Valida que el campo email no sea vacío', () => {
    component.email='javi199822@gmail.com';
    expect(component.email).toBeTruthy();
  });

  it('Valida que el campo email no sea vacío y que tenga mas de 10 caracteres', () => {
    component.email='javi199822@gmail.com';
    expect(component.email).toBeTruthy();
    expect(component.email.length).toBeGreaterThan(10);
  });

});
