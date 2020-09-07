import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosComercianteComponent } from './pedidos-comerciante.component';

describe('PedidosComercianteComponent', () => {
  let component: PedidosComercianteComponent;
  let fixture: ComponentFixture<PedidosComercianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosComercianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosComercianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
