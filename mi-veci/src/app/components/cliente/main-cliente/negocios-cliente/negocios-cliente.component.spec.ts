import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegociosClienteComponent } from './negocios-cliente.component';

describe('NegociosClienteComponent', () => {
  let component: NegociosClienteComponent;
  let fixture: ComponentFixture<NegociosClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegociosClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegociosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
