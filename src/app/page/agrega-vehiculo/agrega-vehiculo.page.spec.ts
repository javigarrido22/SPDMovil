import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregaVehiculoPage } from './agrega-vehiculo.page';

describe('AgregaVehiculoPage', () => {
  let component: AgregaVehiculoPage;
  let fixture: ComponentFixture<AgregaVehiculoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaVehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
