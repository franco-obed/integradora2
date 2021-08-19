import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscaneoComponent } from './escaneo.component';

describe('EscaneoComponent', () => {
  let component: EscaneoComponent;
  let fixture: ComponentFixture<EscaneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscaneoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscaneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
