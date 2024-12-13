import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EstadoPage } from './estado.page';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Importa CUSTOM_ELEMENTS_SCHEMA


describe('EstadoPage', () => {
  let component: EstadoPage;
  let fixture: ComponentFixture<EstadoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EstadoPage],
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

    fixture = TestBed.createComponent(EstadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
