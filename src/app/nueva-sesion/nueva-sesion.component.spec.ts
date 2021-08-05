import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaSesionComponent } from './nueva-sesion.component';

describe('NuevaSesionComponent', () => {
  let component: NuevaSesionComponent;
  let fixture: ComponentFixture<NuevaSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
