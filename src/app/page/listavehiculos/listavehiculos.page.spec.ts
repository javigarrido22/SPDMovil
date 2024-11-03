import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListavehiculosPage } from './listavehiculos.page';

describe('ListavehiculosPage', () => {
  let component: ListavehiculosPage;
  let fixture: ComponentFixture<ListavehiculosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListavehiculosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
