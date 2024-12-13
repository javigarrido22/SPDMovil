import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AgregarVehiculoPage } from './agregar-vehiculo.page';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from 'src/app/servicio/api.service';
import { StorageService } from 'src/app/servicio/storage.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Importa CUSTOM_ELEMENTS_SCHEMA


describe('AgregarVehiculoPage', () => {
  let component: AgregarVehiculoPage;
  let fixture: ComponentFixture<AgregarVehiculoPage>;
  let storageService: StorageService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarVehiculoPage],
      imports: [
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        HttpClientTestingModule, // Añade HttpClientTestingModule
        RouterTestingModule // Añade RouterTestingModule para las rutas
      ],
      providers: [
        ApiService, 
        StorageService, 
        { provide: ActivatedRoute, useValue: { queryParams: of({ email: 'email@gmail.com' }) } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarVehiculoPage);
    component = fixture.componentInstance;
    storageService = TestBed.inject(StorageService);

    // Mock dataStorage
    spyOn(storageService, 'obtenerStorage').and.returnValue(Promise.resolve([{ token: 'fake-token' }]));

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
