import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionRegisterComponent } from './confirmacion-register.component';

describe('ConfirmacionRegisterComponent', () => {
  let component: ConfirmacionRegisterComponent;
  let fixture: ComponentFixture<ConfirmacionRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmacionRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
