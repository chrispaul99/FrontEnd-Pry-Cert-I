import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenPedidosComponent } from './resumen-pedidos.component';

describe('ResumenPedidosComponent', () => {
  let component: ResumenPedidosComponent;
  let fixture: ComponentFixture<ResumenPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
