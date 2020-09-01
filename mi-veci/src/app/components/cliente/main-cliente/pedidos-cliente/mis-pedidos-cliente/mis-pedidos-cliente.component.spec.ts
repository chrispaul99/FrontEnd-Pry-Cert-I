import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisPedidosClienteComponent } from './mis-pedidos-cliente.component';

describe('MisPedidosClienteComponent', () => {
  let component: MisPedidosClienteComponent;
  let fixture: ComponentFixture<MisPedidosClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisPedidosClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisPedidosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
