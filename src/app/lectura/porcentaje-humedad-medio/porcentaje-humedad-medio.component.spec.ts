import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcentajeHumedadMedioComponent } from './porcentaje-humedad-medio.component';

describe('PorcentajeHumedadMedioComponent', () => {
  let component: PorcentajeHumedadMedioComponent;
  let fixture: ComponentFixture<PorcentajeHumedadMedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorcentajeHumedadMedioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorcentajeHumedadMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
