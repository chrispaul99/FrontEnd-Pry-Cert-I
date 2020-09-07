import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisPedidosComercianteComponent } from './mis-pedidos-comerciante.component';

describe('MisPedidosComercianteComponent', () => {
  let component: MisPedidosComercianteComponent;
  let fixture: ComponentFixture<MisPedidosComercianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisPedidosComercianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisPedidosComercianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
