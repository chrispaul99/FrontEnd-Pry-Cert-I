import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalComercianteComponent } from './principal-comerciante.component';

describe('PrincipalComercianteComponent', () => {
  let component: PrincipalComercianteComponent;
  let fixture: ComponentFixture<PrincipalComercianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalComercianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalComercianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
