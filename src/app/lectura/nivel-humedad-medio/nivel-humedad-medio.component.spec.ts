import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelHumedadMedioComponent } from './nivel-humedad-medio.component';

describe('NivelHumedadMedioComponent', () => {
  let component: NivelHumedadMedioComponent;
  let fixture: ComponentFixture<NivelHumedadMedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelHumedadMedioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelHumedadMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
