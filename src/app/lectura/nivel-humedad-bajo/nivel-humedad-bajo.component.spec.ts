import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelHumedadBajoComponent } from './nivel-humedad-bajo.component';

describe('NivelHumedadBajoComponent', () => {
  let component: NivelHumedadBajoComponent;
  let fixture: ComponentFixture<NivelHumedadBajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelHumedadBajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelHumedadBajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
