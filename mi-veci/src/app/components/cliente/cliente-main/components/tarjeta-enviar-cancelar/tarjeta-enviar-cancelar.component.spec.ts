import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaEnviarCancelarComponent } from './tarjeta-enviar-cancelar.component';

describe('TarjetaEnviarCancelarComponent', () => {
  let component: TarjetaEnviarCancelarComponent;
  let fixture: ComponentFixture<TarjetaEnviarCancelarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaEnviarCancelarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaEnviarCancelarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
