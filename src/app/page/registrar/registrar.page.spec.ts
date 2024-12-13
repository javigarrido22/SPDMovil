import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RegistrarPage } from './registrar.page';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from 'src/app/servicio/api.service';
import { StorageService } from 'src/app/servicio/storage.service';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Importa CUSTOM_ELEMENTS_SCHEMA


describe('RegistrarPage', () => {
  let component: RegistrarPage;
  let fixture: ComponentFixture<RegistrarPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarPage],
      imports: [
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        HttpClientTestingModule, // Añade HttpClientTestingModule
        RouterTestingModule // Añade RouterTestingModule para las rutas
      ],
      providers: [
        ApiService, // Proporciona ApiService
        StorageService // Proporciona StorageService
      ]
    }).compileComponents(); // Asegúrate de compilar los componentes

    fixture = TestBed.createComponent(RegistrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

