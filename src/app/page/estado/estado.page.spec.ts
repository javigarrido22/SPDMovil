import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstadoPage } from './estado.page';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { provideHttpClient } from '@angular/common/http';

describe('EstadoPage', () => {
  let component: EstadoPage;
  let fixture: ComponentFixture<EstadoPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[AngularFireAuthModule, AngularFireModule.initializeApp(environment.firebaseConfig)],
      providers:[provideHttpClient]
    })
    fixture = TestBed.createComponent(EstadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
