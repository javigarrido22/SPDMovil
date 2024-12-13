import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PerfilPage } from './perfil.page';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa HttpClientTestingModule
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing'; // Añade RouterTestingModule
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Importa CUSTOM_ELEMENTS_SCHEMA


describe('PerfilPage', () => {
  let component: PerfilPage;
  let fixture: ComponentFixture<PerfilPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilPage],
      imports: [
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        HttpClientTestingModule, // Añade HttpClientTestingModule
        RouterTestingModule // Añade RouterTestingModule para las rutas
      ],
      providers: [
        { provide: ActivatedRoute, useValue: { queryParams: of({ email: 'email@gmail.com' }) } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

