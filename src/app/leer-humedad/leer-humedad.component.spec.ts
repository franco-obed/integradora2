import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerHumedadComponent } from './leer-humedad.component';

describe('LeerHumedadComponent', () => {
  let component: LeerHumedadComponent;
  let fixture: ComponentFixture<LeerHumedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeerHumedadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerHumedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
