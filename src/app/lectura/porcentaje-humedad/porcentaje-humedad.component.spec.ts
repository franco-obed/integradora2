import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcentajeHumedadComponent } from './porcentaje-humedad.component';

describe('PorcentajeHumedadComponent', () => {
  let component: PorcentajeHumedadComponent;
  let fixture: ComponentFixture<PorcentajeHumedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorcentajeHumedadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorcentajeHumedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
