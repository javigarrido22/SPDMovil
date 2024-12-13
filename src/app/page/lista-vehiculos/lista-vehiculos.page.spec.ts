import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ListaVehiculosPage } from './lista-vehiculos.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from 'src/app/servicio/api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Importa CUSTOM_ELEMENTS_SCHEMA

describe('ListaVehiculosPage', () => {
  let component: ListaVehiculosPage;
  let fixture: ComponentFixture<ListaVehiculosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListaVehiculosPage],
      imports: [
        HttpClientTestingModule, // Añade HttpClientTestingModule
        RouterTestingModule, // Añade RouterTestingModule para manejar rutas en el entorno de prueba
        IonicModule.forRoot() // Añade IonicModule para importar los componentes de Ionic
      ],
      providers: [
        ApiService, // Proporciona ApiService
        { provide: ActivatedRoute, useValue: { queryParams: of({ email: 'email@gmail.com' }) } }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Añade CUSTOM_ELEMENTS_SCHEMA para suprimir errores de componentes personalizados desconocidos
    }).compileComponents();

    fixture = TestBed.createComponent(ListaVehiculosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

