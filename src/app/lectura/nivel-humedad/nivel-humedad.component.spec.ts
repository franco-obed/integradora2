import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelHumedadComponent } from './nivel-humedad.component';

describe('NivelHumedadComponent', () => {
  let component: NivelHumedadComponent;
  let fixture: ComponentFixture<NivelHumedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelHumedadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelHumedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
