import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionRegisterComponent } from './ubicacion-register.component';

describe('UbicacionRegisterComponent', () => {
  let component: UbicacionRegisterComponent;
  let fixture: ComponentFixture<UbicacionRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbicacionRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacionRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
