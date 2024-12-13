import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrincipalPage } from './principal.page';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa HttpClientTestingModule
import { RouterTestingModule } from '@angular/router/testing'; // Para pruebas de rutas

describe('PrincipalPage', () => {
  let component: PrincipalPage;
  let fixture: ComponentFixture<PrincipalPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalPage], // Declara el componente PrincipalPage
      imports: [
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        HttpClientTestingModule, // Añade HttpClientTestingModule
        RouterTestingModule // Añade RouterTestingModule para las rutas
      ],
      providers: [
        { provide: ActivatedRoute, useValue: { queryParams: of({ email: 'email@gmail.com' }) } }
      ]
    }).compileComponents(); // Asegúrate de compilar los componentes

    fixture = TestBed.createComponent(PrincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
