import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcentajeHumedadBajoComponent } from './porcentaje-humedad-bajo.component';

describe('PorcentajeHumedadBajoComponent', () => {
  let component: PorcentajeHumedadBajoComponent;
  let fixture: ComponentFixture<PorcentajeHumedadBajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorcentajeHumedadBajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorcentajeHumedadBajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
