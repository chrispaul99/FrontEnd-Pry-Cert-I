import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegociosComercianteComponent } from './negocios-comerciante.component';

describe('NegociosComercianteComponent', () => {
  let component: NegociosComercianteComponent;
  let fixture: ComponentFixture<NegociosComercianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegociosComercianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegociosComercianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
